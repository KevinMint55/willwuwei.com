<template>
  <div class="container view">
    <div :class="s.blog">
      <div v-html="info.content" class="blog-content" v-if="info.editorType === 'richtext'"></div>
      <div v-html="compiledMarkdown" class="markdown-body" v-if="info.editorType === 'markdown'"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
// import 'github-markdown-css';
import 'highlight.js/styles/github.css';

const rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: code => hljs.highlightAuto(code).value,
});

export default {
  data() {
    return {
      info: {
        content: '',
      },
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.info.content, { sanitize: true });
    },
  },
  created() {
    // m: 5c6fb74a4d36c43fa018fee2
    // r: 5c6fb76f4d36c43fa018fee3
    this.$http.get('blog/details?id=5c6fb74a4d36c43fa018fee2').then((res) => {
      this.info = res.data.data;
    });
  },
  methods: {
  },
};
</script>

<style lang="scss" module="s">
.blog {
  width: 100%;
  background-color: #fff;
  padding: 10px;
}
</style>
