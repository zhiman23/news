<template>
  <div class="ac">
    <Parent :parentData="parentData.parent" v-if="parentData.parent" />
    <div class="info">
      <div class="name">又是一个昵称</div>
      <div class="date">2 hours ago</div>
      <div class="btn">回复</div>
    </div>
    <div class="content">{{parentData.content}}</div>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["parentData"]
};
</script>

<style lang="less" scoped>
.ac {
  padding: 2/360 * 100vw;
  margin: 2/360 * 100vw;
  border: 1px solid #e4e4e4;
  .info {
    display: flex;
    font-size: 16/360 * 100vw;
    color: #333;
    .date {
      flex-grow: 1;
      font-size: 14/360 * 100vw;
      margin-left: 4/360 * 100vw;
      padding: 2/360 * 100vw;
      color: #888;
    }
    .btn {
      font-size: 14/360 * 100vw;
      color: #888;
    }
  }
  .content {
    padding: 16/360 * 100vw;
    font-size: 16/360 * 100vw;
  }
}
</style>