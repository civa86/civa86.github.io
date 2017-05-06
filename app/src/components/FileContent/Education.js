import React from 'react';

import Code, { CodeLine, Tabulator, curlyStart, curlyEnd } from '../Code';

const Education = () => {

    return (
        <Code>
            <CodeLine><span className="tag"># Education</span></CodeLine>
            <CodeLine/>
            <CodeLine>
                <span className="common">Bachelor Degree in Computer Science</span>
            </CodeLine>
            <CodeLine/>
            <CodeLine><span className="tag">#### School</span></CodeLine>
            <CodeLine/>
            <CodeLine>
                <span className="common">University of Turin, Italy</span>
            </CodeLine>
            <CodeLine/>
            <CodeLine>
                <span className="tag">## Languages</span>
            </CodeLine>
            <CodeLine/>
            <CodeLine>
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag2">language</span>
                &nbsp;
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag2">proficiency</span>
                &nbsp;&nbsp;
                <span className="tag3">|</span>
            </CodeLine>
            <CodeLine>
                <span className="tag3">|</span>
                &nbsp;
                <span className="common">:-------</span>
                &nbsp;
                <span className="tag3">|</span>
                &nbsp;
                <span className="common">:-----------</span>
                &nbsp;
                <span className="tag3">|</span>
            </CodeLine>
            <CodeLine>
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">Italian</span>
                &nbsp;&nbsp;
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">native</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="tag3">|</span>
            </CodeLine>
            <CodeLine>
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">English</span>
                &nbsp;&nbsp;
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">professional</span>
                &nbsp;
                <span className="tag3">|</span>
            </CodeLine>
            <CodeLine>
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">French</span>
                &nbsp;&nbsp;&nbsp;
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">elementary</span>
                &nbsp;&nbsp;&nbsp;
                <span className="tag3">|</span>
            </CodeLine>
            <CodeLine>
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">Spanish</span>
                &nbsp;&nbsp;
                <span className="tag3">|</span>
                &nbsp;
                <span className="tag4">elementary</span>
                &nbsp;&nbsp;&nbsp;
                <span className="tag3">|</span>
            </CodeLine>
            <CodeLine/>
        </Code>
    );
};

export default Education;
