<template>
  <div id="app">
    <HomeHeader />
    <van-tabs v-model="active">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <Postitem :postData="post" v-for="post in postList" :key="post.id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import Postitem from "../components/Postitem";
export default {
  components: {
    HomeHeader,
    Postitem,
  },
  data() {
    return {
      active: 0,
      categoryList: [],
      postList: [],
    };
  },
  created() {
    this.header();
    this.bodyPost();
  },
  methods: {
    header() {
      this.$axios({
        url: "/category",
      }).then((res) => {
        console.log(res);
        this.categoryList = res.data.data;
      });
    },
    bodyPost() {
      this.$axios({
        url: "/post",
      }).then((res) => {
        console.log(res);
        this.postList = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>