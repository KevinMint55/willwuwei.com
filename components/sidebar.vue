<template>
  <div :class="s.sidebar">
    <aside :class="s.search" v-visible="{ className: s.animate }">
      <form :class="s.searchForm">
        <input type="text" placeholder="搜索文章~" :class="s.searchInput">
        <button :class="s.searchBtn" type="submit">
          <i class="km km-search_light"></i>
        </button>
      </form>
    </aside>
    <aside :class="s.panel" v-visible="{ className: s.animate }">
      <div :class="s.authorName">KEVINMINT</div>
      <div :class="s.authorInfo">
        <img src="../assets/images/avatar.jpg" alt="">
        <p>不会旅游的摄影师不是好程序员</p>
      </div>
    </aside>
    <panel icon-class="km km-hot" name="最热文章">
      <ul>
        <li v-for="post in hotList" :class="s.post">
          <span :class="s.name" @click="$router.push({ path: `/post/${post._id}` })">{{ post.title }}</span>
          <span :class="s.views">{{ post.PV }}°C</span>
        </li>
      </ul>
    </panel>
    <aside :class="s.panel" v-visible="{ className: s.animate }">
      <ul :class="s.tabs">
        <li v-for="tab in ['网站导航', '友情链接', '个人链接']" :class="[curTab === tab ? s.active : '']" @click="curTab = tab">{{ tab }}</li>
      </ul>
      <div :class="s.tabContent">
        <transition name="fade" mode="out-in">
          <div v-if="curTab === '网站导航'" key="网站导航">
            <p :class="s.title">
              <i class="km km-apps"></i>
              <span>分类</span>
            </p>
            <ul :class="s.category">
              <li v-for="item in category">
                <span>{{ item.name }}</span>
                <i>（{{ item.count }}）</i>
              </li>
            </ul>
            <p :class="s.title">
              <i class="km km-tags"></i>
              <span>标签</span>
            </p>
            <ul :class="s.tag">
              <li v-for="item in tagsList" :style="{ fontSize: `${randomSize()}px`, backgroundColor: randomColor() }">{{ item.name }}（{{ item.count }}）</li>
            </ul>
          </div>
          <ul :class="s.url" v-if="curTab === '友情链接'" key="友情链接">
            <li v-for="item in friends" @click="openFriend(item.url)">{{ item.name }}</li>
          </ul>
          <ul :class="s.url" v-if="curTab === '个人链接'" key="个人链接">
            <li v-for="item in personal">{{ item.name }}</li>
          </ul>
        </transition>
      </div>
    </aside>
  </div>
</template>

<script>
import panel from './panel.vue';

export default {
  components: {
    panel,
  },
  data() {
    return {
      curTab: '网站导航',
      friends: [
        {
          name: 'Josh',
          url: 'https://www.joshwong.cn/',
        },
        {
          name: 'Nooldey',
          url: 'https://zhuweisheng.com.cn/',
        },
      ],
      personal: [
        {
          name: 'Github',
          url: 'https://github.com/KevinMint55',
        },
      ],
    };
  },
  computed: {
    hotList() {
      return this.$store.state.hotList;
    },
    category() {
      return this.$store.state.category;
    },
    tagsList() {
      return this.$store.state.tagsList;
    },
  },
  methods: {
    randomSize() {
      return Math.random() * 10 + 12;
    },
    randomColor() {
      return '#'+Math.floor(Math.random()*0xffffff).toString(16);
    },
    openFriend(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="scss" module="s">
.sidebar {
  width: 33%;
  padding: 0 15px;
}

.search {
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 8px;
  background-color: rgba(10,10,0,0.7);

  transform: translateY(100px);
  opacity: 0;
  transition: all 2s cubic-bezier(.175,.885,.32,1.275);
  &.animate {
    opacity: 1;
    transform: translate(0);
  }
}

.searchForm {
  display: flex;
  flex-wrap: wrap;
}

.searchInput {
  flex: auto;
  margin-right: 15px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(238,88,83,0.6);
  height: 34px;
  padding: 6px 12px;
  color: #555;
  border: 1px solid #f89693;
  border-radius: 4px;
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 50px black;
  }
}

.searchBtn {
  padding: 6px 12px;
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
  cursor: pointer;
  border-radius: 4px;
  > i {
    font-size: 14px;
  }
  &:hover {
    background-color: #c9302c;
    border-color: #ac2925;
  }
}

.panel {
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 5px #c2c2c2;

  backface-visibility: hidden;
  transform: perspective(2500px) rotateY(100deg);
  transition: all 3s cubic-bezier(.175,.885,.32,1.275);
  &.animate {
    opacity: 1;
    transform: perspective(2500px) rotateY(0);
  }
}

.authorName {
  text-align: center;
  color: #fff;
  background-color: rgba(10,10,0,0.7);
  border-color: #000;
  padding: 10px 15px;
  line-height: 14px;
}
.authorInfo {
  text-align: center;
  padding: 20px;
  img {
    width: 140px;
    height: auto;
    border-radius: 50%;
    border: 1px solid #fff;
    &:hover {
      transition: all .5s ease;
      transform: rotate(360deg);
    }
  }
  p {
    color: #F3E5E5;
    margin: 10px 0;
  }
}

.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(230,238,232,0.3);
  transition: all .5s ease-in-out;
  font-size: 12px;
  .name {
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #b94a48;
    }
  }
  .views {
    display: inline-block;
    background-color: #d9534f;
    border-radius: 10px;
    color: #fff;
    padding: 3px 7px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
  &:hover {
    background-color: rgba(255,255,255,0.7);
    box-shadow: 0 0 50px black;
    border-bottom-color: rgba(255,255,255,0.7);
  }
}

.tabs {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
  > li {
    font-size: 12px;
    padding: 10px 15px;
    color: #F3E5E5;
    cursor: pointer;
    border-radius: 5px;
    transition: all .3s;
    &.active {
      color: #fff;
      background-color: #d9534f;
    }
    &:hover {
      color: #fff;
      background-color: #d9534f;
    }
  }
}

.tabContent {
  padding: 10px;
  .title {
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-top: 14px;
    margin-bottom: 14px;
    span {
      margin-left: 8px;
    }
  }
  .category {
    color: #F3E5E5;
    list-style-type: disc;
    padding-left: 20px;
    li {
      margin-bottom: 10px;
    }
    span {
      display: inline-block;
      text-decoration: underline;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: #ffffff;
      }
    }
  }
  .tag {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    > li {
      color: #fff;
      opacity: 0.8;
      padding: 2px 6px 3px;
      margin: 2px;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  .url {
    font-size: 12px;
    > li {
      padding: 10px 15px;
      color: #F3E5E5;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #d9534f;
        transition: all .25s ease-in-out;
      }
    }
  }
}

@media (max-width: 1040px) {
  .sidebar {
    width: 100%;
  }
}
</style>
