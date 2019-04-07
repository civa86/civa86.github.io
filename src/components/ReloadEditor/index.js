import React from 'react'
// Style
import './style.scss'

const ReloadEditor = props => {
  const { onReload } = props

  return (
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div className="col ReloadEditor text-center">
          <i className="octicon octicon-sync" onClick={() => onReload()} />
        </div>
      </div>
    </div>
  )
}

export default ReloadEditor
