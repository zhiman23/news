<template>
  <div>
    <TopNav title="我的收藏" />
    <Postitem :postData="post" v-for="post in postList" :key="post.id" />
  </div>
</template>

<script>
import TopNav from "../../components/TopNav";
import Postitem from "../../components/Postitem";
export default {
  components: {
    TopNav,
    Postitem,
  },
  data() {
    return {
      postList: [],
    };
  },
  created() {
    //根据id，收藏文章
    // this.$axios({
    //   url: "/post_star/1",
    // }).then((res) => {
    //   console.log(res);
    // }),
    this.$axios({
      url: "/user_star",
    }).then((res) => {
      console.log(res.data.data);
      this.postList = res.data.data;
    });
  },
};
</script>

<style>
</style>