<template>
  <div class="ac">
    <Parent :parentData="parentData.parent" v-if="parentData.parent" />
    {{parentData.content}}
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
  color: #ccc;
  font-size: 8/360 * 100vw;
}
</style>