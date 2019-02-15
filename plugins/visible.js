/*
 * directive v-visible
 */

import Vue from 'vue';

const inBrowser = typeof window !== 'undefined';

const style = (el, prop) => {
  return typeof getComputedStyle !== 'undefined'
    ? getComputedStyle(el, null).getPropertyValue(prop)
    : el.style[prop]
};

const overflow = (el) => {
  return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x')
};

const scrollParent = (el) => {
  if (!inBrowser) return
  if (!(el instanceof HTMLElement)) {
    return window
  }

  let parent = el

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break
    }

    if (!parent.parentNode) {
      break
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent
    }

    parent = parent.parentNode
  }

  return window
};

const visible = {
  bind(el, binding) {
    if (!binding.value) return;
    const dist = binding.value.dist || 100;
    const className = binding.value.className;
    const visibleHandler = () => {
      if (scrollParent(el).scrollTop + document.body.clientHeight > el.offsetTop + dist) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
    visibleHandler();
    el.visibleHandler = visibleHandler;
    scrollParent(el).addEventListener('scroll', visibleHandler);
    window.addEventListener('resize', visibleHandler);
  },
  inserted(el) {
    el.visibleHandler();
    scrollParent(el).addEventListener('scroll', el.visibleHandler);
  },
  unbind(el) {
    scrollParent(el).removeEventListener('scroll', el.visibleHandler);
    delete el.visibleHandler;
  },
};

Vue.directive('visible', visible);
