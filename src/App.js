import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SplitPane from 'react-split-pane'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import TabNavigator from './components/TabNavigator'
import ContentSwitch from './components/ContentSwitch'
import Reload from './components/Reload'
import { reload, treeElementSelect, tabSelect, tabClose, tabChangePosition } from './store/reducer'

// Style
import './App.scss'

class App extends Component {
  globalHandler() {
    // Reset all CodeLine selected
    Array.from(document.querySelectorAll('.CodeLine--selected')).forEach(node => {
      node.classList.remove('CodeLine--selected')
    })
  }

  render() {
    const { appState, reload, treeElementSelect, tabSelect, tabClose, tabChangePosition } = this.props

    return (
      <div className="App" onClick={() => this.globalHandler()}>
        <div className="App__Panels">
          <SplitPane split="vertical" minSize={250} defaultSize={250}>
            <Sidebar
              tree={appState.tree}
              selectedElement={appState.treeSelectedName}
              onSelectElem={elem => treeElementSelect(elem)}
            />

            {appState.tabs && appState.tabs.length > 0 && (
              <div className="h-100">
                <TabNavigator
                  tabs={appState.tabs}
                  tabIcons={appState.tabIcons}
                  activeTab={appState.activeTab}
                  onTabSwitch={tab => tabSelect(tab)}
                  onTabClose={tab => tabClose(tab)}
                  onTabPositionChange={(a, b) => tabChangePosition(a, b)}
                />
                <ContentSwitch content={appState.currentContent} />
              </div>
            )}
            {appState.tabs && appState.tabs.length === 0 && <Reload onReload={() => reload()} />}
          </SplitPane>
        </div>
        <Footer currentFile={appState.treeSelectedName} currentType={appState.treeSelectedType} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appState: state
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ reload, treeElementSelect, tabSelect, tabClose, tabChangePosition }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
