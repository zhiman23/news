<template>
  <div>
    <div class="header">
      <span class="iconfont iconjiantou2 tou" @click="goback"></span>
      <div class="search">
        <span class="iconfont iconsearch fang"></span>
        <input type="text" v-model="keyword" />
      </div>
      <div class="btn" @click="handleSearch">搜索</div>
    </div>

    <div class="historyList" v-if="postList.length == 0">
      <h2>历史记录</h2>
      <div class="list">
        <div
          class="item"
          @click="historySearch(item)"
          v-for="(item, index) in $store.state.historyList"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="resList">
      <Postitem :postData="post" v-for="post in postList" :key="post.id" />
    </div>
  </div>
</template>

<script>
import Postitem from "../components/Postitem";
export default {
  components: {
    Postitem,
  },
  data() {
    return {
      keyword: "",
      postList: [],
      history: [],
    };
  },
  created() {
    //第二步，数据恢复
    if (localStorage.getItem("history")) {
      const oldHistory = JSON.parse(localStorage.getItem("history"));
      this.$store.commit("recoverHistory", oldHistory);
    }
  },
  watch: {
    keyword(newVal) {
      if (!newVal) {
        this.postList = [];
      }
    },
    "$store.state.historyList": function () {
      localStorage.setItem(
        "history",
        JSON.stringify(this.$store.state.historyList)
      );
    },
  },

  methods: {
    historySearch(item) {
      this.keyword = item;
      this.handleSearch();
    },
    handleSearch() {
      // 拿到当前的关键字, 发请求即可
      this.$store.commit("addHistory", this.keyword);
      this.$axios({
        url: "post_search",
        params: {
          keyword: this.keyword,
        },
      }).then((res) => {
        console.log(res.data);
        this.postList = res.data.data;
      });
    },
    goback() {
      if (this.postList.length > 0) {
        this.postList = [];
        this.keyword = "";
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 58 /360 * 100vw;
  align-items: center;
  padding: 0 16 /360 * 100vw;
  .fang {
    font-size: 15/360 * 100vw;
  }
  .tou {
    font-size: 15/360 * 100vw;
  }
  .search {
    flex-grow: 1;
    border: 1px solid #888;
    height: 38 /360 * 100vw;
    display: flex;
    align-items: center;
    padding: 0 10 /360 * 100vw;
    margin: 0 16 /360 * 100vw;
    border-radius: 19 /360 * 100vw;
    .iconfont {
      padding-right: 10 /360 * 100vw;
    }
    input {
      width: 180 /360 * 100vw;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .btn {
    font-size: 16 /360 * 100vw;
  }
}
.historyList {
  padding: 16 /360 * 100vw;
  h2 {
    font-size: 18 /360 * 100vw;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 10 /360 * 100vw;
      padding-left: 0;
    }
  }
}
</style>