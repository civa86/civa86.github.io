import { initializeState } from './utils'

const state = {
  tree: [
    {
      name: 'info',
      directory: true,
      collapsed: false,
      children: [
        {
          id: 0,
          name: 'intro.html',
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
      name: 'skills.json',
      tabIcon: 'octicon octicon-beaker',
      treeIcon: 'octicon octicon-file',
      type: 'JSON'
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
      name: 'contacts.yml',
      tabIcon: 'octicon octicon-mention',
      treeIcon: 'octicon octicon-file',
      type: 'YAML'
    }
  ],
  treeSelectedName: 'intro.html',
  treeSelectedType: 'HTML',
  currentContent: 0,
  tabs: [],
  tabIcons: [],
  activeTab: 0
}

export default initializeState(state)
