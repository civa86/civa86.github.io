import React from 'react'
// Style
import './style.scss'

const Footer = props => {
  const { currentFile, currentType } = props

  return (
    <div className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="Footer__elem">{currentFile}</div>
          </div>
          <div className="col-6 text-right">
            <span className="Footer__elem d-none d-sm-inline">LF</span>
            <span className="Footer__elem d-none d-sm-inline">UTF-8</span>
            <span className="Footer__elem">{currentType}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
