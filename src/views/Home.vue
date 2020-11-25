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
      active: 1,
      categoryList: [],
      postList: [],
    };
  },
  //当前分类列表是this.categoryList
  //当前激活分类的索引值是this.active
  //监控激活索引
  watch: {
    active() {
      this.bodyPost();
    },
  },
  //打开界面就会看到的
  created() {
    // this.header();、
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.categoryList = res.data.data;
      this.bodyPost();
    });
  },
  methods: {
    // header() {
    //   this.$axios({
    //     url: "/category",
    //   }).then((res) => {
    //     console.log(res);
    //     this.categoryList = res.data.data;
    //     this.bodyPost();
    //   });
    // },
    bodyPost() {
      //当前激活索引
      const currn = this.categoryList[this.active];
      //获取文章的方式
      this.$axios({
        url: "/post",
        params: {
          //根据id发请求拿文章
          category: currn.id,
        },
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