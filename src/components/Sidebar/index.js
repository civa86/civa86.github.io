import React from 'react'
// Style
import './style.scss'

const Sidebar = props => {
  const { tree, selectedElement } = props

  const renderFile = f => {
    return (
      <div
        key={f.name}
        className="Sidebar__file-tree-element Sidebar__file-tree-element--file"
        onTouchEnd={() => props.onOpenFile(f.name)}
        onClick={() => {
          props.onSelectElem(f)
          props.onOpenFile(f.name)
        }}>
        <span className={f.name === selectedElement ? 'Sidebar__file-tree-element--selected' : ''}>
          <i className="Sidebar__file-tree-icon Sidebar__file-tree-icon--type octicon octicon-file" />
          <span className="Sidebar__file-tree-label">{f.name}</span>
        </span>
      </div>
    )
  }

  const renderDirectory = d => {
    return (
      <div key={d.name}>
        <div
          className="Sidebar__file-tree-element Sidebar__file-tree-element--directory"
          onClick={() => props.onSelectElem(d)}>
          <span className={d.name === selectedElement ? 'Sidebar__file-tree-element--selected' : ''}>
            <i
              className={`Sidebar__file-tree-icon Sidebar__file-tree-icon--chevron octicon octicon-chevron-right ${
                !d.collapsed ? 'd-none' : ''
              }`}
            />
            <i
              className={`Sidebar__file-tree-icon Sidebar__file-tree-icon--chevron octicon octicon-chevron-down ${
                d.collapsed ? 'd-none' : ''
              }`}
            />
            <i className="Sidebar__file-tree-icon Sidebar__file-tree-icon--type octicon octicon-file-directory" />
            <span className="Sidebar__file-tree-label">{d.name}</span>
          </span>
        </div>
        <div>
          {d.children && d.children.length > 0 && (
            <div
              className="Sidebar__file-tree Sidebar__file-tree--inner-level"
              style={{ height: d.collapsed === true ? 0 : 'auto' }}>
              {renderTree(d.children)}
            </div>
          )}
        </div>
      </div>
    )
  }

  function renderTree(elements) {
    return elements.map(elem => {
      if (elem.dir) {
        return renderDirectory(elem)
      } else {
        return renderFile(elem)
      }
    })
  }

  return (
    <div className="Sidebar cursor-default no-select">
      <div>
        <div className="Sidebar__title">
          <i className="Sidebar__title-icon octicon octicon-repo" /> Dario Civallero
        </div>
        <div className="Sidebar__file-tree">{renderTree(tree)}</div>
      </div>
    </div>
  )
}

export default Sidebar
