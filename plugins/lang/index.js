import Vue from 'vue';
import zh from './zh';
import en from './en';

const messages = {
  zh,
  en,
};

Vue.mixin({
  computed: {
    $l() {
      return messages[this.$store.state.language];
    },
  },
});
