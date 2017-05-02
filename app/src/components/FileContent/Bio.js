import React from 'react';
import moment from 'moment';

import Code, { HtmlTag, CodeLine, Tabulator } from '../Code';

const Bio = () => {
    const
        age = moment().diff(moment('1986-08-17 15:00:00'), 'years');
    // exp = moment().diff(moment('2009-11-02 09:00:00'), 'years');

    return (
        <Code>
            <CodeLine>
                <span className="tag">{'<section '}</span>
                <span className="attr-key">id</span>
                {'='}
                <span className="attr-val">"bio"</span>
                <span className="tag">{'>'}</span>
            </CodeLine>
            <HtmlTag tag="h1"
                     classes="tag2"
                     indent={1}
                     text="Full Stack Web Developer"
            />
            <CodeLine><Tabulator/><span className="comment">{'<!-- Personal Details -->'}</span></CodeLine>
            <HtmlTag tag="div"
                     attrs={[{ key: 'id', val: 'name' }]}
                     indent={1}
                     text="Dario"
            />
            <HtmlTag tag="div"
                     attrs={[{ key: 'id', val: 'surname' }]}
                     indent={1}
                     text="Civallero"
            />
            <HtmlTag tag="div"
                     attrs={[{ key: 'id', val: 'age' }]}
                     indent={1}
                     text={age}
            />
            <CodeLine><Tabulator/><span className="comment">{'<!-- About Me -->'}</span></CodeLine>
            <CodeLine><Tabulator/><span className="tag2">{'<ul>'}</span></CodeLine>
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={2}
                     text="HTML5, Javascript, PHP, Clojure lover"
            />
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={2}
                     text="Skateboarder"
            />
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={2}
                     text="Snowboarder"
            />
            <HtmlTag tag="li"
                     classes="tag3"
                     indent={2}
                     text="Black cats addicted"
            />
            <CodeLine><Tabulator/><span className="tag2">{'</ul>'}</span></CodeLine>
            <CodeLine><span className="tag">{'</section>'}</span></CodeLine>
        </Code>
    );
};

export default Bio;
