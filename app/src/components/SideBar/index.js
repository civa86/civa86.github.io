import React, { Component } from 'react';

class SideBar extends Component {
    render () {
        return (
            <div className="sidebar cursor-default no-select">
                <div>
                    <div className="title">
                        <i className="octicon octicon-repo"/> Dario Civallero
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
