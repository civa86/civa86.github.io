import React from 'react'
// Style
import './style.scss'

const Loader = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col text-center">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
