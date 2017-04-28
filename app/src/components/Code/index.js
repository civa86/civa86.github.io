import React, { Component } from 'react';
import $ from 'jquery';

let clickHandler;

class Code extends Component {

    componentDidMount () {
        clickHandler = e => {
            $('.code').find('span.selected').removeClass('selected');
            $(e.target).addClass('selected');
        };

        $('.code').on('click', 'span', clickHandler);
    }

    componentWillMount () {
        $('.code').off('click', clickHandler);
    }

    render () {
        return (
            <div className="code">
                {this.props.children}
            </div>
        );
    }
}

export default Code;
