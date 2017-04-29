import React, { Component } from 'react';

export class Tabs extends Component {
    dragTarget = null;
    mouseMoveHandler = this.handleMouseMove.bind(this);
    mouseUpHandler = this.handleMouseUp.bind(this);
    singleTabWidth = 0;
    tabTotal = 0;

    switchTab(index) {
        this.props.onTabSwitch(index);
    }

    handleMouseDown(event) {
        this.dragTarget = {
            target: event.currentTarget,
            x: event.currentTarget.offsetLeft,
            left: event.currentTarget.offsetLeft + 'px',
            mouseX: event.pageX,
            index: this.getIndexByLeft(event.currentTarget.offsetLeft),
        };
    }

    handleMouseUp() {
        this.dragTarget = null;
        this.forceUpdate();
    }

    handleMouseMove(event) {
        // Draggable
        if(this.dragTarget) {
            event.preventDefault();
            event.stopPropagation();

            const dragTarget = this.dragTarget;
            const target = dragTarget.target;
            const one = this.refs.tabs.offsetWidth / 100;
            const maxLeft = one + one * this.singleTabWidth * (this.tabTotal - 1);

            let left = (dragTarget.x + event.pageX - dragTarget.mouseX);

            if(left < one) {
                left = one;
            }

            if(left > maxLeft) {
                left = maxLeft;
            }

            let index = this.getIndexByLeft(left);

            if(index != dragTarget.index) {
                const a = index, b = dragTarget.index;

                this.props.onTabPositionChange(a, b);

                dragTarget.index = index;
            }

            dragTarget.left = left + 'px';
            this.forceUpdate();
        }
    }

    handleClose(index, event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onTabClose(index);
    }

    handleAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onTabAdd();
    }

    getLeftByIndex(index) {
        return +this.singleTabWidth * index;
    }

    getIndexByLeft(left) {
        let one = this.refs.tabs.offsetWidth / 100;
        return Math.round((left - one) / (one * this.singleTabWidth));
    }

    componentDidMount() {
        if(this.props.draggable) {
            window.addEventListener('mousemove', this.mouseMoveHandler);
            window.addEventListener('mouseup', this.mouseUpHandler);
        }
    }

    componentWillUnmount() {
        if(this.props.draggable) {
            window.removeEventListener('mousemove', this.mouseMoveHandler);
            window.removeEventListener('mouseup', this.mouseUpHandler);
        }
    }

    render() {
        let props = this.props;
        this.tabTotal = props.children.length;
        this.singleTabWidth = 98 / this.tabTotal;

        let tabs = props.children.map((tab, index) => {
            let style = {};
            let position = index;
            let icon = null;

            if(tab.props.icon) {
                if(typeof tab.props.icon === 'string') {
                    icon = (<TabIcon type={ tab.props.icon }></TabIcon>);
                } else {
                    icon = tab.props.icon;
                }
            }

            style['zIndex'] = this.tabTotal - position;
            style['left'] = this.getLeftByIndex(position) + '%';
            style['width'] = this.singleTabWidth + '%';

            if(this.dragTarget && this.dragTarget.index == position) {
                style['left'] = this.dragTarget.left;
            }

            return (
                <div
                    key={ index }
                    className={ "tab-button" + (props.active == index ? " active" : "") }
                    style={ style }
                    onClick={ this.switchTab.bind(this, index) }
                    onMouseDown={ this.handleMouseDown.bind(this) }
                >
                    <div
                        className="tab"
                        style={ this.props.color ? { borderColor: this.props.color } : null }
                    ></div>
                    <div className={ "text" + (tab.props.showClose ? " with-close" : "") }>
                        { icon }
                        { tab.props.title }
                    </div>
                    { tab.props.showClose ? (<div className="close" onClick={ this.handleClose.bind(this, index) }></div>) : null }
                </div>
            );
        });

        return (
            <div
                className="r-a-t"
            >
                <div className={ "tab-wrapper" + (this.props.showAdd ? " with-add" : "") } ref="tabs">
                    { tabs }
                </div>
                {
                    (this.props.showAdd) ? (<div className="add-wrapper" onClick={ this.handleAdd.bind(this) }></div>) : null
                }
            </div>
        );
    }
}

const Tab = ({ children }) => {
    return (
        <div>{ children }</div>
    );
};

const TabIcon = ({ type }) => {
    return (
        <div className={ "icon " + type }>
            { type == 'loading' ? (<div className="mask"></div>) : null }
        </div>
    );
};

export default Tabs;
export { Tab };
