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

        $('.code').on('click', 'span', lineClickHandler);
        $(document).on('click', globalClickDetector);
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

const CodeLine = (props) => {
    const classes = 'code-line' + ((props.classes) ? ' ' + props.classes : '');
    return <span className={classes}>{props.children}</span>;
};

const Tabulator = (props) => {
    const classes = props.classes || '';
    return (
        <span className={classes}>
            <span className="hidden-xs">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="visible-xs-inline">&nbsp;&nbsp;</span>
        </span>
    );
};

const HtmlTag = (props) => {
    function getOpeningTag () {
        const classes = props.classes || 'tag';
        return (
            <span className={classes}>
                    {'<' + props.tag}
                {
                    props.attrs &&
                    props.attrs.length > 0 &&
                    props.attrs.map((a, i) => (
                        <span className="attr" key={i}>
                                &nbsp;<span className="attr-key">{a.key}</span>
                                <span className="common">{'='}</span>
                                <span className="attr-val">"{a.val}"</span>
                            </span>
                    ))
                }
                {'>'}
            </span>
        );
    }

    function getClosingTag () {
        const classes = props.classes || 'tag';
        return <span className={classes}>{'</' + props.tag + '>'}</span>
    }

    return (
        <CodeLine>
            {
                props.indent &&
                Array(props.indent).fill().map(((e, i) => <Tabulator key={i}/>))
            }
            {getOpeningTag()}
            <span className="common">{props.text}</span>
            {getClosingTag()}
        </CodeLine>
    );
};

function curlyStart () {
    return '{';
}

function curlyEnd () {
    return '}';
}

export default Code;
export {
    Tabulator,
    CodeLine,
    HtmlTag,
    curlyStart,
    curlyEnd
}
