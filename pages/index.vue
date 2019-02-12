<template>
  <div>
    <h1 :class="s.title">Hello <span :class="s.con">world!</span></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" module="s">
.title {
  display: flex;
  color: red;
  width: 20px;
  font-size: 56px;
  .con {
    color: blue;
  }
}
</style>