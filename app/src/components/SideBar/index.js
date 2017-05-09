import React from 'react';
import PropTypes from 'prop-types';

const SideBar = (props) => {

    function buildSelectedClass (name, inputClass) {
        return (name === props.fileTreeSelected) ? inputClass + ' selected' : inputClass;
    }

    function buildCollapsedClass (collapsed, inputClass) {
        return (collapsed === true) ? inputClass + ' collapsed' : inputClass;
    }

    function renderFile (f) {
        return (
            <div key={f.name}
                 className="file-tree-elem file"
                 onTouchEnd={() => props.onOpenFile(f.name)}
                 onClick={() => {
                     props.onSelectElem(f.name, false);
                     props.onOpenFile(f.name);
                 }}>
                <span className={buildSelectedClass(f.name, '')}>
                    <i className="type octicon octicon-file"/>
                    <span className="list-label">{f.name}</span>
                </span>
            </div>
        );
    }

    function renderDirectory (d) {
        return (
            <div key={d.name}>
                <div className={buildCollapsedClass(d.collapsed, 'file-tree-elem directory')}
                     onClick={() => props.onSelectElem(d.name, true)}>
                    <span className={buildSelectedClass(d.name, '')}>
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
                            {renderFileTree(d.children)}
                        </div>
                    }
                </div>
            </div>
        );
    }

    function renderFileTree (files) {
        return files.map(f => {
            if (f.dir) {
                return renderDirectory(f);
            } else {
                return renderFile(f);
            }
        });
    }

    return (
        <div className="sidebar cursor-default no-select">
            <div>
                <div className="title">
                    <i className="octicon octicon-repo"/> Dario Civallero
                </div>
                <div className="file-tree root">
                    {renderFileTree(props.fileTree)}
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    onOpenFile: PropTypes.func.isRequired,
    onSelectElem: PropTypes.func.isRequired,
    fileTree: PropTypes.array
};

export default SideBar;
