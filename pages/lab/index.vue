<template>
  <div class="container view">
    <div class="mainstay" :class="s.list">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="s.item"
        @click="lookDetails(item.path)"
      >
        <i class="km" :class="`km-${item.icon}`" :style="{ color: item.color }" />
        <h3>{{ item.name }}</h3>
        <p>{{ item.des }}</p>
      </div>
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
      list: [
        {
          name: 'castle',
          des: '使用vue-willtable组件开发的多人实时编辑表格系统',
          icon: 'castle',
          path: 'https://castle.willwuwei.com',
          color: 'RGB(70,159,204)',
        },
        {
          name: 'vue-willtable',
          des: 'An editable table component for Vue.js 2.0',
          icon: 'xinjianbiaoge',
          path: 'https://demo.willwuwei.com/willtable',
          color: 'rgb(141, 187, 57)',
        },
        // {
        //   name: 'mini-games',
        //   des: '目前只支持五子棋人人对战与人机对战的小游戏平台',
        //   icon: 'youxi',
        //   path: 'http://mini.willwuwei.com',
        //   color: 'RGB(195,195,195)',
        // },
      ],
    };
  },
  async fetch({ store }) {
    await store.dispatch('loadSideBarData');
  },
  methods: {
    lookDetails(path) {
      window.open(path, '_blank');
    },
  },
  head() {
    return {
      title: '实验室',
    };
  },
};
</script>

<style lang="scss" module="s">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 48%;
  background-color: rgba(230, 238, 232, 0.5);
  box-shadow: 0 0 8px black;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  transition: all 0.5s;
  i {
    font-size: 50px;
  }
  h3 {
    font-size: 18px;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    word-break: break-word;
  }
  &:hover {
    box-shadow: 6px 6px 24px #fff;
  }
}
</style>
