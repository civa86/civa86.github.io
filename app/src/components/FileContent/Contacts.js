import React from 'react';

import Code, { CodeLine, Tabulator, curlyStart, curlyEnd } from '../Code';

const Contacts = () => {

    return (
        <Code>
            <CodeLine><span className="common">{curlyStart()}</span></CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">
                    <i className="octicon octicon-mail visible-xs-inline"/>
                    <span className="hidden-xs">{'"email"'}</span>
                </span>
                {': '}
                <span className="tag4">
                    <a href="mailto:dario.civallero@gmail.com">{'"dario.civallero@gmail.com"'}</a>
                </span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">
                    <i className="octicon octicon-mark-github visible-xs-inline"/>
                    <span className="hidden-xs">{'"github"'}</span>
                </span>
                {': '}
                <span className="tag4">
                    <a href="https://github.com/civa86"
                       target="_blank"
                       rel="noopener noreferrer">{'"civa86"'}</a>
                </span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">
                    <span>{'"social"'}</span>
                </span>
                {': '}
                <span className="common">[</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">
                    <a href="https://www.linkedin.com/in/dario-civallero-882128aa/"
                       target="_blank"
                       rel="noopener noreferrer">{'"linkedin"'}</a>
                </span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">
                    <a href="https://www.facebook.com/civa86"
                       target="_blank"
                       rel="noopener noreferrer">{'"facebook"'}</a>
                </span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">
                    <a href="https://twitter.com/civa_86"
                       target="_blank"
                       rel="noopener noreferrer">{'"twitter"'}</a>
                </span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">
                    <a href="https://plus.google.com/u/0/108969866828854243390"
                       target="_blank"
                       rel="noopener noreferrer">{'"google+"'}</a>
                </span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="common">]</span>
            </CodeLine>
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
            <CodeLine/>
        </Code>
    );
};

export default Contacts;
