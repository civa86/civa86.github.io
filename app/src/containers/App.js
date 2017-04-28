import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    render () {
        return (
            <div id="wrapper" className="cursor-default">
                <div className="container-fluid text-center">
                    <h1>Dario Civallero</h1>
                </div>
            </div>
        );
    }
}

function mapStateToProps () {
    return {};
}

export default connect(mapStateToProps)(App);
