import React from 'react'
import moment from 'moment'

import { CodeBlock, CodeLine, Tabulator, HtmlLine, HtmlOpenTag, HtmlCloseTag } from '../ContentFormatters'

const Bio = () => {
  const age = moment().diff(moment('1986-08-17 15:00:00'), 'years')
  const exp = moment().diff(moment('2009-11-02 09:00:00'), 'years')

  return (
    <CodeBlock>
      <CodeLine>
        <HtmlOpenTag tag="div" attributes={[{ key: 'class', value: 'introduction' }]} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="HtmlLine__content">Senior Software Engineer</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="HtmlLine__content">with {exp} years of experience</span>
      </CodeLine>
      <CodeLine>
        <HtmlCloseTag tag="div" />
      </CodeLine>

      <CodeLine>
        <HtmlLine tag="p" attributes={[{ key: 'id', value: 'first-name' }]}>
          Dario
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="p" attributes={[{ key: 'id', value: 'last-name' }]}>
          Civallero
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="p" attributes={[{ key: 'id', value: 'age' }]}>
          {age}
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="p" attributes={[{ key: 'id', value: 'from' }]}>
          Italy
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="p" attributes={[{ key: 'id', value: 'hometown' }]}>
          Turin
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlOpenTag tag="p" attributes={[{ key: 'id', value: 'speak' }]} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="HtmlLine__content">Italian, English</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="HtmlLine__content">French, Spanish</span>
      </CodeLine>
      <CodeLine>
        <HtmlCloseTag tag="p" />
      </CodeLine>

      <CodeLine>
        <HtmlOpenTag tag="ul" attributes={[{ key: 'class', value: 'about-me' }]} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">JavaScript Lover</HtmlLine>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">Functional Thinker</HtmlLine>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">Enthusiastic Father</HtmlLine>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">
          Skateboarder<span className="CommentLine">{'/'}</span>Snowboarder
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">Black Cats Addicted</HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlCloseTag tag="ul" />
      </CodeLine>
    </CodeBlock>
  )
}

export default Bio
