<template>
  <div class="container" :class="s.view">
    <mainstay
      :articleList="articleList"
      :pageCurrent="pageCurrent"
      :total="total" />
    <sidebar :hotList="hotList" :tagsList="tagsList" />
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
    const hotList = await $axios.$get('blog/hot');
    const tagsList = await $axios.$get('blog/tags');
    if (data) {
      return {
        articleList: data.list,
        pageCurrent: data.pageCurrent,
        total: data.count,
        hotList,
        tagsList,
      };
    }
  },
  data() {
    return {
      articleList: [],
      pageCurrent: 1,
      total: 0,
      hotList: [],
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