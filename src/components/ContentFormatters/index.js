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
