import { RELOAD, TREE_ELEM_SELECT, TAB_SELECT, TAB_CLOSE, TAB_CHANGE_POSITION } from './constants'

export const reload = () => {
  return {
    type: RELOAD
  }
}

export const treeElementSelect = element => {
  return {
    type: TREE_ELEM_SELECT,
    element
  }
}

export const tabSelect = tab => {
  return {
    type: TAB_SELECT,
    tab
  }
}

export const tabClose = tab => {
  return {
    type: TAB_CLOSE,
    tab
  }
}

export const tabChangePosition = (a, b) => {
  return {
    type: TAB_CHANGE_POSITION,
    a,
    b
  }
}
