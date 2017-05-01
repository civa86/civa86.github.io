import React, { Component } from 'react';

//TODO change with a pureFn component...

class SideBar extends Component {

    buildSelectedClass (name, inputClass) {
        const { fileTreeSelected } = this.props;
        return (name === fileTreeSelected) ? inputClass + ' selected' : inputClass;
    }

    buildCollapsedClass (collapsed, inputClass) {
        return (collapsed === true) ? inputClass + ' collapsed' : inputClass;
    }

    renderFile (f) {
        const { onOpenFile, onSelectElem } = this.props;

        return (
            <div key={f.name}
                 className="file-tree-elem file"
                 onTouchEnd={() => onOpenFile(f.name)}
                 onClick={() => onSelectElem(f.name, false)}
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
                <div className={this.buildCollapsedClass(d.collapsed, 'file-tree-elem directory')}
                     onClick={() => onSelectElem(d.name, true)}>
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
                        <div className="file-tree inner-level"
                             style={{ height: (d.collapsed === true) ? 0 : 'auto' }}>
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
