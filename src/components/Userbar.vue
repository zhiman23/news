<template>
  <div class="barWapper">
    <div class="label">{{ label }}</div>
    <div class="desc">{{ desc }}</div>
    <span class="iconfont iconjiantou1"></span>
  </div>
</template>

<script>
export default {
  props: ["label", "desc"],
};
</script>

<style lang="less" scoped>
.barWapper {
  display: flex;
  align-items: center;
  padding: 10/360 * 100vw 20/360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 0;
  margin-left: 20/360 * 100vw;
  .label {
    flex-grow: 1;
    font-size: 16/360 * 100vw;
    color: #333;
  }
  .desc {
    font-size: 14/360 * 100vw;
    color: #888;
    padding: 8/360 * 100vw;
  }
}
</style>