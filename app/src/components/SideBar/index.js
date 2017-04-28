import React from 'react';
import { Link } from 'react-router';

const SideBar = () => {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav no-select">
                <li>
                    <Link to="/index"
                          className="cursor-default"
                          activeClassName="active">
                                <span className="menu-item">
                                    <i className="ion-home"/>
                                </span>
                    </Link>
                </li>
                <li>
                    <Link to="/projects"
                          className="cursor-default"
                          activeClassName="active">
                                <span className="menu-item">
                                    <i className="devicons devicons-code_badge"/>
                                </span>
                    </Link>
                </li>
                <li>
                    <Link to="/servers"
                          className="cursor-default"
                          activeClassName="active">
                                <span className="menu-item">
                                    <i className="devicons devicons-terminal"/>
                                </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
