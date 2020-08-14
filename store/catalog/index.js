import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default function catalogStore() {
  return {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  };
}
