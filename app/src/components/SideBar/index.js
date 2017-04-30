import React, { Component } from 'react';
import $ from 'jquery';

let clickHandler;

class SideBar extends Component {

    // componentDidMount () {
    //     clickHandler = e => {
    //         //TODO manage selected with redux and sync with tab focus...
    //         $('.sidebar').find('.file-tree-elem.selected').removeClass('selected');
    //         $(e.target.closest('.file-tree-elem')).addClass('selected');
    //     };
    //
    //     $('.sidebar').on('click', '.file-tree-elem', clickHandler);
    // }
    //
    // componentWillUnmount () {
    //     $('.sidebar').off('click', clickHandler);
    // }

    buildSelectedClass (name, inputClass) {
        const { fileTreeSelected } = this.props;
        return (name === fileTreeSelected) ? inputClass + ' selected' : inputClass;
    }

    renderFile (f) {
        const { onOpenFile, onSelectElem } = this.props;

        return (
            <div key={f.name}
                 className="file-tree-elem file"
                 onTouchEnd={() => onOpenFile(f.name)}
                 onClick={() => onSelectElem(f.name)}
                 onDoubleClick={() => onOpenFile(f.name)}>
                <span className={this.buildSelectedClass(f.name, '')}>
                    <i className="type octicon octicon-file"/>
                    <span className="list-label">{f.name}</span>
                </span>
            </div>
        );
    }

    renderDirectory (d) {
        const { onSelectElem } = this.props;

        return (
            <div key={d.name}>
                <div
                    data-toggle="collapse"
                    data-target={'#dir-' + d.name}
                    onClick={() => onSelectElem(d.name)}
                    className="file-tree-elem directory collapsed">
                    <span className={this.buildSelectedClass(d.name, '')}>
                        <i className="chevron octicon octicon-chevron-right"/>
                        <i className="chevron octicon octicon-chevron-down"/>
                        <i className="type octicon octicon-file-directory"/>
                        <span className="list-label">{d.name}</span>
                    </span>
                </div>
                <div>
                    {
                        d.children &&
                        d.children.length > 0 &&
                        <div className="file-tree inner-level collapse"
                             id={'dir-' + d.name}>
                            {this.renderFileTree(d.children)}
                        </div>
                    }
                </div>
            </div>
        );
    }

    renderFileTree (files) {
        return files.map(f => {
            if (f.dir) {
                return this.renderDirectory(f);
            } else {
                return this.renderFile(f);
            }
        });
    }

    render () {
        const { fileTree } = this.props;

        return (
            <div className="sidebar cursor-default no-select">
                <div>
                    <div className="title">
                        <i className="octicon octicon-repo"/> Dario Civallero
                    </div>
                    <div className="file-tree root">
                        {this.renderFileTree(fileTree)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
