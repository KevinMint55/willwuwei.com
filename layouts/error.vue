<template>
  <div class="error-page">
    <div class="error">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
      </svg>
      <div class="title">{{ message }}</div>
      <p v-if="statusCode === 404" class="description">
        <nuxt-link class="error-link" to="/">回到首页</nuxt-link>
      </p>
      <p class="description" v-else>渲染页面时发生错误。有关详细信息，请查看开发人员工具控制台。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      if (this.error.statusCode === 404) {
        return '这个页面无法找到';
      }
      return 'Error';
    }
  }
}
</script>

<style>
.error-page {
  padding: 1rem;
  background: #F7F8FB;
  color: #47494E;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute!important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.error-page .error {
  max-width: 450px;
}
.error-page .title {
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47494E;
  margin-bottom: 8px;
}
.error-page .description {
  color: #7F828B;
  line-height: 21px;
  margin-bottom: 10px;
}
.error-page a {
  color: #7F828B !important;
  text-decoration: none;
}
</style>
