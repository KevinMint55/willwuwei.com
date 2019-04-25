<template>
  <div class="container view">
    <div :class="s.blog">
      <div :class="s.info">
        <div :class="s.intro">
          <div :class="s.title">
            <h3>{{ post.title }}</h3>
          </div>
          <div :class="s.tag">
            <div>
              <i class="km km-apps"></i>
              <span>{{ post.category }}</span>
            </div>
            <div>
              <i class="km km-tags"></i>
              <span>{{ post.tags.toString() }}</span>
            </div>
            <div>
              <i class="km km-calendar"></i>
              <span>{{ $utils.formatDate(post.showDate, 'yyyy-MM-dd') }}</span>
            </div>
            <div>
              <i class="km km-eye"></i>
              <span>{{ post.PV }}°C</span>
            </div>
          </div>
        </div>
        <figure :class="s.cover">
          <img :src="$utils.setCdn(post.cover)" alt="">
        </figure>
      </div>
      <div v-html="post.content" class="blog-content" v-if="post.editorType === 'richtext'"></div>
      <div v-html="compiledMarkdown" class="markdown-body" v-if="post.editorType === 'markdown'"></div>
      <div :class="s.comment">
        <div id="SOHUCS" :sid="$route.path"></div>
      </div>
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
  scrollToTop: true,
  async asyncData({ $axios, params }) {
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
  mounted() {
    this.initComment();
  },
  methods: {
    initComment() {
      this.$utils.initComment();
    },
  },
};
</script>

<style lang="scss" module="s">
.blog {
  width: 100%;
  background-color: #fff;
  padding: 10px;
}

.info {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.intro {
  position: relative;
  z-index: 3;
}

.title {
  display: flex;
  justify-content: center;
  h3 {
    font-size: 32px;
    color: #ffffff;
  }
}

.tag {
  display: flex;
  justify-content: center;
  margin: 20px;
  > div {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0.3em 0.7em;
    border-radius: 0.25em;
    font-size: 14px;
    cursor: pointer;
    background-color: rgba(230,238,232,0.5);
    transition: all 0.3s ease-in-out;
    i {
      margin-right: 8px;
    }
    &:hover {
      background-color: #d9534f;
    }
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}

.cover {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    flex-direction: column;
    margin: 5px;
    > div {
      margin-right: 0;
      background-color: transparent;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
