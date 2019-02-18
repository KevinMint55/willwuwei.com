<template>
  <div class="container" :class="s.view">
    <div :class="s.mainstay">
    </div>
    <sidebar></sidebar>
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
};
</script>

<style lang="scss" module="s">
.view {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-left: 15px;
  padding-top: 15px;
}

.mainstay {
  width: 66%;
  padding: 0 15px;
}

@media (max-width: 1040px) {
  .mainstay {
    width: 100%;
  }
}
</style>
