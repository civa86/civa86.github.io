import React from 'react'

import { CodeBlock, CodeLine, CssBlockStart, CssRule, CssBlockEnd } from '../ContentFormatters'

const Career = () => {
  return (
    <CodeBlock>
      <CodeLine>
        <CssBlockStart selector="education" type="id" />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="from" ruleValue="09-2005" />
        <CssRule ruleKey="to" ruleValue="10-2009" />
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
        <CssBlockStart selector="experience" attribute=":nth-child" attributeArg="1" type="tag" />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="from" ruleValue="11-2009" />
        <CssRule ruleKey="to" ruleValue="08-2012" />
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
        <CssBlockStart selector="experience" attribute=":nth-child" attributeArg="2" type="tag" />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="from" ruleValue="09-2012" />
        <CssRule ruleKey="to" ruleValue="04-2015" />
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
        <CssBlockStart selector="experience" attribute=":nth-child" attributeArg="3" type="tag" />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="from" ruleValue="04-2015" />
        <CssRule ruleKey="to" ruleValue="07-2018" />
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
        <CssBlockStart selector="experience" attribute=":nth-child" attributeArg="4" type="tag" />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="from" ruleValue="07-2018" />
        <CssRule ruleKey="to" ruleValue="present" />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="@" ruleValue="Protocube Reply" quoted />
      </CodeLine>
      <CodeLine>
        <CssRule ruleKey="role" ruleValue="PM, Software Engineer" quoted />
      </CodeLine>
      <CodeLine>
        <CssBlockEnd />
      </CodeLine>
    </CodeBlock>
  )
}

export default Career
