<template>
  <div class="container" :class="s.view">
    <div class="mainstayWrapper">
      <div :class="s.title">
        <h2>
          <i class="km km-tags"></i>
          标签
          <i class="km km-right"></i>
          {{ $route.params.name }}
        </h2>
      </div>
      <mainstay style="width: 100%;"/>
    </div>
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
        tag: params.name,
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

.title {
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 8px black;
  margin: 0 15px 40px;
  border-radius: 4px;
  padding: 15px;
  color: #fff;
  h2 {
    font-size: 14px;
    i {
      font-size: 14px;
      margin: 0 2px;
    }
  }
}

@media (max-width: 1040px) {
  .title {
    margin-bottom: 15px;
  }
}
</style>