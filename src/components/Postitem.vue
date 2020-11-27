<template>
  <div class="allpost" @click="$router.push('/particular/' + postData.id)">
    <div
      class="singlePost"
      v-if="
        postData.type == 1 &&
        postData.cover.length > 0 &&
        postData.cover.length < 3
      "
    >
      <div class="left">
        <div class="title">{{ postData.title }}</div>
        <div class="info">
          {{ postData.user.nickname }}
          {{ postData.comment_length }}跟帖
        </div>
      </div>
      <img :src="postData.cover[0].url | fixImgUrl" alt="" class="right" />
    </div>

    <div
      class="threePost"
      v-if="postData.type == 1 && postData.cover.length >= 3"
    >
      <div class="title">
        {{ postData.title }}
      </div>
      <div class="coverWrapper">
        <img :src="postData.cover[0].url | fixImgUrl" alt="" class="cover" />
        <img :src="postData.cover[1].url | fixImgUrl" alt="" class="cover" />
        <img :src="postData.cover[2].url | fixImgUrl" alt="" class="cover" />
      </div>
      <div class="info">
        {{ postData.user.nickname }} {{ postData.comment_length }} 跟帖
      </div>
    </div>

    <div
      class="videoPost"
      v-if="postData.type == 2 && postData.cover.length >= 1"
    >
      <div class="title">{{ postData.title }}</div>
      <div class="play">
        <span class="iconfont iconshipin"></span>
        <img :src="postData.cover[0].url | fixImgUrl" alt="" class="cover" />
      </div>
      <div class="info">
        {{ postData.user.nickname }} {{ postData.comment_length }} 跟帖
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //传递数据
  props: ["postData"],
};
</script>

<style lang="less" scoped>
.allpost {
  .singlePost {
    display: flex;
    padding: 15/360 * 100vw;
    border-bottom: 1px solid #eaeaea;
    justify-content: space-between;
    .left {
      display: flex;
      //垂直显示
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 14/360 * 100vw;
      }
      .info {
        font-size: 12/360 * 100vw;
        color: #a3a3a3;
      }
    }
    .right {
      width: 121/360 * 100vw;
      height: 75/360 * 100vw;
      object-fit: cover;
    }
  }
  .threePost {
    padding: 15/360 * 100vw;
    border-bottom: 1px solid #eaeaea;
    justify-content: space-between;
    .title {
      font-size: 14/360 * 100vw;
    }
    .coverWrapper {
      display: flex;
      justify-content: space-between;
      margin: 10/360 * 100vw;
      .cover {
        width: 112/360 * 100vw;
        height: 74/360 * 100vw;
        object-fit: cover;
      }
    }
    .info {
      font-size: 12/360 * 100vw;
      color: #a3a3a3;
    }
  }
  .videoPost {
    padding: 15/360 * 100vw;
    border-bottom: 1px solid #eaeaea;
    .title {
      font-size: 14/360 * 100vw;
    }
    .play {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconshipin {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        font-size: 35/360 * 100vw;
        border-radius: 50%;
      }

      .cover {
        width: 340/360 * 100vw;
        height: 170/360 * 100vw;
        object-fit: contain;
      }
    }
    .info {
      font-size: 12/360 * 100vw;
      color: #a3a3a3;
    }
  }
}
</style>