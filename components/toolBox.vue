<template>
  <div :class="s.tool_box">
    <p :class="s[$store.state.language]" @click="swichLang">{{ $l.lang }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    swichLang() {
      this.$store.commit('swichLang');
    },
  },
};
</script>

<style lang="scss" module="s">
@media (max-width: 760px) {
  .tool_box {
    display: none;
  }
}

.tool_box {
  position: fixed;
  right: 0;
  top: 30%;
  p {
    width: 100px;
    padding: 6px 8px;
    animation: move 2s ease-in-out infinite;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &.zh {
      background-color: rgba(246, 14, 14, 0.5);
    }
    &.en {
      background-color: rgba(34, 12, 239, 0.5);
    }
  }
}

@keyframes move {
  0% {
    transform: translateX(80px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(80px);
  }
}
</style>
