<template>
  <div class="container view">
    <div class="mainstay">
      <div :class="s.content">
        <h3>留言板</h3>
        <h4>(＾Ｕ＾)ノ~ＹＯ</h4>
      </div>
      <div :class="s.comment">
        <div id="SOHUCS" :sid="$route.path"></div>
      </div>
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
  mounted() {
    this.initComment();
  },
  methods: {
    initComment() {
      this.$utils.initComment();
    },
  },
};
</script>

<style lang="scss" module="s">
.content {
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 8px black;
  border-radius: 4px;
  margin: 0 15px;
  padding: 15px;
  margin-bottom: 20px;
  h3 {
    font-size: 32px;
    color: #fff;
    text-align: center;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-bottom: 4px;
  }
}

.comment {
  background-color: #fff;
  margin: 0 15px;
  padding: 15px;
  border-radius: 4px;
}
</style>
