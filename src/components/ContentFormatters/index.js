import React from 'react'

// Style
import './style.scss'

// Functions
const selectCodeLine = event => {
  event.stopPropagation()
  const selectedLines = Array.from(document.querySelectorAll('.CodeLine--selected'))
  selectedLines.forEach(node => {
    node.classList.remove('CodeLine--selected')
  })
  event.currentTarget.classList.add('CodeLine--selected')
}

// Code Line
export const CodeLine = props => {
  return (
    <span className="CodeLine" onClick={evt => selectCodeLine(evt)}>
      {props.children}
    </span>
  )
}

// Code Block
export const CodeBlock = props => {
  return <div className="CodeBlock">{props.children}</div>
}

// General
export const Tabulator = () => {
  return <span>&nbsp;&nbsp;</span>
}

export const CommentLine = props => {
  return <span className="CommentLine">{props.children}</span>
}

// HTML
export const HtmlLine = props => {
  const attributes = props.attributes || []
  return (
    <span className="HtmlLine">
      <span>{'<'}</span>
      <span className="HtmlLine__tag">{props.tag}</span>
      {attributes.map((a, i) => (
        <span key={`attr-${i}`}>
          {' '}
          <span className="HtmlLine__attr-key">{a.key}</span>
          <span>{'="'}</span>
          <span className="HtmlLine__attr-value">{a.value}</span>
          <span>{'"'}</span>
        </span>
      ))}
      <span>{'>'}</span>
      <span className="HtmlLine__content">{props.children}</span>
      <span>{'</'}</span>
      <span className="HtmlLine__tag">{props.tag}</span>
      <span>{'>'}</span>
    </span>
  )
}

export const HtmlOpenTag = props => {
  const attributes = props.attributes || []
  return (
    <span className="HtmlLine">
      <span>{'<'}</span>
      <span className="HtmlLine__tag">{props.tag}</span>
      {attributes.map((a, i) => (
        <span key={`attr-${i}`}>
          {' '}
          <span className="HtmlLine__attr-key">{a.key}</span>
          <span>{'="'}</span>
          <span className="HtmlLine__attr-value">{a.value}</span>
          <span>{'"'}</span>
        </span>
      ))}
      <span>{'>'}</span>
    </span>
  )
}

export const HtmlCloseTag = props => {
  return (
    <span className="HtmlLine">
      <span>{'</'}</span>
      <span className="HtmlLine__tag">{props.tag}</span>
      <span>{'>'}</span>
    </span>
  )
}

// CSS
export const CssBlockStart = props => {
  const attributes = props.attributes || []
  return (
    <span className="CssBlock">
      {attributes.map((a, i) => (
        <span key={`attr-${i}`}>
          <span className="CssBlock__attribute--wrapper">{'['}</span>
          <span className="CssBlock__attribute--key">{a.key}</span>
          <span>{'='}</span>
          <span className="CssBlock__attribute--value">{`"${a.value}"`}</span>
          <span className="CssBlock__attribute--wrapper">{']'}</span>
        </span>
      ))}
      <span>{' {'}</span>
    </span>
  )
}

export const CssRule = props => {
  return (
    <span className="CssBlock">
      <Tabulator />
      <span className="CssBlock__rule-key">{props.ruleKey}</span>:&nbsp;
      {!props.quoted && (
        <span>
          <span className="CssBlock__rule-value">{props.ruleValue}</span>;
        </span>
      )}
      {props.quoted && (
        <span>
          <span className="CssBlock__rule-string">
            {"'"}
            {props.ruleValue}
            {"'"}
          </span>
          ;
        </span>
      )}
    </span>
  )
}

export const CssBlockEnd = () => {
  return (
    <span className="CssBlock">
      <span>{'}'}</span>
    </span>
  )
}

// JSON

export const JsonBlockStart = () => {
  return (
    <span className="JsonBlock">
      <span>{'{'}</span>
    </span>
  )
}

export const JsonKey = props => {
  return (
    <span className="JsonBlock">
      <span className="JsonBlock__key">
        {'"'}
        {props.jsonKey}
        {'"'}
      </span>
      : {props.isArray ? '[' : '{'}
    </span>
  )
}

export const JsonValues = props => {
  return (
    <span className="JsonBlock">
      {props.jsonValues.map((x, i) => (
        <span key={`jsonVal-${i}`}>
          <span className="JsonBlock__value">{`"${x}"`}</span>
          {i < props.jsonValues.length - 1 && ', '}
        </span>
      ))}
      {props.trailingComma && ','}
    </span>
  )
}

export const JsonBlockEnd = () => {
  return (
    <span className="JsonBlock">
      <span>{'}'}</span>
    </span>
  )
}

// YAML

export const YamlLine = props => {
  return (
    <span className="YamlLine">
      <span className="YamlLine__yaml-key">{props.yamlKey}</span>
      {': '}
      <span className="YamlLine__yaml-value">
        {props.mailLink && <a href={`mailto:${props.yamlValue}`}>{props.yamlValue}</a>}
        {!props.mailLink && (
          <a target="_blank" rel="noopener noreferrer" href={`https://${props.yamlValue}`}>
            {props.yamlValue}
          </a>
        )}
      </span>
    </span>
  )
}

export const YamlArrayValue = props => {
  return (
    <span className="YamlLine">
      <Tabulator />
      {'- '}
      <span className="YamlLine__yaml-value">
        <a target="_blank" rel="noopener noreferrer" href={`${props.yamlLink}`}>
          {props.yamlValue}
        </a>
      </span>
    </span>
  )
}
