/*
 * directive v-clickoutside
 */

import Vue from 'vue';
import apiConfig from '~/api.config';

const utils = {
  setCdn(url) {
    if (url) {
      return `${apiConfig.cdnUrl}${url}`;
    }
    return '';
  },
};


Vue.prototype.$utils = utils;
