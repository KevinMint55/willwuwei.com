<template>
  <header :class="s.header">
    <div class="container" :class="s.main">
      <div :class="s.brand" @click="$router.push('/')">{{ $l.name }}</div>
      <div :class="[s.toggle, showMenu ? s.active : '']" @click="showMenu = !showMenu">
        <span />
      </div>
      <div :class="[s.nav, showMenu ? s.active : '']">
        <ul :class="s.navList">
          <li
            v-for="(nav, index) in navList"
            :class="[$route.path === nav.path ? s.current : '']"
            @click="go(nav.path)"
            :key="index"
          >
            <i class="km" :class="nav.icon" />
            {{ $l.topBar[nav.name] }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: 'home',
          icon: 'km-home',
          path: '/',
        },
        {
          name: 'archive',
          icon: 'km-archive',
          path: '/archives',
        },
        {
          name: 'laboratory',
          icon: 'km-lab',
          path: '/lab',
        },
        {
          name: 'guestbook',
          icon: 'km-guestbook',
          path: '/messageBoard',
        },
        {
          name: 'about',
          icon: 'km-about',
          path: '/about',
        },
      ],
      showMenu: false,
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
      this.showMenu = false;
    },
  },
};
</script>

<style lang="scss" module="s">
.header {
  position: relative;
  font-size: 14px;
  border-radius: 0;
  border-color: #080808;
  background-color: rgba(10, 10, 0, 0.7);
  box-shadow: 0 0 8px black;
  min-height: 54px;
  z-index: 3;
}

.main {
  display: flex;
  flex-wrap: wrap;
}

.brand {
  font-size: 24px;
  line-height: 54px;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0);
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
    0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff;
  padding: 0 15px;
  cursor: pointer;
}

.navList {
  display: flex;
  line-height: 54px;
  > li {
    display: flex;
    color: #fff;
    padding: 0 15px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    > i {
      margin-right: 6px;
    }
    &.current {
      background-color: rgba(138, 43, 226, 0.7);
    }
    &:not(.current):hover {
      background-color: rgba(100, 90, 200, 0.7);
    }
  }
}

.toggle {
  position: relative;
  display: none;
  width: 50px;
  cursor: pointer;
  span {
    position: absolute;
    top: 26px;
    left: 10px;
    height: 2px;
    width: 30px;
    background: #fff;
    transition: all 0.2s;
    &:before {
      content: "";
      position: absolute;
      top: -8px;
      height: 2px;
      width: 30px;
      background: #fff;
      transition: all 0.4s;
    }
    &:after {
      content: "";
      position: absolute;
      top: 8px;
      height: 2px;
      width: 30px;
      background: #fff;
      transition: all 0.4s;
    }
  }
  &.active {
    span {
      background: transparent;
      &:before {
        top: 0;
        width: 30px;
        transform: rotate(-40deg);
      }
      &:after {
        top: 0;
        width: 30px;
        transform: rotate(40deg);
      }
    }
  }
}
@media (max-width: 760px) {
  .main {
    justify-content: space-between;
  }
  .nav {
    width: 100vw;
    height: 0;
    transition: all 0.25s;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    &.active {
      height: 240px;
    }
  }
  .navList {
    display: block;
    height: 100%;
    line-height: 44px;
    overflow: hidden;
    margin: 7.5px 0;
    > li {
      display: block;
    }
  }
  .toggle {
    display: block;
  }
}
</style>
