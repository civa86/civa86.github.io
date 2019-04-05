import React from 'react'
import './style.scss'

const Footer = props => {
  const { currentFile } = props

  return (
    <div className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="Footer__elem">{currentFile.name}</div>
          </div>
          <div className="col-6 text-right">
            <span className="Footer__elem d-none d-sm-inline">LF</span>
            <span className="Footer__elem d-sm-inline hidden-xs">UTF-8</span>
            <span className="Footer__elem">{currentFile.type}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
