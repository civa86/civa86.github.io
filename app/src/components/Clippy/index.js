import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Clippy extends Component {
    onCopyClick () {
        const clone = $('.code').clone();

        clone.find('.visible-xs').remove();
        clone.find('.visible-sm').remove();

        const textToCopy = clone.text()
                                .replace(/(\/\*(.*)\*\/)/g, '')
                                .replace(/((]|})\w)/g, s => s.charAt(0) + '\n' + s.charAt(1))
                                .replace(/return/g, ';return');

        return textToCopy; //TODO copy in clipboard

    }

    render () {
        const { label } = this.props;

        return (
            <span className="cursor-pointer"
                  onClick={() => this.onCopyClick()}
            >
               <i className="octicon octicon-clippy"/> {label}
           </span>
        );
    }
}

Clippy.propTypes = {
    label: PropTypes.string.isRequired
};

export default Clippy;
