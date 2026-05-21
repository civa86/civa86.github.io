import { RELOAD, TREE_ELEM_SELECT, TAB_SELECT, TAB_CLOSE, TAB_CHANGE_POSITION } from './constants'
import { toggleCollapse, flattenFiles } from './utils'
import initialState from './state'

const reducer = (state, action) => {
  switch (action.type) {
    case RELOAD: {
      return { ...initialState }
    }

    case TREE_ELEM_SELECT: {
      const tabToOpen = !action.element.directory ? state.tabs.map(t => t).indexOf(action.element.name) : null
      return {
        ...state,
        tree: action.element.directory ? toggleCollapse(state.tree, action.element.name) : state.tree,
        treeSelectedName: action.element.name,
        treeSelectedType: action.element.type,
        currentContent: !action.element.directory ? action.element.id : state.currentContent,
        tabs: tabToOpen === null ? state.tabs : tabToOpen > -1 ? state.tabs : [...state.tabs, action.element.name],
        activeTab: tabToOpen === null ? state.activeTab : tabToOpen > -1 ? tabToOpen : state.tabs.length
      }
    }

    case TAB_SELECT: {
      const selectedFile = flattenFiles(state.tree).find(e => e.name === state.tabs[action.tab])
      return {
        ...state,
        activeTab: action.tab,
        treeSelectedName: selectedFile ? selectedFile.name : '',
        treeSelectedType: selectedFile ? selectedFile.type : '',
        currentContent: selectedFile ? selectedFile.id : -1
      }
    }

    case TAB_CLOSE: {
      const cleanedTabs = state.tabs.filter((t, i) => i !== action.tab)
      let activeTab = state.activeTab
      if (action.tab < state.activeTab) {
        activeTab = activeTab - 1
      } else if (!cleanedTabs[state.activeTab] && state.activeTab >= cleanedTabs.length) {
        activeTab = cleanedTabs.length - 1
      }
      const selectedFile = flattenFiles(state.tree).find(e => e.name === cleanedTabs[activeTab])
      return {
        ...state,
        tabs: cleanedTabs,
        activeTab: activeTab,
        treeSelectedName: selectedFile ? selectedFile.name : '',
        treeSelectedType: selectedFile ? selectedFile.type : '',
        currentContent: selectedFile ? selectedFile.id : -1
      }
    }

    case TAB_CHANGE_POSITION: {
      let tabs = [...state.tabs]
      let activeTab = state.activeTab

      const tmp = tabs[action.a]
      tabs[action.a] = tabs[action.b]
      tabs[action.b] = tmp

      if (state.activeTab === action.a) {
        activeTab = action.b
      } else if (state.activeTab === action.b) {
        activeTab = action.a
      }

      return {
        ...state,
        activeTab,
        tabs
      }
    }

    default:
      return state
  }
}

export default reducer
