import React, { Component } from 'react';
import moment from 'moment'

class Clock extends Component {
    constructor (props) {
        super(props);
        moment.locale('it');
        this.state = { date: moment() };
    }

    componentDidMount () {
        this.timerID = setInterval(
            () => this.setState({ date: moment() }),
            1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timerID);
    }

    render () {
        return (
            <div className="clock">
                <div className="date">
                    {this.state.date.format('DD MMMM').toUpperCase()}
                </div>
                <div className="hour">
                    {this.state.date.format('HH:mm:ss')}
                </div>

            </div>
        );
    }
}

export default Clock;
