<template>
  <div class="container view">
    <div class="mainstay">
    </div>
    <sidebar></sidebar>
  </div>
</template>

<script>
import sidebar from '~/components/sidebar';

export default {
  async fetch ({ store }) {
    await store.dispatch('loadSideBarData');
  },
  components: {
    sidebar,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" module="s">
</style>
