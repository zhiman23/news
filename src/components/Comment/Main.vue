<template>
  <div class="box">
    <!-- 头像信息 -->
    <div class="info">
      <img src="@/assets/1.jpg" alt class="avatar" />
      <div class="middle">
        <div class="name">这是昵称亚</div>
        <div class="date">2 mintues ago</div>
      </div>
      <div class="btn" @click="sendComment">回复</div>
    </div>
    <!-- parent子组件 -->
    <Parent :parentData="commentData.parent" v-if="commentData.parent" />
    <!-- 评论内容 -->
    <div class="mainContent">{{ commentData.content }}</div>
  </div>
</template>

<script>
import Parent from "./Parent";
import evenBus from "../../utils/evenBus";
export default {
  props: ["commentData"],
  components: {
    Parent,
  },
  methods: {
    sendComment() {
      evenBus.$emit("sendMsg", this.commentData.id);
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 10/360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .info {
    display: flex;
    .avatar {
      width: 35/360 * 100vw;
      height: 35/360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
    }
    .middle {
      flex-grow: 1;
      padding-left: 10/360 * 100vw;
      font-size: 14/360 * 100vw;
      color: #334;
      .date {
        font-size: 12/360 * 100vw;
        color: #888;
      }
    }
    .btn {
      font-size: 12/360 * 100vw;
      color: #888;
    }
  }
  .mainContent {
    font-size: 16/360 * 100vw;
    color: #333;
  }
}
</style>