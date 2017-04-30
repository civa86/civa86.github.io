import React, { Component } from 'react';
import $ from 'jquery';

const data = [ //TODO move in redux....
    {
        name: 'info',
        dir: true,
        children: [
            { name: 'bio' },
            { name: 'education' },
            { name: 'interests' }
        ]
    },
    {
        name: 'skills'
    }
];

let clickHandler;

class SideBar extends Component {

    componentDidMount () {
        clickHandler = e => {
            $('.sidebar').find('.file-tree-elem.selected').removeClass('selected');
            $(e.target.closest('.file-tree-elem')).addClass('selected');
        };

        $('.sidebar').on('click', '.file-tree-elem', clickHandler);
    }

    componentWillUnmount () {
        $('.sidebar').off('click', clickHandler);
    }

    renderFile (f) {
        const { onOpenFile } = this.props;

        return (
            <div key={f.name}
                 className="file-tree-elem file"
                 onDoubleClick={() => onOpenFile(f.name)}>
                <i className="type octicon octicon-file"/>
                <span className="list-label">{f.name}</span>
            </div>
        );
    }

    renderDirectory (d) {
        return (
            <div key={d.name}>
                <div
                    data-toggle="collapse"
                    data-target={'#dir-' + d.name}
                    className="file-tree-elem directory">
                    <i className="chevron octicon octicon-chevron-right"/>
                    <i className="chevron octicon octicon-chevron-down"/>
                    <i className="type octicon octicon-file-directory"/>
                    <span className="list-label">{d.name}</span>
                </div>
                <div>
                    {
                        d.children &&
                        d.children.length > 0 &&
                        <div className="file-tree inner-level collapse in"
                             id={'dir-' + d.name}>
                            {this.renderFilesList(d.children)}
                        </div>
                    }
                </div>
            </div>
        );
    }

    renderFilesList (files) {
        return files.map(f => {
            if (f.dir) {
                return this.renderDirectory(f);
            } else {
                return this.renderFile(f);
            }
        });
    }

    render () {
        return (
            <div className="sidebar cursor-default no-select">
                <div>
                    <div className="title">
                        <i className="octicon octicon-repo"/> Dario Civallero
                    </div>
                    <div className="file-tree root">
                        {this.renderFilesList(data)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
