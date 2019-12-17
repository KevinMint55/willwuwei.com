<template>
  <div class="container view">
    <div class="mainstay">
      <div :class="s.content">
        <h3>{{ $l.topBar.guestbook }}</h3>
        <h4>(＾Ｕ＾)ノ~ＹＯ</h4>
      </div>
      <!-- <div :class="s.comment">
        <div id="SOHUCS" :sid="$route.path"></div>
      </div>-->
    </div>
    <sidebar />
  </div>
</template>

<script>
import sidebar from '~/components/sidebar';

export default {
  components: {
    sidebar,
  },
  data() {
    return {
    };
  },
  async fetch({ store }) {
    await store.dispatch('loadSideBarData');
  },
  mounted() {
    // this.initComment();
  },
  methods: {
    initComment() {
      this.$utils.initComment();
    },
  },
  head() {
    return {
      title: '对我说',
    };
  },
};
</script>

<style lang="scss" module="s">
.content {
  background-color: rgba(230, 238, 232, 0.5);
  box-shadow: 0 0 8px black;
  border-radius: 4px;
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
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
