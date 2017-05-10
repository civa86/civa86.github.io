import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Clippy extends Component {

    constructor (props) {
        super(props);

        this.enabledFeature = false;

        if (document && document.execCommand && typeof document.execCommand === 'function') {
            this.enabledFeature = true;
        }
    }

    add2clipboard (text) {
        const tmpEl = document.createElement("textarea");

        tmpEl.style.opacity = 0;
        tmpEl.style.position = "absolute";
        tmpEl.style.pointerEvents = "none";
        tmpEl.style.zIndex = -1;
        tmpEl.value = text;

        document.body.appendChild(tmpEl);
        tmpEl.select();
        document.execCommand("copy");
        document.body.removeChild(tmpEl);
    }

    onCopyClick () {
        const clone = $('.code').clone();

        clone.find('.visible-xs').remove();
        clone.find('.visible-sm').remove();

        const textToCopy = clone.text()
                                .replace(/(\/\*(.*)\*\/)/g, '')
                                .replace(/((]|})\w)/g, s => s.charAt(0) + '\n' + s.charAt(1))
                                .replace(/\s\s+/g, ' ')
                                .replace(/return/g, '\nreturn')
                                .replace(/newWin\./g, '\nnewWin\.');

        this.add2clipboard(textToCopy);
    }

    render () {
        const { label } = this.props;

        return (
            <span>
                {
                    this.enabledFeature &&
                    <span className="cursor-pointer"
                          onClick={() => this.onCopyClick()}>
                        <i className="octicon octicon-clippy"/> {label}
                    </span>
                }
                {
                    !this.enabledFeature &&
                    label
                }
            </span>
        );
    }
}

Clippy.propTypes = {
    label: PropTypes.string.isRequired
};

export default Clippy;
