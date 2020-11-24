<template>
  <div>
    <!-- 渲染组件 -->
    <Postitem :postData="post" v-for="post in postList" :key="post.id" />
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
      //存放文章列表的数组
      postList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post",
    }).then((res) => {
      console.log(res.data.data);
      this.postList = res.data.data;
    });
  },
};
</script>

<style>
</style>