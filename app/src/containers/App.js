import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    render () {
        return (
            <div id="wrapper" className="cursor-default">
                <h1>Dario Civallero</h1>
            </div>
        );
    }
}

function mapStateToProps () {
    return {};
}

export default connect(mapStateToProps)(App);
