import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    render () {
        return (
            <div className="container-fluid text-center">
                <h1>Dario Civallero</h1>
                <p>Full Stack Web Developer</p>
                <br/>
                <br/>
                <div className="under-construction">
                    <i className="ion-alert-circled icn"/>
                    <span>Under Construction</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps () {
    return {};
}

export default connect(mapStateToProps)(App);
