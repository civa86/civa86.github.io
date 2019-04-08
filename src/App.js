import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import TabNavigator from './components/TabNavigator'
import ContentSwitch from './components/ContentSwitch'
import ReloadEditor from './components/ReloadEditor'
import { reloadEditor, treeElementSelect, tabSelect, tabClose, tabChangePosition } from './store/reducers/editor'

// Style
import './App.scss'

class App extends Component {
  render() {
    const { editor, reloadEditor, treeElementSelect, tabSelect, tabClose, tabChangePosition } = this.props

    return (
      <div className="App">
        <div className="App__Panels">
          <SplitPane split="vertical" minSize={250} defaultSize={250}>
            <Sidebar
              tree={editor.tree}
              selectedElement={editor.treeSelectedName}
              onSelectElem={elem => treeElementSelect(elem)}
            />

            {editor.tabs.length > 0 && (
              <div className="h-100">
                <TabNavigator
                  tabs={editor.tabs}
                  tabIcons={editor.tabIcons}
                  activeTab={editor.activeTab}
                  onTabSwitch={tab => tabSelect(tab)}
                  onTabClose={tab => tabClose(tab)}
                  onTabPositionChange={(a, b) => tabChangePosition(a, b)}
                />
                <ContentSwitch content={editor.currentContent} />
              </div>
            )}
            {editor.tabs.length === 0 && <ReloadEditor onReload={() => reloadEditor()} />}

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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ reloadEditor, treeElementSelect, tabSelect, tabClose, tabChangePosition }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
