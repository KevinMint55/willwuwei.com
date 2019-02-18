<template>
  <div class="container" :class="s.view">
    <div :class="s.mainstay">
      <div :class="s.well">
        <ul :class="s.tags">
          <li v-for="tag in tags" :class="s.tag">{{ tag }}</li>
        </ul>
      </div>
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
      tags: ['杂谈', 'python', 'javascript', 'php', 'AngularJS', '网络相关', 'Hexo', '逆向', '云服务器', '博客搭建'],
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

.well {
  padding: 20px;
  box-shadow: 0 0 50px black;
  background-color: rgba(230,238,232,0.5);
  margin-bottom: 30px;
  min-height: 20px;
  border-radius: 4px;
}

.tags {
  line-height: 2;
  font-weight: bold;
  color: #31708f;
  padding: 15px;
  border: 1px solid #bce8f1;
  border-radius: 4px;
  background-color: #d9edf7;
}

.tag {
  color: #d2322d;
  cursor: pointer;
  &:hover {
    color: #23527c;
  }
}

@media (max-width: 1040px) {
  .mainstay {
    width: 100%;
  }
}
</style>
