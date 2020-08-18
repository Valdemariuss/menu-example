import Vue from 'vue'

function apiErrorMes(error) {
  if(!Vue || !Vue.notify){ return }
  Vue.notify({
    group: 'all',
    title: 'Ошибка запроса к апи',
    text: error,
    type: 'error',
  })
}

export default ({ $axios, redirect }) => {
  $axios.onError(error => {
    apiErrorMes(error)
    return true
  })
}
