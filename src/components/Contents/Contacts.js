import React from 'react'

import { CodeBlock, CodeLine, Tabulator, YamlLine, YamlArrayValue } from '../ContentFormatters'

export default function Contacts() {
  return (
    <CodeBlock>
      <CodeLine>
        <YamlLine yamlKey="contacts" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <YamlLine yamlKey="email" yamlValue="dario.civallero@gmail.com" mailLink />
      </CodeLine>

      <CodeLine />
      <CodeLine>
        <YamlLine yamlKey="open-source" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <YamlLine yamlKey="github" yamlValue="github.com/civa86" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <YamlLine yamlKey="npm" yamlValue="www.npmjs.com/~civa86" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <YamlLine yamlKey="docker" yamlValue="hub.docker.com/u/civa86" />
      </CodeLine>

      <CodeLine />
      <CodeLine>
        <YamlLine yamlKey="social-networks" />
      </CodeLine>
      <CodeLine>
        <YamlArrayValue yamlValue="linkedin" yamlLink="https://www.linkedin.com/in/dario-civallero-882128aa/" />
      </CodeLine>
      <CodeLine>
        <YamlArrayValue yamlValue="twitter" yamlLink="https://twitter.com/civa_86" />
      </CodeLine>
      <CodeLine>
        <YamlArrayValue yamlValue="facebook" yamlLink="https://www.facebook.com/civa86" />
      </CodeLine>
    </CodeBlock>
  )
}
