import React, { Component } from 'react';
import $ from 'jquery';

let resizeHandler = null;

class Section extends Component {

    getDomElement () {
        return $(this.refs.sectionElement);
    }

    setContentHeight () {
        const
            elem = this.getDomElement(),
            k = 3,
            h = $(window).height() - $('header').height() - k;
        elem.find('.section-menu').height(h);
        elem.find('.section-content').height(h - 10);
    }

    componentDidMount () {
        resizeHandler = () => this.setContentHeight();
        resizeHandler();
        $(window).on('resize', resizeHandler);
    }

    componentWillUnmount () {
        $(window).off('resize', resizeHandler);
        resizeHandler = null;
    }

    render () {
        return (
            <section id={this.props.id}
                     className="section-component"
                     ref='sectionElement'>
                {
                    this.props.children && this.props.children.length > 0 &&
                    <div className="section-menu">
                        {this.props.children[0]}
                    </div>
                }
                <div className={'section-content' + ((!this.props.children.length) ? ' no-menu' : '')}>
                    {
                        this.props.children && this.props.children.length > 0 &&
                        this.props.children[1]
                    }
                    {
                        this.props.children && !this.props.children.length &&
                        this.props.children
                    }
                </div>
            </section>
        );
    }
}

export default Section;
