import React, { Suspense } from 'react'
// Style
import './style.scss'

const Bio = React.lazy(() => import('../Contents/Bio'))
const Skills = React.lazy(() => import('../Contents/Skills'))

const EditorContentSwitch = props => {
  const { content } = props

  return (
    <div className="container-fluid EditorContentSwitch">
      <div className="row">
        <div className="col-12">
          {content === 'skills.js' && <Skills />}
          <Suspense fallback={<div>Loading...</div>}>
            {content === 'bio.html' && <Bio />}
            {/* {content === 'skills.js' && <Skills />} */}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default EditorContentSwitch
