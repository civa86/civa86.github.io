import React from 'react'

import { CodeBlock, CodeLine, CssBlockStart, CssRule, CssBlockEnd } from '../ContentFormatters'

export default function Career() {
  return (
    <CodeBlock>
      <CodeLine>
        <CssBlockStart
          attributes={[
            { key: 'from', value: '09-2005' },
            { key: 'to', value: '10-2009' }
          ]}
        />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="school" ruleValue="University of Turin" quoted />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="title" ruleValue="BD in Computer Science" quoted />
      </CodeLine>
      <CodeLine>
        <CssBlockEnd />
      </CodeLine>

      <CodeLine>
        <CssBlockStart
          attributes={[
            { key: 'from', value: '11-2009' },
            { key: 'to', value: '08-2012' }
          ]}
        />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="@" ruleValue="Criticalcase" quoted />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="role" ruleValue="Web Developer" quoted />
      </CodeLine>
      <CodeLine>
        <CssBlockEnd />
      </CodeLine>

      <CodeLine>
        <CssBlockStart
          attributes={[
            { key: 'from', value: '09-2012' },
            { key: 'to', value: '04-2015' }
          ]}
        />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="@" ruleValue="Wedoo" quoted />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="role" ruleValue="Full Stack Developer" quoted />
      </CodeLine>
      <CodeLine>
        <CssBlockEnd />
      </CodeLine>

      <CodeLine>
        <CssBlockStart
          attributes={[
            { key: 'from', value: '04-2015' },
            { key: 'to', value: '07-2018' }
          ]}
        />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="@" ruleValue="Etiqa" quoted />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="role" ruleValue="Software Engineer" quoted />
      </CodeLine>
      <CodeLine>
        <CssBlockEnd />
      </CodeLine>

      <CodeLine>
        <CssBlockStart
          attributes={[
            { key: 'from', value: '07-2018' },
            { key: 'to', value: 'present' }
          ]}
        />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="@" ruleValue="Protocube Reply" quoted />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="role" ruleValue="Software Architect" quoted />
      </CodeLine>
      <CodeLine>
        <CssBlockEnd />
      </CodeLine>
    </CodeBlock>
  )
}
