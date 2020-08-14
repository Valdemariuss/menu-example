import axios from 'axios'
import config from '~/config'
import Vue from 'vue'

const api = axios.create({
  baseURL: config.BASEURL_API,
  headers: {},
  timeout: 20000
})

function apiErrorMes(error) {
  if(!Vue || !Vue.notify){ return }
  Vue.notify({
    group: 'all',
    title: 'Ошибка запроса к апи',
    text: error,
    type: 'error',
  })
}

api.interceptors.response.use( (response) => {
    return response
  }, (error) => {
    apiErrorMes(error)
  })

export async function request(store, url, method= 'GET', data = {}, headers = {}) {
  try {
    const response = await api.request({ method, url, data, headers })
    return response && response.data ? response.data : false
  } catch (error) {
    apiErrorMes(error)
    throw error
  }
}
