<template>
  <div class="headerWrapper">
    <span class="iconfont iconjiantou2" @click="$router.back()"></span>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.headerWrapper {
  display: flex;
  align-items: center;
  padding: 20/360 * 100vw;
  .title {
    flex-grow: 1;
    text-align: center;
    font-size: 16/360 * 100vw;
    color: #333;
    font-weight: bold;
    padding-right: 18/360 * 100vw;
  }
}
</style>