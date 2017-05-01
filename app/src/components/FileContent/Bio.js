import React from 'react';
import moment from 'moment';

import Code, { HtmlTag, CodeLine } from '../Code';

const Bio = () => {

    const age = moment().diff(moment('1986-08-17 15:00:00'), 'years');

    console.log(age)

    return (
        <Code>
            <CodeLine>
                <span className="comment">{'<!-- Personal Info -->'}</span>
            </CodeLine>
            <HtmlTag tag="div"
                      attrs={[
                        { key: 'id', val: 'name' }
                      ]}
                      text="Dario"
            />
            <HtmlTag tag="div"
                     attrs={[
                        { key: 'id', val: 'surname' }
                      ]}
                     text="Civallero"
            />
            <HtmlTag tag="div"
                     attrs={[
                        { key: 'id', val: 'age' }
                     ]}
                     text={age}
            />
        </Code>
    );
};

export default Bio;
