<template>
  <div class="box">
    <Parent :parentData="commentData.parent" v-if="commentData.parent" />
    {{commentData.content}}
  </div>
</template>

<script>
import Parent from "../components/Parent";
export default {
  props: ["commentData"],
  components: {
    Parent
  }
};
</script>

<style lang="less" scoped>
.box {
  border: 1px solid red;
  padding: 5/360 * 100vw;
  margin: 2/360 * 100vw;
}
</style>