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
                <span className="attr-key">"title"</span>
                {': '}
                <span className="tag4">"Bachelor Degree in Computer Science"</span>,
            </CodeLine>
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
        </Code>
    );
};

export default Education;
