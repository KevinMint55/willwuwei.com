<template>
  <div :id="s.app" ref="app">
    <navbar />
    <nuxt :class="s.main" />
    <div :class="s.copyright">
      <span>版权所有</span>
      <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备17065042号</a>
    </div>
    <transition name="slide">
      <div :class="s.backToTop" @click="backToTop" v-if="showToTop">
        <i class="km km-up"></i>
      </div>
    </transition>
    <div :class="[s.menu, showMenu ? s.open : s.close]" :style="{ top: `${menuTop}px`, left: `${menuLeft}px`}" v-clickoutside="closeMenu">
      <ul :class="s.menuList">
        <li style="left: 50%; top: 15%;" @click="goHome">首页</li>
        <li style="left: 80.3109%; top: 32.5%;" @click="turnPage(1)">下一页</li>
        <li style="left: 80.3109%; top: 67.5%;" @click="goArchives">归档</li>
        <li style="left: 50%; top: 85%;" @click="goAbout">关于</li>
        <li style="left: 19.6891%; top: 67.5%;">留言板</li>
        <li style="left: 19.6891%; top: 32.5%;" @click="turnPage(-1)">上一页</li>
      </ul>
    </div>
    <div ref="nest"></div>
    <canvas ref="star" :class="s.star"></canvas>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue';
import Star from '~/plugins/star';

export default {
  components: {
    navbar,
  },
  data() {
    return {
      showToTop: false,
      showMenu: false,
      menuTop: 0,
      menuLeft: 0,
    };
  },
  mounted() {
    this.$refs.app.addEventListener('scroll', () => {
      if (this.$refs.app.scrollTop > 100) {
        this.showToTop = true;
      } else {
        this.showToTop = false;
      }
    });
    this.initRightMenu();
    this.initStar(this.$refs.star);
  },
  mixins: [Star],
  methods: {
    initRightMenu() {
      window.oncontextmenu = (e) => {
        e.preventDefault();
        this.showMenu = !this.showMenu;
        if (e.y - 150 < 0) {
          this.menuTop = 0;
        } else if (e.y - 150 > document.body.clientHeight - 300) {
          this.menuTop = document.body.clientHeight - 300;
        } else {
          this.menuTop = e.y - 150;
        }
        if (e.x - 150 < 0) {
          this.menuLeft = 0;
        } else if (e.x - 150 > document.body.clientWidth - 300) {
          this.menuLeft = document.body.clientWidth - 300;
        } else {
          this.menuLeft = e.x - 150;
        }
      };
    },
    backToTop() {
      const currentScroll = this.$refs.app.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.backToTop);
        this.$refs.app.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    },
    closeMenu() {
      this.showMenu = false;
    },
    goHome() {
      this.$router.push({ path: '/' });
      this.closeMenu();
    },
    goArchives() {
      this.$router.push({ path: '/archives' });
      this.closeMenu();
    },
    goAbout() {
      this.$router.push({ path: '/about' });
      this.closeMenu();
    },
    turnPage(val) {
      this.closeMenu();
      if (val === -1) {
        if (!this.$route.params.num) {
          return;
        } else {
          if (this.$route.params.num === 2 && this.$route.name === 'page-num') {
            this.$router.push('/');
            return;
          }
          const params = { ...this.$route.params, num: this.$route.params.num - 1 };
          this.$router.push({ name: this.$route.name, params });
        }
      } else {
        if (this.$route.name === 'index') {
          this.$router.push({ name: 'page-num', params: { num: 2 }});
          return;
        }
        if (this.$route.name.includes('num')) {
          const curPage = this.$route.params.num || 1;
          const params = { ...this.$route.params, num: curPage + 1 };
          this.$router.push({ name: this.$route.name, params });
        }
      }
    },
  },
};
</script>

<style lang="scss" module="s">
#app {
  position: relative;
  z-index: 2;
  height: 100vh;
  overflow-y: auto;
  background-color: #000;
}

.copyright {
  display: block;
  text-align: center;
  color: #eee;
  padding: 50px;
  a {
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border-bottom: dotted 1px;
    border-bottom-color: rgba(255, 255, 255, 0.5);
    &:hover {
      border-bottom-color: transparent;
      color: #18bfef !important;
    }
  }
}

.star {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.backToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: rgba(10,10,0,0.7);
  color: white;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #d9534f;
    border-color: #d9534f;
    transition: all 0.3s ease;
  }
}

.menu {
  position: fixed;
  transition: all .4s;
  z-index: 3;
  &.open {
    opacity: 1;
    .menuList {
      animation: mopen .4s;
    }
  }
  &.close {
    opacity: 0;
    z-index: -1;
    .menuList {
      animation: mclose .4s;
    }
  }
}

.menuList {
  position: relative;
  width: 300px;
  height: 300px;
  transition: all .4s ease-out;
  > li {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    color: #fff;
    text-shadow: #dc965a 1px 0px 0px, #dc965a 0px 1px 0px, #dc965a -1px 0px 0px, #dc965a 0px -1px 0px;
    background-color: rgba(10,10,0,0.7);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    cursor: pointer;
    margin-left: -41px;
    margin-top: -41px;
    transition: all 0.3s;
    &:hover {
      text-shadow: #6cf 1px 0px 0px, #6cf 0px 1px 0px, #6cf -1px 0px 0px, #6cf 0px -1px 0px;
      box-shadow: #fff 0px 0px 80px inset;
    }
  }
}

@keyframes mopen {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(-270deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes mclose {
  from {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  to {
    opacity: 0;
    transform: scale(0.1) rotate(-270deg);
  }
}

.main {
  position: relative;
  z-index: 2;
}
</style>
