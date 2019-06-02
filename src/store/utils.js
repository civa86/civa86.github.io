export const flattenFiles = tree => {
  return tree.reduce((res, e) => {
    if (e.directory !== true) {
      res.push(e)
    } else if (e.children.length > 0) {
      return flattenFiles(e.children, res)
    }
    return res
  }, [])
}

export const initializeState = stateObejct => {
  const flatFiles = flattenFiles(stateObejct.tree)
  return {
    ...stateObejct,
    tabs: flatFiles.map(e => e.name),
    tabIcons: flatFiles.reduce((res, e) => ({ ...res, [e.name]: e.tabIcon }), {})
  }
}

export const toggleCollapse = (tree, elem) => {
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
