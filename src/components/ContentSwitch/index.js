import React, { Suspense } from 'react'
import Loader from '../Loader'

// Style
import './style.scss'

const Intro = React.lazy(() => import('../Contents/Intro'))
const Career = React.lazy(() => import('../Contents/Career'))
const Contacts = React.lazy(() => import('../Contents/Contacts'))
const Interests = React.lazy(() => import('../Contents/Interests'))
const Skills = React.lazy(() => import('../Contents/Skills'))

export default function ContentSwitch(props) {
  const { content } = props

  const contentDispatcher = () => {
    switch (content) {
      case 0:
        return (
          <Suspense fallback={<Loader />}>
            <Intro />
          </Suspense>
        )
      case 1:
        return (
          <Suspense fallback={<Loader />}>
            <Career />
          </Suspense>
        )
      case 2:
        return (
          <Suspense fallback={<Loader />}>
            <Skills />
          </Suspense>
        )
      case 3:
        return (
          <Suspense fallback={<Loader />}>
            <Interests />
          </Suspense>
        )
      case 4:
        return (
          <Suspense fallback={<Loader />}>
            <Contacts />
          </Suspense>
        )
      default:
        return <Loader />
    }
  }

  return (
    <div className="container-fluid ContentSwitch">
      <div className="row h-100">
        <div className="col-12 h-100">{contentDispatcher()}</div>
      </div>
      {content !== 3 && <div className="LineLengthLimiter h-100 d-none d-lg-block" />}
    </div>
  )
}
