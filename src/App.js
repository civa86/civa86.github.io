import React, { useReducer } from 'react'
import SplitPane from 'react-split-pane'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import TabNavigator from './components/TabNavigator'
import ContentSwitch from './components/ContentSwitch'
import Reload from './components/Reload'
import { reload, treeElementSelect, tabSelect, tabClose, tabChangePosition } from './store/actions'
import reducer from './store/reducer'
import initialState from './store/state'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const resetCodeLineSelection = () => {
    Array.from(document.querySelectorAll('.CodeLine--selected')).forEach(node => {
      node.classList.remove('CodeLine--selected')
    })
  }

  return (
    <div className="App" onClick={() => resetCodeLineSelection()}>
      <div className="App__Panels">
        <SplitPane split="vertical" minSize={250} defaultSize={250}>
          <Sidebar
            tree={state.tree}
            selectedElement={state.treeSelectedName}
            onSelectElem={elem => dispatch(treeElementSelect(elem))}
          />

          {state.tabs && state.tabs.length > 0 && (
            <div className="h-100">
              <TabNavigator
                tabs={state.tabs}
                tabIcons={state.tabIcons}
                activeTab={state.activeTab}
                onTabSwitch={tab => dispatch(tabSelect(tab))}
                onTabClose={tab => dispatch(tabClose(tab))}
                onTabPositionChange={(a, b) => dispatch(tabChangePosition(a, b))}
              />
              <ContentSwitch content={state.currentContent} />
            </div>
          )}
          {state.tabs && state.tabs.length === 0 && <Reload onReload={() => dispatch(reload())} />}
        </SplitPane>
      </div>
      <Footer currentFile={state.treeSelectedName} currentType={state.treeSelectedType} />
    </div>
  )
}
