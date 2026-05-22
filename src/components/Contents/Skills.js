import React from 'react'

import { CodeBlock, CodeLine, Tabulator, JsonBlockStart, JsonKey, JsonValues, JsonBlockEnd } from '../ContentFormatters'

export default function Skills() {
  return (
    <CodeBlock>
      <CodeLine>
        <JsonBlockStart />
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="languages" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['TypeScript', 'JavaScript']} trailingComma />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['Bash', 'Python', 'Java']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="frameworks" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['VueJS', 'React']} trailingComma />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['Flask', 'Spring Boot']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="databases" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['MongoDB', 'MySQL', 'DynamoDB']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="architecture" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['AWS', 'Terraform', 'Docker']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>

      <CodeLine>
        <JsonBlockEnd />
      </CodeLine>
    </CodeBlock>
  )
}
