<template>
  <div :class="s.sidebar">
    <aside v-visible="{ className: s.animate }" :class="s.search">
      <form :class="s.searchForm">
        <input
          ref="search"
          v-model="searchContent"
          type="text"
          :placeholder="$l.rightBar.search"
          :class="s.searchInput"
          @keydown.enter.prevent="search"
        />
        <button :class="s.searchBtn" @click.prevent="search">
          <i class="km km-search_light" />
        </button>
      </form>
    </aside>
    <aside v-visible="{ className: s.animate }" :class="s.panel">
      <div :class="s.authorName">KEVINMINT</div>
      <div :class="s.authorInfo">
        <img src="../assets/images/avatar.jpg" alt />
        <p>{{ $l.signature }}</p>
      </div>
    </aside>
    <panel icon-class="km km-hot" :name="$l.rightBar.hot">
      <ul>
        <li
          v-for="(post, index) in hotList"
          :key="index"
          :class="s.post"
          @click="$router.push({ path: `/post/${post._id}` })"
        >
          <span :class="s.name">{{ post.title }}</span>
          <span :class="s.views">{{ post.PV }}°C</span>
        </li>
      </ul>
    </panel>
    <aside v-visible="{ className: s.animate }" :class="s.panel">
      <ul :class="s.tabs">
        <li
          v-for="(tab, index) in ['sitemap', 'blogroll', 'personalLink']"
          :key="index"
          :class="[curTab === tab ? s.active : '']"
          @click="curTab = tab"
        >{{ $l.rightBar[tab] }}</li>
      </ul>
      <div :class="s.tabContent">
        <transition name="fade" mode="out-in">
          <div v-if="curTab === 'sitemap'" key="sitemap">
            <p :class="s.title">
              <i class="km km-apps" />
              <span>{{ $l.category }}</span>
            </p>
            <ul :class="s.category">
              <li
                v-for="item in category"
                :key="item.name"
                @click="
                  $router.push({
                    name: 'category-name-num',
                    params: { name: item.name }
                  })
                "
              >
                <span>{{ item.name }}</span>
                <i>（{{ item.count }}）</i>
              </li>
            </ul>
            <p :class="s.title">
              <i class="km km-tags" />
              <span>{{ $l.tag }}</span>
            </p>
            <ul :class="s.tag">
              <li
                v-for="item in tagsList"
                :key="item.name"
                :style="{
                  fontSize: `${randomSize()}px`,
                  backgroundColor: randomColor()
                }"
                @click="
                  $router.push({
                    name: 'tag-name-num',
                    params: { name: item.name }
                  })
                "
              >{{ item.name }}（{{ item.count }}）</li>
            </ul>
          </div>
          <ul v-if="curTab === 'blogroll'" key="blogroll" :class="s.url">
            <li v-for="(item, index) in friends" @click="openUrl(item.url)" :key="index">{{ item.name }}</li>
          </ul>
          <ul v-if="curTab === 'personalLink'" key="personalLink" :class="s.url">
            <li v-for="(item, index) in personal" @click="openUrl(item.url)" :key="index">{{ item.name }}</li>
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
      curTab: 'sitemap',
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
      searchContent: '',
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
      return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    },
    openUrl(url) {
      window.open(url, '_blank');
    },
    search() {
      if (!this.searchContent) {
        this.$refs.search.focus();
        return;
      }
      this.$router.push({ name: 'search-content-num', params: { content: this.searchContent } });
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
  background-color: rgba(10, 10, 0, 0.7);

  transform: translateY(100px);
  opacity: 0;
  transition: all 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  margin-right: 10px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(238, 88, 83, 0.6);
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
  background-color: rgba(230, 238, 232, 0.5);
  box-shadow: 0 0 5px #c2c2c2;

  backface-visibility: hidden;
  transform: perspective(2500px) rotateY(100deg);
  transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &.animate {
    opacity: 1;
    transform: perspective(2500px) rotateY(0);
  }
}

.authorName {
  text-align: center;
  color: #fff;
  background-color: rgba(10, 10, 0, 0.7);
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
      transition: all 0.5s ease;
      transform: rotate(360deg);
    }
  }
  p {
    color: #f3e5e5;
    margin: 10px 0;
  }
}

.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(230, 238, 232, 0.3);
  transition: all 0.5s ease-in-out;
  font-size: 12px;
  cursor: pointer;
  .name {
    color: #fff;
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
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 50px black;
    border-bottom-color: rgba(255, 255, 255, 0.7);
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
    color: #f3e5e5;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s;
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
    margin-bottom: 8px;
    span {
      margin-left: 8px;
    }
  }
  .category {
    color: #f3e5e5;
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
      color: #f3e5e5;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #d9534f;
        transition: all 0.25s ease-in-out;
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
