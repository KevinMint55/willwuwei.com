<template>
  <div class="container view">
    <div :class="s.blog">
      <div v-html="post.content" class="blog-content" v-if="post.editorType === 'richtext'"></div>
      <div v-html="compiledMarkdown" class="markdown-body" v-if="post.editorType === 'markdown'"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import '~/assets/style/github-markdown.css';

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
  async asyncData ({ $axios }) {
    const post = await $axios.$get('blog/details?id=5c6fb74a4d36c43fa018fee2').catch((err) => {
      console.log('err', err);
    });
    if (post) {
      return { post };
    }
  },
  data() {
    return {
      post: {},
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.post.content, { sanitize: true });
    },
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
