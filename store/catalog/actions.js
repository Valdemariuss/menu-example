import { request } from '~/helpers/api'

export default {
  // Get catalog categories menu items from api
  getCategories: async ({ store, state, commit }) => {
    const res = await request(store, '/api/catalog/categories?limit=0')
    if(res && res.items) {
        commit('SET_CATEGORIES', res.items)
    }
  },
}
