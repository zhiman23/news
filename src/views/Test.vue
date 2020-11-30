<template>
  <div class="box">
    <!-- v-for遍历 -->
    <Main :commentData="comment" v-for="(comment,index) in commentList" :key="index" />
  </div>
</template>

<script>
import Main from "../components/Comment/Main";
export default {
  components: {
    Main
  },
  data() {
    return {
      commentList: [
        // {
        //   content: "大鹏一日同风起",
        //   parent: {
        //     content: "扶摇直上九万里",
        //     parent: { content: "这是第三条" }
        //   }
        // },
        // { content: "当个咸鱼" },
        // { content: "快乐" }
      ]
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/1"
    }).then(res => {
      console.log(res.data.data);
      this.commentList = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
</style>