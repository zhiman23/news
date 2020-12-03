<template>
  <div class="part_wrapper">
    <div class="normal" v-if="postData.type == 1">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <span class="iconfont iconnew"></span>
        <div
          @click="handle"
          class="btnfollow"
          :class="{ unfollow: !postData.has_follow }"
        >
          {{ postData.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="headline">
        <div class="title">{{ postData.title }}</div>
        <div class="info">{{ postData.user.nickname }} 2020-11-28</div>
        <div class="content" v-html="this.postData.content"></div>
      </div>
    </div>
    <div class="video_post" v-if="postData.type == 2">
      <!-- 封面换图poster="" -->
      <video
        :poster="postData.cover[0].url | fixImgUrl"
        controls
        :src="postData.content"
      ></video>
      <div class="info">
        <img src="@/assets/1.jpg" alt class="avatar" />
        <div class="name">{{ postData.user.nickname }}</div>
        <div
          @click="handle"
          class="btnfollow"
          :class="{ unfollow: !postData.has_follow }"
        >
          {{ postData.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="title">{{ postData.title }}</div>
    </div>
    <div class="btns">
      <div
        @click="handleLike"
        class="btn dianzan"
        :class="{ hasLike: postData.has_like }"
      >
        <span class="iconfont icondianzan"></span>
        {{ postData.like_length }}
      </div>
      <div class="btn weixin">
        <span class="iconfont iconweixin"></span>
        微信
      </div>
    </div>

    <h2 class="commentTitle">精彩跟帖</h2>
    <Main
      :commentData="comment"
      v-for="comment in commentList"
      :key="comment.id"
    />
    <div
      class="btnMorecomment"
      @click="$router.push('/morecomment/' + $route.params.id)"
    >
      更多跟贴
    </div>

    <Commentinput @reloadComment="reloadComment" />
  </div>
</template>

<script>
import Main from "../components/Comment/Main";
import Commentinput from "../components/Comment/Commentinput";

export default {
  components: {
    Main,
    Commentinput,
  },
  // inject: ["reload"],
  data() {
    return {
      postData: {},
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      console.log(res.data);
      this.postData = res.data.data;
      // this.user = res.data.data.user;
    });
    this.$refs.def;

    this.reloadComment();
  },
  methods: {
    reloadComment() {
      this.$axios({
        url: "post_comment/" + this.$route.params.id,
      }).then((res) => {
        if (res.data.data.length > 3) {
          res.data.data.length = 3;
        }
        this.commentList = res.data.data;
      });
    },
    //关注按钮
    handle() {
      if (this.postData.has_follow) {
        this.$axios({
          url: "/user_unfollow/" + this.postData.user.id,
        }).then((res) => {
          console.log(res.data);
          this.postData.has_follow = false;
        });
      } else {
        this.$axios({
          url: "/user_follows/" + this.postData.user.id,
        }).then((res) => {
          console.log(res.data);
          this.postData.has_follow = true;
        });
      }
    },
    //点赞按钮
    handleLike() {
      this.$axios({
        url: "/post_like/" + this.$route.params.id,
      }).then((res) => {
        console.log(res.data);
        if (res.data.message == "取消成功") {
          this.postData.has_like = false;
          this.postData.like_length--;
          this.$toast("取消成功");
        }
        if (res.data.message == "点赞成功") {
          this.postData.has_like = true;
          this.postData.like_length++;
          this.$toast.success("点赞成功");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.part_wrapper {
  .commentTitle {
    text-align: center;
    font-size: 26/360 * 100vw;
    font-weight: 700;
    padding: 20/360 * 100vw;
  }
  .btnMorecomment {
    font-size: 18/360 * 100vw;
    border: 1px solid #888;
    width: 121/360 * 100vw;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    margin: 30/360 * 100vw auto;
    text-align: center;
    border-radius: 15/360 * 100vw;
    margin-bottom: 100/360 * 100vw;
  }
  .title {
    font-size: 16/360 * 100vw;
    color: #000000;
    font-weight: 700;
  }
  .normal {
    .header {
      display: flex;
      align-items: center;
      padding: 0 10/360 * 100vw;
      .iconjiantou2 {
        font-size: 16/360 * 100vw;
      }
      .iconnew {
        flex-grow: 1;
        font-size: 54/360 * 100vw;
      }
      .btnfollow {
        font-size: 14/360 * 100vw;
        border: 1px solid #888;
        height: 30/360 * 100vw;
        line-height: 30/360 * 100vw;
        padding: 0 14/360 * 100vw;
        border-radius: 15/360 * 100vw;
        &.unfollow {
          border-color: red;
          background: red;
          color: #fff;
        }
      }
    }
    .headline {
      padding: 0 18/360 * 100vw;

      .info {
        font-size: 12/360 * 100vw;
        color: #a1a1a1;
        padding: 6/360 * 100vw;
      }
      .content {
        /deep/img {
          max-width: 100%;
        }
      }
    }
  }
  .video_post {
    video {
      width: 100%;
    }
    .info {
      padding: 10/360 * 100vw;
      display: flex;
      align-items: center;
      .avatar {
        width: 40/360 * 100vw;
        height: 40/360 * 100vw;
        object-fit: cover;
        border-radius: 50%;
      }
      .name {
        flex-grow: 1;
        padding-left: 10/360 * 100vw;
        color: #888;
      }
      .btnfollow {
        font-size: 14/360 * 100vw;
        border: 1px solid #888;
        height: 30/360 * 100vw;
        line-height: 30/360 * 100vw;
        padding: 0 14/360 * 100vw;
        border-radius: 15/360 * 100vw;
        &.unfollow {
          border-color: red;
          background: red;
          color: #fff;
        }
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-evenly;
    padding: 20/360 * 100vw;
    border-bottom: 4/360 * 100vw solid rgb(235, 231, 231);
    .btn {
      border: 1px solid #888;
      font-size: 14/360 * 100vw;
      height: 25/360 * 100vw;
      line-height: 25/360 * 100vw;
      padding: 0 15/360 * 100vw;
      border-radius: 15/360 * 100vw;
      .iconfont {
        font-size: 14/360 * 100vw;
        padding-right: 2px;
      }
      .iconweixin {
        color: rgb(81, 228, 13);
      }
      &.hasLike {
        color: red;
      }
    }
  }
}
</style>