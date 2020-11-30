<template>
  <div class="box">
    <!-- v-for遍历 -->
    <Main :commentData="comment" v-for="(comment,index) in commentList" :key="index" />
  </div>
</template>

<script>
import Main from "../components/Main";
export default {
  components: {
    Main
  },
  data() {
    return {
      commentList: [
        {
          content: "大鹏一日同风起",
          parent: {
            content: "扶摇直上九万里",
            parent: { content: "这是第三条" }
          }
        },
        { content: "当个咸鱼" },
        { content: "快乐" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>