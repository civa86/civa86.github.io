import React from 'react'
// Style
import './style.scss'

const EditorContentSwitch = props => {
  const { content } = props

  return (
    <div className="container-fluid EditorContentSwitch">
      <div className="row">
        <div className="col-12">{content}</div>
      </div>
    </div>
  )
}

export default EditorContentSwitch
