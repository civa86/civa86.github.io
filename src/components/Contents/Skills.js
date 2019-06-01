import React from 'react'

import { CodeBlock, CodeLine, Tabulator, JsonBlockStart, JsonKey, JsonValues, JsonBlockEnd } from '../ContentFormatters'

const Skills = () => {
  return (
    <CodeBlock>
      <CodeLine>
        <JsonBlockStart />
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="frontend" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="javascript" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['React', 'Vue', 'Jest']} trailingComma />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['AngularJS', 'Ember', 'jQuery']} trailingComma />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['Babel', 'Webpack', 'Rollup']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="css" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['Bootstrap', 'Sass', 'Less']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{'},'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="backend" />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="node.js" isArray />
        <JsonValues jsonValues={['Express']} />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="java" isArray />
        <JsonValues jsonValues={['Spring Boot', 'Maven']} />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="clojure" isArray />
        <JsonValues jsonValues={['Luminus']} />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="php" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['Zend', 'Symfony', 'Composer']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonKey jsonKey="C#" isArray />
        <JsonValues jsonValues={['.NET Core', 'NuGet']} />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{'},'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="database" isArray />
        <JsonValues jsonValues={['MySql', 'MongoDB']} />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="architecture" isArray />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['Docker', 'Kubernetes']} trailingComma />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <Tabulator />
        <JsonValues jsonValues={['RabbitMQ', 'Vagrant']} />
      </CodeLine>
      <CodeLine>
        <Tabulator />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="cloud" isArray />
        <JsonValues jsonValues={['AWS', 'Firebase']} />
        <span className="JsonBlock">{'],'}</span>
      </CodeLine>

      <CodeLine>
        <Tabulator />
        <JsonKey jsonKey="misc" isArray />
        <JsonValues jsonValues={['Bash', 'VSCode', 'Git']} />
        <span className="JsonBlock">{']'}</span>
      </CodeLine>

      <CodeLine>
        <JsonBlockEnd />
      </CodeLine>
    </CodeBlock>
  )
}

export default Skills
