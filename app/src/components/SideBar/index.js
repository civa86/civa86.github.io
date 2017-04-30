import React, { Component } from 'react';

class SideBar extends Component {
    render () {
        return (
            <div className="sidebar cursor-default no-select">
                <div>
                    <div className="title">
                        <i className="octicon octicon-repo"/> Dario Civallero
                    </div>
                    <ul>
                        <li className="directory selected">
                            <i className="chevron octicon octicon-chevron-right"/>
                            <i className="type octicon octicon-file-directory"/>
                            <span className="list-label">asd</span>
                        </li>
                        <li className="file">
                            <i className="type octicon octicon-file"/>
                            <span className="list-label">asd</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
