<template>
  <div>
    <TopNav title="精彩跟帖" />
    <Main
      :commentData="comment"
      v-for="comment in commentList"
      :key="comment.id"
    />
    <Commentinput @reloadComment="reloadComment" />
  </div>
</template>

<script>
import Commentinput from "../components/Comment/Commentinput";
import TopNav from "../components/TopNav";
import Main from "../components/Comment/Main";
export default {
  components: {
    TopNav,
    Main,
    Commentinput,
  },
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
    }).then((res) => {
      this.commentList = res.data.data;
    });
    this.reloadComment();
  },
  methods: {
    reloadComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
      }).then((res) => {
        if (res.data.data.length > 3) {
          res.data.data.length = 3;
        }
        this.commentList = res.data.data;
      });
    },
  },
};
</script>

<style>
</style>