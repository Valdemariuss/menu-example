export default {
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  TOGGLE_CATEGORIES_OPEN_BY_ID: (state, catId) => {
    state.openCategories[catId] = !state.openCategories[catId]
  },
}
