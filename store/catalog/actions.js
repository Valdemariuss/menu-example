export default {
  // Get catalog categories menu items from api
  async getCategories ({ store, state, commit, axios }) {
    const res = await this.$axios.get('catalog/categories?limit=0')
    if(res && res.data && res.data.items) {
        commit('SET_CATEGORIES', res.data.items)
    }
  },
}
