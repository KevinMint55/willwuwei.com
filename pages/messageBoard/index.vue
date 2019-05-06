<template>
  <div class="container view">
    <div class="mainstay">
      <div :class="s.content">
        <h3>留言板</h3>
        <h4>(＾Ｕ＾)ノ~ＹＯ</h4>
      </div>
      <div :class="s.comment">
        <div class="ke-script" data-ke-script-attr="%20type%3D%22text/javascript%22%20charset%3D%22utf-8%22%20src%3D%22https%3A//changyan.itc.cn/js/lib/jquery.js%22"></div><div class="ke-script" data-ke-script-attr="%20type%3D%22text/javascript%22%20charset%3D%22utf-8%22%20src%3D%22https%3A//changyan.sohu.com/js/changyan.labs.https.js%3Fappid%3Dcys0NKu99%22"></div><style>#feedAv{ margin-top: -250px !important;transform: scale(0) !important;}</style>
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
  head() {
    return {
      title: '留言板',
    };
  },
};
</script>

<style lang="scss" module="s">
.content {
  background-color: rgba(230,238,232,0.5);
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
