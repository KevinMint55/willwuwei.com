<template>
  <div class="container" :class="s.view">
    <mainstay />
    <sidebar />
  </div>
</template>

<script>
import mainstay from '~/components/home/mainstay';
import sidebar from '~/components/home/sidebar';

export default {
  components: {
    mainstay,
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
  padding-top: 30px;
}
</style>