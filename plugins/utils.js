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
  initComment() {
    window.changyan = undefined;
    window.cyan = undefined;
    const appid = 'cytx60lk0';
    const conf = 'prod_23b83f89193056901ef06333830d17ae';
    const width = window.innerWidth || document.documentElement.clientWidth;
    const head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;
    window.$cyComment = document.createElement('script');
    window.$cyComment.setAttribute('type', 'text/javascript');
    window.$cyComment.setAttribute('charset', 'UTF-8');
    window.$cyCommon = document.createElement('script');
    window.$cyCommon.setAttribute('id', 'cy_cmt_num');
    window.$cyCommon.setAttribute('src', `https://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=${appid}`);
    head.appendChild(window.$cyCommon);
    if (width < 960) {
      window.$cyComment.setAttribute('id', 'changyan_mobile_js');
      window.$cyComment.setAttribute('src', `https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=${appid}&conf=${conf}`);
      head.appendChild(window.$cyComment);
    } else {
      const loadJs = function (d, a) {
        window.$cyComment.setAttribute('src', d);
        if (typeof a === 'function') {
          if (window.attachEvent) {
            window.$cyComment.onreadystatechange = function () {
              const e = window.$cyComment.readyState;
              if (e === 'loaded' || e === 'complete') {
                window.$cyComment.onreadystatechange = null;
                a();
              }
            };
          } else {
            window.$cyComment.onload = a;
          }
        }
        head.appendChild(window.$cyComment);
      };
      loadJs('https://changyan.sohu.com/upload/changyan.js', () => {
        window.changyan.api.config({
          appid,
          conf,
        });
      });
    }
  },
};


Vue.prototype.$utils = utils;
