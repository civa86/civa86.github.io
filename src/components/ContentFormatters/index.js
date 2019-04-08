import React from 'react'

// Style
import './style.scss'

// Functions
const selectCodeLine = event => {
  event.preventDefault()
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
  return (
    <div className="CodeBlock">
      {props.children}
      <CodeLine />
    </div>
  )
}

export const Tabulator = () => {
  return <span>&nbsp;&nbsp;</span>
}

export const CommentLine = props => {
  return <span className="CommentLine">{props.children}</span>
}

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
