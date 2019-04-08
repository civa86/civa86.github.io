import React from 'react'

import { CodeBlock, CodeLine, YamlLine, YamlArrayValue } from '../ContentFormatters'

const Contacts = () => {
  return (
    <CodeBlock>
      <CodeLine>
        <YamlLine yamlKey="email" yamlValue="dario.civallero@gmail.com" mailLink />
      </CodeLine>
      <CodeLine>
        <YamlLine yamlKey="github" yamlValue="github.com/civa86" />
      </CodeLine>
      <CodeLine>
        <YamlLine yamlKey="npm" yamlValue="www.npmjs.com/~civa86" />
      </CodeLine>
      <CodeLine>
        <YamlLine yamlKey="docker" yamlValue="hub.docker.com/u/civa86" />
      </CodeLine>
      <CodeLine>
        <YamlLine yamlKey="social" />
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

export default Contacts
