<template>
  <div class="part_wrapper">
    <div class="normal" v-if="postData.type == 1">
      <div class="header">
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconnew"></span>
        <div class="btnfollow">已关注</div>
      </div>
      <div class="headline">
        <div class="title">{{ postData.title }}</div>
        <div class="info">{{ user.nickname }} 2020-11-28</div>
        <div class="content" v-html="postData.contnet"></div>
      </div>
    </div>
    <div class="video_post" v-if="postData.type == 2">
      <!-- 封面换图poster="" -->
      <video
        controls
        src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
      ></video>
      <div class="info">
        <img src="@/assets/1.jpg" alt="" class="avatar" />
        <div class="name">{{ user.nickname }}</div>
        <div class="btnfollow">关注</div>
      </div>
      <div class="title">{{ postData.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: {},
      user: {},
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      console.log(res.data);
      this.postData = res.data.data;
      this.user = res.data.data.user;
    });
  },
};
</script>

<style lang="less" scoped>
.part_wrapper {
  .title {
    font-size: 16/360 * 100vw;
    color: #000000;
    font-weight: 700;
  }
  .normal {
    .header {
      display: flex;
      align-items: center;
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
      }
    }
    .headline {
      padding: 0 18/360 * 100vw;

      .info {
        font-size: 13/360 * 100vw;
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
      }
    }
  }
}
</style>