export default {
  sortedCategories: state => {
    const cats = state.categories
    const setChilds = {
      i: 0,
      dept: 2,
      action: (arr) => {
        setChilds.i++
        arr.map( cat => {
          cat.childs = cats.filter(child => child.parent_id === cat.category_id )
          if(setChilds.i < setChilds.dept) { setChilds.action(cat.childs) }
          return cat
        })
        return arr
      }
    }
    return setChilds.action(cats.filter(cat => !cat.parent_id))
  },
  getCategoryByUrl: state => url => {
    return state.categories.find( cat => cat.url === url );
  },
}
