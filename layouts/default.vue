<template>
  <div :id="s.app">
    <navbar />
    <nuxt class="content-main" />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue';

export default {
  components: {
    navbar,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" module="s">
#app {
  height: 100vh;
  background-image: url('~assets/images/background.jpg');
  overflow-y: auto; 
}
</style>
