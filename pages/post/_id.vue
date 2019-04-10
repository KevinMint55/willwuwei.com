<template>
  <div class="container view">
    <div :class="s.blog">
      <div :class="s.info">
        <div :class="s.title">
          <h3>{{ post.title }}</h3>
        </div>
        <div :class="s.tag">
          <span>
            <i class="km km-tags"></i>
            {{ post.tags.toString() }}
          </span>
          <span>
            <i class="km km-calendar"></i>
            {{ post.updatedAt.split(' ')[0] }}
          </span>
          <span>
            <i class="km km-eye"></i>
            {{ post.PV }}°C
          </span>
        </div>
      </div>
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
  async asyncData ({ $axios, params }) {
    const post = await $axios.$get('blog/details', {
      params: {
        id: params.id,
      },
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

.title {
  display: flex;
  justify-content: center;
  h3 {
    font-size: 24px;
    color: #3d4450;
  }
}

.tag {
  display: flex;
  justify-content: center;
  margin: 20px;
  > span {
    background-color: rgba(10,10,0,0.7);
    margin-right: 6px;
    color: #fff;
    padding: .3em .6em;
    border-radius: .25em;
    font-size: 12px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    i {
      margin-right: 2px;
      vertical-align: text-top;
    }
    &:hover {
      background-color: #d9534f;
    }
  }
}

@media (max-width: 760px) {
  .date {
    display: none;
  }
  .article {
    transform: perspective(2500px) rotateX(0);
  }
  .tag {
    margin: 5px;
    > span {
      color: #3d4450;
      background-color: transparent;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
