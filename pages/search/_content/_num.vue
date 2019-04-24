<template>
  <div class="container" :class="s.view">
    <mainstay />
    <sidebar />
  </div>
</template>

<script>
import mainstay from '~/components/mainstay';
import sidebar from '~/components/sidebar';

export default {
  components: {
    mainstay,
    sidebar,
  },
  async fetch ({ store, params }) {
    return Promise.all([
      store.dispatch('loadSideBarData'),
      store.dispatch('getArticles', {
        pageCurrent: params.num,
        searchContent: params.content,
      }),
    ])
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" module="s">
.view {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
}
</style>