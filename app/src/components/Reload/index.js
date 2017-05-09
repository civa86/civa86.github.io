import React from 'react';
import PropTypes from 'prop-types';

const Reload = (props) => {

    return (
        <div className="reload">
            <i className="glyphicon glyphicon-refresh" onClick={() => props.onReload()}/>
        </div>
    );
};

Reload.propTypes = {
    onReload: PropTypes.func.isRequired
};

export default Reload;
