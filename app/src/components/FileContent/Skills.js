import React from 'react';

import Code, { CodeLine, Tabulator, curlyStart, curlyEnd } from '../Code';

const Skills = () => {

    return (
        <Code>

            <CodeLine>
                <span className="tag3">function </span>
                <span className="tag2">javascript </span>
                <span className="common">(<i className="devicons devicons-javascript_badge"/>) {curlyStart()}</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="tag3">var </span>
                <span className="common">frameworks </span>
                <span className="operator">= </span>
                <span className="common">[ </span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"<i className="devicons devicons-react"/>React"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"<i className="devicons devicons-angular"/>Angular"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="common">]</span>
            </CodeLine>
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
        </Code>
    );
};

export default Skills;
