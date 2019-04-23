/*
 *
 * axios
 *
*/

import Vue from 'vue'
import axios from 'axios'
import apiConfig from '~/api.config'

const service = axios.create({
  baseURL: apiConfig.baseURL
})

// 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const res = response.data;
  if (res.status === 200) {
    return res.data;
  }
  return Promise.reject(res);
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios

export default service
