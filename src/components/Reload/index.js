import React from 'react'

// Style
import './style.scss'

export default function Reload(props) {
  const { onReload } = props

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col Reload text-center">
          <i className="octicon octicon-sync" onClick={() => onReload()} />
        </div>
      </div>
    </div>
  )
}
