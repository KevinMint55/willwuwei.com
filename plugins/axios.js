/*
 * axios
 */

import Vue from 'vue';
import axios from 'axios';
import apiConfig from '~api.config';

// 配置接口地址
axios.defaults.baseURL = apiConfig.baseURL;

// 配置超时时间
axios.defaults.timeout = 30e3;

// 添加请求拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error));

service.interceptors.response.use(response => response, error => Promise.reject(error));

Vue.prototype.$http = axios;
export default axios;
