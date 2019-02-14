<template>
  <transition name="fade">
    <aside :class="s.panel" v-show="showPanel">
      <div :class="s.panelHeading">
        <div>
          <i :class="iconClass"></i>
          <span :class="s.name">{{ name }}</span>
        </div>
        <div>
          <i class="km" :class="[s.icon, showContent ? 'km-up' : 'km-down']" @click="showContent = !showContent"></i>
          <i class="km km-close" :class="s.icon" @click="showPanel = !showPanel"></i>
        </div>
      </div>
      <div :class="[s.content, showContent ? '' : s.hide]">
        <slot></slot>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      showPanel: true,
      showContent: true,
    };
  },
};
</script>

<style lang="scss" module="s">
.panel {
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 5px #c2c2c2;
}

.panelHeading {
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: rgba(10,10,0,0.7);
  border-color: #000;
  padding: 10px 15px;
  line-height: 14px;
  .icon {
    color: #000;
    background-color: #fff;
    border-radius: 50%;
    font-size: 12px;
    padding: 2px;
    transition: all .3s;
    cursor: pointer;
    &:hover {
      background-color: #d9534f;
    }
  }
  .name {
    vertical-align: top;
  }
}

.content {
  overflow: hidden;
  transition: all .3s ease;
  max-height: 1000px;
  &.hide {
    max-height: 0;
  }
}
</style>
