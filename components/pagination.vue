<template>
  <div class="pagination">
    <button class="btn btn-prev" @click="turnPage(internalCurrentPage - 1)" :class="{ disabled: internalCurrentPage - 1 < 1}">
      <i class="km km-back"></i>
    </button>
    <ul class="pager">
      <li
        :class="{ active: internalCurrentPage === 1 }"
        v-if="pageCount > 0" @click="turnPage(1)">1</li>
      <li
        class="more btn-quickprev"
        v-if="showPrevMore" @click="turnPage(internalCurrentPage - 5)">
        <i class="km km-more"></i>
        <i class="km km-doubleleft"></i>
      </li>
      <li
        v-for="pager in pagers"
        :key="pager"
        :class="{ active: internalCurrentPage === pager }"
        @click="turnPage(pager)">{{ pager }}</li>
      <li
        class="more btn-quicknext"
        v-if="showNextMore" @click="turnPage(internalCurrentPage + 5)">
        <i class="km km-more"></i>
        <i class="km km-doubleright"></i>
      </li>
      <li
        :class="{ active: internalCurrentPage === pageCount }"
        v-if="pageCount > 1" @click="turnPage(pageCount)">{{ pageCount }}</li>
    </ul>
    <button class="btn btn-next" @click="turnPage(internalCurrentPage + 1)" :class="{ disabled: internalCurrentPage + 1 > pageCount}">
      <i class="km km-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      showPrevMore: false,
      showNextMore: false
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.internalPageSize)
    },
    pagers() {
      const pagerCount = 7

      const currentPage = Number(this.internalCurrentPage)
      const pageCount = Number(this.pageCount)

      let showPrevMore = false
      let showNextMore = false

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 3) {
          showPrevMore = true
        }

        if (currentPage < pageCount - 3) {
          showNextMore = true
        }
      }

      const array = []

      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for (let i = startPage; i < pageCount; i++) {
          array.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i)
        }
      }

      this.showPrevMore = showPrevMore
      this.showNextMore = showNextMore

      return array
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val
      }
    },
    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = val
      }
    }
  },
  methods: {
    turnPage(page) {
      let paging;
      if (page < 1) {
        paging = 1;
      } else if (page > this.pageCount) {
        paging = this.pageCount;
      } else {
        paging = page;
      }
      if (this.internalCurrentPage === paging) {
        return;
      }
      this.internalCurrentPage = paging;
      this.$emit('on-change', this.internalCurrentPage);
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  button {
    min-width: 36px;
    background-color: transparent;
    border-radius: 4px;
    color: #e6e6fa;
    border: 2px solid #6b69d6;
    cursor: pointer;
    margin: 0 5px;
    > i {
      font-size: 12px;
    }
    &:hover {
      color: #fff;
      background-color: #6b69d6;
      transition: all .3s ease-in-out;
    }
    &.disabled {
      display: none;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.pager {
  display: flex;
  font-size: 13px;
  flex-wrap: wrap;
  li {
    min-width: 36px;
    line-height: 28px;
    text-align: center;
    padding: 0 4px;
    margin: 0 5px;
    border-radius: 4px;
    border: 2px solid #6b69d6;
    color: #e6e6fa;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #6b69d6;
      transition: all .3s ease-in-out;
    }
    &.active {
      cursor: default;
      color: #fff;
      background-color: #6b69d6;
    }
    &.more {
      > i {
        font-size: 12px;
      }
      .km-doubleleft,
      .km-doubleright {
        display: none;
      }
      &.btn-quickprev:hover {
        .km-doubleleft {
          display: inline-block;
        }
        .km-more {
          display: none;
        }
      }
      &.btn-quicknext:hover {
        .km-doubleright {
          display: inline-block;
        }
        .km-more {
          display: none;
        }
      }
    }
  }
}
</style>