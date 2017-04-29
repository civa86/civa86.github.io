import React, { Component } from 'react';
import $ from 'jquery';

let lineClickHandler,
    globalClickDetector;

class Code extends Component {

    componentDidMount () {
        lineClickHandler = e => {
            $('.code').find('span.selected').removeClass('selected');
            $(e.target).addClass('selected');
        };

        globalClickDetector = e => {
            if (!$(e.target).closest('.code').length) {
                $('.code').find('span.selected').removeClass('selected');
            }
        };

        $(document).on('click', globalClickDetector);
        $('.code').on('click', 'span', lineClickHandler);
        $('.code').on('blur', () => console.log('asd'));
    }

    componentWillUnmount () {
        $('.code').off('click', lineClickHandler);
        $(document).off('click', globalClickDetector);
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
