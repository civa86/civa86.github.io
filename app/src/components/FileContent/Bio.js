import React from 'react';
import moment from 'moment';

import Code, { HtmlTag, CodeLine, Tabulator } from '../Code';

const Bio = () => {
    const
        age = moment().diff(moment('1986-08-17 15:00:00'), 'years'),
        exp = moment().diff(moment('2009-11-02 09:00:00'), 'years');

    return (
        <Code>
            <CodeLine><span className="comment">{'<!-- Personal Info -->'}</span></CodeLine>
            <HtmlTag tag="div"
                      attrs={[{ key: 'id', val: 'firstname' }]}
                      text="Dario"
            />
            <HtmlTag tag="div"
                     attrs={[{ key: 'id', val: 'lastname' }]}
                     text="Civallero"
            />
            <HtmlTag tag="div"
                     attrs={[{ key: 'id', val: 'country' }]}
                     text="Italy"
            />
            <HtmlTag tag="div"
                     attrs={[{ key: 'id', val: 'age' }]}
                     text={age}
            />
            <CodeLine><span className="tag4">{'<p>'}</span></CodeLine>
            <CodeLine>
                <Tabulator/>Full Stack Web Developer
            </CodeLine>
            <CodeLine>
                <Tabulator/>with {exp} years of <span className="hidden-xs">professional experience</span>
            </CodeLine>
            <CodeLine classes="visible-xs">
                <Tabulator/><span className="visible-xs-inline">professional experience</span>
            </CodeLine>
            <CodeLine><span className="tag4">{'</p>'}</span></CodeLine>
            <CodeLine><span className="comment">{'<!-- About Me -->'}</span></CodeLine>
            <CodeLine><span className="tag2">{'<ul>'}</span></CodeLine>
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={1}
                     text="JS, PHP, Clojure lover"
            />
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={1}
                     text="Skateboarder"
            />
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={1}
                     text="Snowboarder"
            />
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={1}
                     text="Black cats addicted"
            />
            <CodeLine><span className="tag2">{'</ul>'}</span></CodeLine>
        </Code>
    );
};

export default Bio;
