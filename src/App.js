import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import Editor from './components/Editor'
import { treeElementSelect } from './store/reducers/editor'

// Style
import './App.scss'

class App extends Component {
  render() {
    const { editor, treeElementSelect } = this.props

    return (
      <div className="App">
        <div className="App__Panels">
          <SplitPane split="vertical" minSize={250} defaultSize={250}>
            <Sidebar
              tree={editor.tree}
              selectedElement={editor.treeSelectedName}
              onSelectElem={elem => treeElementSelect(elem)}
            />
            <div>
              {/* TODO: empty class... */}
              <div className={`tab-bar`}>
                {/* <Tabs
                  active={props.activeTab}
                  onTabSwitch={tab => props.onTabSwitch(tab)}
                  onTabClose={tab => props.onTabClose(tab)}
                  onTabPositionChange={(a, b) => props.onTabPositionChange(a, b)}
                  draggable={true}>
                  {renderTabs()}
                </Tabs> */}
              </div>
              {/* TODO: empty class... */}
              <div className={`container-fluid content-editor`}>
                <div className="row">
                  <div className="col-12">
                    {/* {editor.tabs.length === 0 && <Reload onReload={() => onReload()} />} */}
                    {editor.tabs.length > 0 && editor.tabs[editor.activeTab]}
                  </div>
                </div>
              </div>
            </div>
            {/* <Editor
              tabs={editor.tabs}
              icons={editor.tabIcons}
              activeTab={editor.activeTab}
              onReload={() => dispatch(appAction.reload())}
              onTabSwitch={tab => dispatch(editorAction.tabSelect(tab))}
              onTabClose={tab => dispatch(editorAction.tabClose(tab))}
              onTabPositionChange={(a, b) => dispatch(editorAction.tabChangePosition(a, b))}
            /> */}
          </SplitPane>
        </div>
        <Footer currentFile={editor.treeSelectedName} currentType={editor.treeSelectedType} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  editor: state.editor
})

const mapDispatchToProps = dispatch => bindActionCreators({ treeElementSelect }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
