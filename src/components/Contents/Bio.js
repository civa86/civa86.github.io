import React from 'react'
import moment from 'moment'

import { CodeBlock, CodeLine, Tabulator, CommentLine, HtmlLine, HtmlOpenTag, HtmlCloseTag } from '../ContentFormatters'

const Bio = () => {
  const age = moment().diff(moment('1986-08-17 15:00:00'), 'years')
  const exp = moment().diff(moment('2009-11-02 09:00:00'), 'years')

  return (
    <CodeBlock>
      <CodeLine>
        <CommentLine>{'<!-- Personal Info -->'}</CommentLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="div" attributes={[{ key: 'id', value: 'firstname' }]}>
          Dario
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="div" attributes={[{ key: 'id', value: 'lastname' }]}>
          Civallero
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="div" attributes={[{ key: 'id', value: 'from' }]}>
          Italy
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlLine tag="div" attributes={[{ key: 'id', value: 'age' }]}>
          {age}
        </HtmlLine>
      </CodeLine>
      <CodeLine>
        <HtmlOpenTag tag="p" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="HtmlLine__content">Full Stack Software Engineer</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="HtmlLine__content">with {exp} years of professional experience</span>
      </CodeLine>
      <CodeLine>
        <HtmlCloseTag tag="p" />
      </CodeLine>
      <CodeLine>
        <CommentLine>{'<!-- About Me -->'}</CommentLine>
      </CodeLine>
      <CodeLine>
        <HtmlOpenTag tag="ul" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">JavaScript lover, Functional thinker</HtmlLine>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">Enthusiastic Father</HtmlLine>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <HtmlLine tag="li">Skateboarder, Snowboarder</HtmlLine>
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
