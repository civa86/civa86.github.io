import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import Footer from './components/Footer'
// import SideBar from '../components/SideBar'
// import Editor from '../components/Editor'
// Style
import './App.scss'

class App extends Component {
  render() {
    const { editor } = this.props

    return (
      <div className="App">
        <div className="App__Panels">
          {/* <SplitPane split="vertical" minSize={250} defaultSize={250}> */}
          {/* <SideBar
              fileTree={editor.fileTree.items}
              fileTreeSelected={editor.fileTree.selected}
              onSelectElem={(elem, dir) => {
                dispatch(editorAction.fileTreeElemSelect(elem))
                if (dir === true) {
                  dispatch(editorAction.fileTreeToggleDirCollapse(elem))
                }
              }}
              onOpenFile={file => dispatch(editorAction.fileOpen(file))}
            /> */}
          {/* <Editor
              tabs={editor.tabs}
              icons={editor.tabIcons}
              activeTab={editor.activeTab}
              onReload={() => dispatch(appAction.reload())}
              onTabSwitch={tab => dispatch(editorAction.tabSelect(tab))}
              onTabClose={tab => dispatch(editorAction.tabClose(tab))}
              onTabPositionChange={(a, b) => dispatch(editorAction.tabChangePosition(a, b))}
            /> */}
          {/* </SplitPane> */}
        </div>
        <Footer currentFile={editor.files[editor.selected]} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  editor: state.editor
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
