<template>
  <div id="app">
    {{ active }}
    <HomeHeader />

    <van-tabs v-model="active">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <Postitem
          :postData="post"
          v-for="post in category.postList"
          :key="post.id"
        />
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
    };
  },
  //当前分类列表是this.categoryList
  //当前激活分类的索引值是this.active
  //监控激活索引
  watch: {
    active() {
      // this.bodyPost();
      //切换分类会触发这个监听器
      //当前栏目已有文章就不需要获取
      const currn = this.categoryList[this.active];
      if (currn.postList.length == 0) {
        this.bodyPost();
      }
    },
  },
  //打开界面就会看到的
  created() {
    // this.header();、
    this.$axios({
      url: "/category",
    }).then((res) => {
      // console.log(res);
      this.categoryList = res.data.data.map((item) => {
        return {
          ...item,
          postList: [],
        };
      });
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
        currn.postList = res.data.data;
        // console.log(this.categoryList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>