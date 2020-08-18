import state from './state'
import actions from './actions'
import mutations from './mutations'

export default function catalogStore() {
  return {
    namespaced: true,
    state,
    actions,
    mutations,
  }
}
