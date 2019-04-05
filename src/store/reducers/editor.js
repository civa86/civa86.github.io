// Constants
export const APP_RELOAD = 'APP_RELOAD' //TODO: app reducer??
export const EDITOR_TAB_SELECT = 'EDITOR_TAB_SELECT'
export const EDITOR_TAB_CLOSE = 'EDITOR_TAB_CLOSE'
export const EDITOR_TAB_CHANGE_POSITION = 'EDITOR_TAB_CHANGE_POSITION'
export const EDITOR_FILE_OPEN = 'EDITOR_FILE_OPEN'
export const EDITOR_FILE_TREE_ELEM_SELECT = 'EDITOR_FILE_TREE_ELEM_SELECT'
export const EDITOR_FILE_TREE_TOGGLE_DIR_COLLAPSE = 'EDITOR_FILE_TREE_TOGGLE_DIR_COLLAPSE'

// Actions
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

export const fileOpen = file => {
  return {
    type: EDITOR_FILE_OPEN,
    file
  }
}

export const fileTreeElemSelect = elem => {
  return {
    type: EDITOR_FILE_TREE_ELEM_SELECT,
    elem
  }
}

export const fileTreeToggleDirCollapse = elem => {
  return {
    type: EDITOR_FILE_TREE_TOGGLE_DIR_COLLAPSE,
    elem
  }
}

// Initial State
// const flattenFiles = list =>
//   list.reduce((res, e) => {
//     if (e.dir !== true) {
//       res.push(e)
//     } else if (e.children.length > 0) {
//       return flattenFiles(e.children, res)
//     }
//     return res
//   }, [])

// const dataStruct = [
//   {
//     name: 'info',
//     dir: true,
//     collapsed: false,
//     children: [
//       {
//         name: 'bio.html',
//         icon: 'octicon octicon-person',
//         type: 'HTML'
//       },
//       {
//         name: 'education.md',
//         icon: 'octicon octicon-mortar-board',
//         type: 'Markdown'
//       }
//     ]
//   },
//   {
//     name: 'skills.js',
//     icon: 'octicon octicon-beaker',
//     type: 'JavaScript'
//   },
//   {
//     name: 'interests.png',
//     icon: 'octicon octicon-file-media',
//     type: 'PNG'
//   },
//   {
//     name: 'contacts.json',
//     icon: 'octicon octicon-mention',
//     type: 'JSON'
//   }
// ]

// const dataTabs = flattenFiles(dataStruct, [])

export const initialState = {
  // fileTree: {
  //   items: [...dataStruct],
  //   selected: 'bio.html'
  // },
  // allTabs: dataTabs.map(e => e.name),
  // tabs: dataTabs.map(e => e.name),
  // tabIcons: dataTabs.reduce((res, e) => {
  //   res[e.name] = e.icon
  //   return res
  // }, {}),
  directories: [
    {
      name: 'info',
      dir: true,
      collapsed: false
    }
  ],
  files: [
    {
      name: 'bio.html',
      icon: 'octicon octicon-person',
      type: 'HTML',
      directory: 'info'
    },
    {
      name: 'education.md',
      icon: 'octicon octicon-mortar-board',
      type: 'Markdown',
      parent: 'info'
    },
    {
      name: 'skills.js',
      icon: 'octicon octicon-beaker',
      type: 'JavaScript'
    },
    {
      name: 'interests.png',
      icon: 'octicon octicon-file-media',
      type: 'PNG'
    },
    {
      name: 'contacts.json',
      icon: 'octicon octicon-mention',
      type: 'JSON'
    }
  ],
  selected: 0
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
