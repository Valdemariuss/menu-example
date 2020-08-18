export default {
  SET_CATEGORIES: (state, categories) => {
    const setChilds = {
      i: 0,
      dept: 2,
      action: (arr) => {
        setChilds.i++
        arr.map( cat => {
          cat.childs = categories.filter(child => child.parent_id === cat.category_id )
          if(setChilds.i < setChilds.dept) { setChilds.action(cat.childs) }
          return cat
        })
        return arr
      }
    }
    state.categories = setChilds.action(categories.filter(cat => !cat.parent_id))
  },
  TOGGLE_CATEGORIES_OPEN_BY_ID: (state, catId) => {
    state.openCategories[catId] = !state.openCategories[catId]
  },
}
