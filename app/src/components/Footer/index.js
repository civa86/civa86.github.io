import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    const { currentFile, currentFileType } = props;

    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="footer-elem">{currentFile}</div>
                    </div>
                    <div className="col-xs-6 text-right">
                        <span className="footer-elem hidden-xs">LF</span>
                        <span className="footer-elem hidden-xs">UTF-8</span>
                        <span className="footer-elem">{currentFileType}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    currentFile: PropTypes.string,
    currentFileType: PropTypes.string
};

export default Footer;
