import React from 'react';

const Reload = (props) => {

    return (
        <div className="reload">
            <i className="glyphicon glyphicon-refresh" onClick={() => props.onReload()}/>
        </div>
    );
};

export default Reload;
