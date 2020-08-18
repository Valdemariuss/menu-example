export default {
  actions: {
    // Bootstrap site data
    async nuxtServerInit({ dispatch }) {
      await dispatch('catalog/getCategories')
    },
  },
}
