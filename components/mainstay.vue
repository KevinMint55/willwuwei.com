<template>
  <div :class="s.mainstay">
    <div :class="s.notice">
      <button :class="s.close">
        <i class="km km-close"></i>
      </button>
      <p>这里是公告内容。配置相关说明请看_config.yml这里是公告内容。配置相关说明请看_config.yml这里是公告内容。</p>
    </div>
    <ul :class="s.articleList">
      <li :class="s.article" v-for="article in articleList" v-visible="{ className: s.animate }">
        <div :class="s.date">
          <div :class="s.month">{{ article.month }}月</div>
          <div :class="s.day">{{ article.day }}</div>
        </div>
        <div :class="s.title">
          <h3>{{ article.name }}</h3>
        </div>
        <div :class="[s.mobile, s.calendar]">
          <i class="km km-calendar"></i>
          {{ article.date }}
        </div>
        <div :class="s.tag">
          <span>
            <i class="km km-tags"></i>
            {{ article.tags.toString() }}
          </span>
          <span>
            <i class="km km-eye"></i>
            {{ article.views }}°C
          </span>
          <span>
            <i class="km km-guestbook"></i>
            {{ article.comments }}
          </span>
        </div>
        <div :class="s.content">
          <div :class="s.item">
            <div :class="s.img">
              <img :src="article.img" alt="">
            </div>
            <div :class="s.info">
              {{ article.info }}
            </div>
          </div>
        </div>
        <div :class="[s.mobile, s.info]">
          {{ article.info }}
        </div>
        <div :class="[s.mobile, s.read]">
          阅读全文
        </div>
      </li>
    </ul>
    <pagination @on-change="turnPage" :current-page="current" :page-size="pageSize" :total="total" style="margin-bottom: 30px;"></pagination>
  </div>
</template>

<script>
import pagination from './pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      articleList: [
        {
          name: '测试文章1',
          month: '03',
          day: '30',
          tags: ['js'],
          views: 666,
          comments: 4,
          img: require('../assets/images/background.jpg'),
          info: '测试文章1原来的评论issue没删, 这是测试文章2, 同样测试能否使用date作为gitment的ID',
          date: '2018-03-21',
        },
        {
          name: '测试文章1',
          month: '03',
          day: '30',
          tags: ['js'],
          views: 666,
          comments: 4,
          img: require('../assets/images/background.jpg'),
          info: '测试文章1原来的评论issue没删, 这是测试文章2, 同样测试能否使用date作为gitment的ID',

date: '2018-03-21',},
        {
          name: '测试文章1',
          month: '03',
          day: '30',
          tags: ['js'],
          views: 666,
          comments: 4,
          img: require('../assets/images/background.jpg'),
          info: '测试文章1原来的评论issue没删, 这是测试文章2, 同样测试能否使用date作为gitment的ID',
          date: '2018-03-21',
        },
        {
          name: '测试文章1',
          month: '03',
          day: '30',
          tags: ['js'],
          views: 666,
          comments: 4,
          img: require('../assets/images/background.jpg'),
          info: '测试文章1原来的评论issue没删, 这是测试文章2, 同样测试能否使用date作为gitment的ID',
          date: '2018-03-21',
        },
      ],
      current: 1,
      pageSize: 2,
      total: 30,
    };
  },
  methods: {
    turnPage(page) {
    },
  },
};
</script>

<style lang="scss" module="s">
.mainstay {
  width: 66%;
  padding: 0 15px;
}

.notice {
  position: relative;
  background-color: rgba(230,238,232,0.5);
  transition: all .3s ease;
  box-shadow: 0 0 8px black;
  min-height: 20px;
  padding: 19px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 30px;
  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    > i {
      font-size: 10px;
    }
  }
  &:hover {
    background-color: rgba(255,255,255,0.9);
    box-shadow: 0 0 50px black;
  }
}

.article {
  position: relative;
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 8px black;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 4px;

  backface-visibility: hidden;
  transition: all 1s cubic-bezier(.175,.885,.32,1.275);
  transform: perspective(2500px) rotateX(-100deg);
  &.animate {
    transform: perspective(2500px) rotateX(0);
  }
  &:hover {
    box-shadow: 0 0 50px black;
  }
}

.date {
  position: absolute;
  width: 70px;
  height: 70px;
  top: -20px;
  left: -20px;
  background-color: #6b69d6;
  border-color: #6b69d6;
  border-radius: 100px;
  color: #fff;
  padding-top: 10px;
  text-align: center;
  .day {
    font-size: 30px;
    margin-top: -5px;
  }
}

.title {
  display: flex;
  justify-content: center;
  h3 {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 4px #228DFF, 0 0 35px #228DFF, 0 0 16px #228DFF, 0 0 20px #228DFF, 0 0 30px #228DFF;
    &:hover {
      animation: neon 1.5s ease-in-out infinite alternate;
    }
  }
}

@keyframes neon {
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
  }
  100% {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 4px #228DFF, 0 0 35px #228DFF, 0 0 16px #228DFF, 0 0 20px #228DFF, 0 0 30px #228DFF;
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
    padding: .2em .6em .3em;
    border-radius: .25em;
    font-size: 12px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    i {
      margin-right: 2px;
      vertical-align: middle;
    }
    &:hover {
      background-color: #d9534f;
    }
  }
}

.content {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 8px black;
  cursor: pointer;
  .item {
    position: relative;
    overflow: hidden;
    &:hover {
      .img {
        transform: scale(1.2);
      }
      .info {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  .img {
    transform: scale(1);
    transition: all .35s ease-in-out;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    background: rgba(0,0,0,0.6);
    transition: all .35s ease-in-out;
    color: #bbb;
    padding: 20px;
    font-style: italic;
    font-size: 24px;
    transition: all .35s .3s linear;
    transform: scale(5);
  }
  &:hover {
    box-shadow: 0 0 50px black;
  }
}

@media (max-width: 1040px) {
  .mainstay {
    width: 100%;
  }
}

.mobile {
  display: none;
  &.info {
    font-size: 12px;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: auto;
    color: #666;
    background-color: #eee;
  }
  &.read {
    font-size: 12px;
    color: #fff;
    background-color: #d9534f;
    padding: 6px 12px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #c9302c;
    }
  }
  &.calendar {
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }
}

@media (max-width: 760px) {
  .date {
    display: none;
  }
  .mobile {
    display: block;
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
  .content {
    .item {
      pointer-events: none;
    }
  }
}
</style>
