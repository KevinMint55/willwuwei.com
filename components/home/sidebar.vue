<template>
  <div :class="s.sidebar">
    <aside :class="s.search">
      <form :class="s.searchForm">
        <input type="text" placeholder="搜索文章~" :class="s.searchInput">
        <button :class="s.searchBtn" type="submit">
          <i class="km km-search_light"></i>
        </button>
      </form>
    </aside>
    <aside :class="s.author">
      <div :class="s.authorName">KEVINMINT</div>
      <div :class="s.authorInfo">
        <img src="../../assets/images/avatar.jpg" alt="">
        <p>不会旅游的摄影师不是好程序员</p>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
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

.author {
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: rgba(230,238,232,0.5);
  box-shadow: 0 0 5px #c2c2c2;
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
    }
    p {
      margin: 10px 0;
    }
  }
}
</style>
