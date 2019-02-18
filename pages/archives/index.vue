<template>
  <div class="container" :class="s.view">
    <div :class="s.mainstay">
      <ul :class="s.archives">
        <li v-for="archive in list">
          <h3 :class="s.year">{{ archive.year }}</h3>
          <ul :class="s.articles">
            <li v-for="article in archive.articles">
              <h4>{{ article.title }}</h4>
            </li>
          </ul>
        </li>
      </ul>
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
      list: [
        {
          year: 2018,
          articles: [
            {
              title: '测试文章1',
            },
            {
              title: '测试文章2',
            },
          ],
        },
        {
          year: 2017,
          articles: [
            {
              title: '制作一个不轻量的hexo主题:cube ',
            },
            {
              title: 'xampp + phpstorm的简单配置 ',
            },
          ],
        },
        {
          year: 2016,
          articles: [
            {
              title: '某crackme破解 ',
            },
            {
              title: 'javascript函数化构造器 ',
            },
          ],
        },
      ],
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

.archives {
  padding: 20px;
  box-shadow: 0 0 50px black;
  background-color: rgba(230,238,232,0.5);
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

@media (max-width: 1040px) {
  .mainstay {
    width: 100%;
  }
}
</style>
