<template>
  <div class="container view">
    <div class="mainstay">
      <div :class="s.content">
        <h3>Will Wu</h3>
        <h4>
          <i class="km km-work"></i>
          Frontend Developer
        </h4>
        <h4>
          <i class="km km-email"></i>
          innovation55@foxmail.com
        </h4>
        <h4>
          <i class="km km-block"></i>
          Done is better than perfect
        </h4>
        <!-- <h4>
          <i class="km km-email"></i>
          innovation55@foxmail.com
        </h4> -->
        <div :class="s.findMe">
          <img src="https://qiniu.kevinmint.com/wechat.jpg" alt="">
          <span :class="s.button">Find Me</span>
        </div>
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
};
</script>

<style lang="scss" module="s">
.content {
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 8px black;
  border-radius: 4px;
  margin: 0 15px;
  padding: 15px;
  color: #fff;
  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h4 {
    text-indent: 2em;
    font-size: 16px;
    margin-bottom: 10px;
    i {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}

.findMe {
  position: relative;
  text-align: center;
  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
}

.button {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #f89693;
  border: 1px solid #f89693;
  cursor: pointer;
  margin: 60px 0;
}
</style>
