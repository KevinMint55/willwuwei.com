<template>
  <div class="container view">
    <div class="mainstay">
      <ul :class="s.archives">
        <li v-for="(archive, index) in list" :key="index">
          <h3 :class="s.year">{{ archive.year }}</h3>
          <ul :class="s.articles">
            <li
              v-for="(article, cIndex) in archive.articles"
              :key="cIndex"
              @click="$router.push({ path: `/post/${article._id}` })"
            >
              <h4>{{ article.title }}</h4>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <sidebar />
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
      list: [],
    };
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('blog/archives');
    if (data) {
      return {
        list: data,
      };
    }
    return {};
  },
  async fetch({ store }) {
    await store.dispatch('loadSideBarData');
  },
  head() {
    return {
      title: '归档',
    };
  },
};
</script>

<style lang="scss" module="s">
.archives {
  padding: 20px;
  box-shadow: 0 0 50px black;
  background-color: rgba(230, 238, 232, 0.5);
  margin-bottom: 30px;
  min-height: 20px;
  border-radius: 4px;
}

.year {
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-top: 40px;
  }
}

.articles {
  font-size: 14px;
  background-color: #d9edf7;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #bce8f1;
  border-radius: 4px;
  > li {
    color: #d2322d;
    cursor: pointer;
    line-height: 2;
    &:hover {
      color: #23527c;
    }
  }
}
</style>
