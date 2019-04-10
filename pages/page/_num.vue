<template>
  <div class="container" :class="s.view">
    <mainstay
      :articleList="articleList"
      :pageCurrent="pageCurrent"
      :total="total" />
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
  async asyncData ({ $axios, params }) {
    const data = await $axios.$get('blog', {
      params: {
        pageCurrent: params.num,
      },
    });
    if (data) {
      return {
        articleList: data.list,
        pageCurrent: data.pageCurrent,
        total: data.count,
      };
    }
  },
  data() {
    return {
      articleList: [],
      pageCurrent: 1,
      total: 0,
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