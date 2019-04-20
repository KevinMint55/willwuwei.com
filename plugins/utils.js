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
  formatDate(timestamp, fmt = 'yyyy-MM-dd hh:mm:ss') {
    if (!timestamp) return null;
    const date = new Date(timestamp);
    const o = {
      'y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'w+': date.getDay(),
    };
    Object.entries(o).forEach(([rxp, value]) => {
      fmt = fmt.replace(new RegExp(rxp), ($1) => {
        const str = `0000${value}`;
        if ($1 === 'M' || $1 === 'd') {
          if (value > 9) {
            return value;
          }
        } else if ($1 === 'ww') {
          const week = '一二三四五六日'.substr(value - 1, 1);
          return `周${week}`;
        }
        return str.substr(str.length - $1.length);
      });
    });
    return fmt;
  },
};


Vue.prototype.$utils = utils;
