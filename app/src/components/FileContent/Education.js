import React from 'react';

import Code, { CodeLine, Tabulator } from '../Code';

const Education = () => {
    function curlyStart() {
        return '{';
    }

    function curlyEnd() {
        return '}';
    }

    return (
        <Code>
            <CodeLine><span className="common">{curlyStart()}</span></CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">"school"</span>
                {': '}
                <span className="tag4">"University of Turin"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">"department"</span>
                {': '}
                <span className="tag4">"Computer Science"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">"title"</span>
                {': '}
                <span className="tag4">"Bachelor Degree"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="attr-key">"languages"</span>
                {': '}
                <span className="common">[</span>
            </CodeLine>

            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyStart()}</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"id"</span>
                {': '}
                <span className="tag4">"italian"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"proficiency"</span>
                {': '}
                <span className="tag4">"native"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyEnd()},</span>
            </CodeLine>

            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyStart()}</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"id"</span>
                {': '}
                <span className="tag4">"english"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"proficiency"</span>
                {': '}
                <span className="tag4">"professional"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyEnd()},</span>
            </CodeLine>

            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyStart()}</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"id"</span>
                {': '}
                <span className="tag4">"french"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"proficiency"</span>
                {': '}
                <span className="tag4">"elementary"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyEnd()},</span>
            </CodeLine>

            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyStart()}</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"id"</span>
                {': '}
                <span className="tag4">"spanish"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="attr-key">"proficiency"</span>
                {': '}
                <span className="tag4">"elementary"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="common">{curlyEnd()}</span>
            </CodeLine>

            <CodeLine>
                <Tabulator/>
                <span className="common">]</span>
            </CodeLine>
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
        </Code>
    );
};

export default Education;
