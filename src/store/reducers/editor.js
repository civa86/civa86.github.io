// Constants
export const EDITOR_RELOAD = 'EDITOR_RELOAD'
export const EDITOR_TREE_ELEM_SELECT = 'EDITOR_FILE_TREE_ELEM_SELECT'
export const EDITOR_TAB_SELECT = 'EDITOR_TAB_SELECT'
export const EDITOR_TAB_CLOSE = 'EDITOR_TAB_CLOSE'
export const EDITOR_TAB_CHANGE_POSITION = 'EDITOR_TAB_CHANGE_POSITION'

// Actions
export const reloadEditor = () => {
  return {
    type: EDITOR_RELOAD
  }
}

export const treeElementSelect = element => {
  return {
    type: EDITOR_TREE_ELEM_SELECT,
    element
  }
}

export const tabSelect = tab => {
  return {
    type: EDITOR_TAB_SELECT,
    tab
  }
}

export const tabClose = tab => {
  return {
    type: EDITOR_TAB_CLOSE,
    tab
  }
}

export const tabChangePosition = (a, b) => {
  return {
    type: EDITOR_TAB_CHANGE_POSITION,
    a,
    b
  }
}

// Initial State
export const initialState = {
  tree: [
    {
      name: 'info',
      directory: true,
      collapsed: false,
      children: [
        {
          id: 0,
          name: 'identity.html',
          tabIcon: 'octicon octicon-person',
          treeIcon: 'octicon octicon-file',
          type: 'HTML'
        },
        {
          id: 1,
          name: 'career.css',
          tabIcon: 'octicon octicon-mortar-board',
          treeIcon: 'octicon octicon-file',
          type: 'CSS'
        }
      ]
    },
    {
      id: 2,
      name: 'skills.js',
      tabIcon: 'octicon octicon-beaker',
      treeIcon: 'octicon octicon-file',
      type: 'JavaScript'
    },
    {
      id: 3,
      name: 'interests.png',
      tabIcon: 'octicon octicon-file-media',
      treeIcon: 'octicon octicon-file-media',
      type: 'PNG'
    },
    {
      id: 4,
      name: 'contacts.json',
      tabIcon: 'octicon octicon-mention',
      treeIcon: 'octicon octicon-file',
      type: 'JSON'
    }
  ],
  treeSelectedName: 'identity.html',
  treeSelectedType: 'HTML',
  currentContent: 0,
  tabs: [],
  tabIcons: [],
  activeTab: 0
}

// Utils
const flattenFiles = tree => {
  return tree.reduce((res, e) => {
    if (e.directory !== true) {
      res.push(e)
    } else if (e.children.length > 0) {
      return flattenFiles(e.children, res)
    }
    return res
  }, [])
}

const initializeState = () => {
  const flatFiles = flattenFiles(initialState.tree)
  return {
    ...initialState,
    tabs: flatFiles.map(e => e.name),
    tabIcons: flatFiles.reduce((res, e) => ({ ...res, [e.name]: e.tabIcon }), {})
  }
}

const toggleCollapse = (tree, elem) => {
  return tree.map(e => {
    if (e.directory !== true) return e
    if (e.name === elem) {
      return {
        ...e,
        collapsed: !e.collapsed
      }
    } else {
      return {
        ...e,
        children: toggleCollapse(e.children, elem)
      }
    }
  })
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case '@@INIT':
    case EDITOR_RELOAD: {
      return initializeState()
    }

    case EDITOR_TREE_ELEM_SELECT: {
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

    case EDITOR_TAB_SELECT: {
      const selectedFile = flattenFiles(state.tree).find(e => e.name === state.tabs[action.tab])
      return {
        ...state,
        activeTab: action.tab,
        treeSelectedName: selectedFile ? selectedFile.name : '',
        treeSelectedType: selectedFile ? selectedFile.type : '',
        currentContent: selectedFile ? selectedFile.id : -1
      }
    }

    case EDITOR_TAB_CLOSE: {
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

    case EDITOR_TAB_CHANGE_POSITION: {
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
