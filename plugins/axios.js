/*
 * axios
 */

import apiConfig from '~/api.config';

export default function ({ $axios, redirect }) {
  $axios.defaults.baseURL = apiConfig.baseURL;

  // $axios.onRequest(config => {
  // })

  $axios.onResponse(response => {
    const res = response.data;
    if (res.status === 404) {
      redirect('/404');
    }
    if (res.status === 5000) {
      redirect('/5000');
    }
    if (res.status === 200) {
      return res;
    }
    return Promise.reject(res);
  })

  $axios.onError(error => {
    if (error.status === 404) {
      redirect('/404');
    }
  })
}
