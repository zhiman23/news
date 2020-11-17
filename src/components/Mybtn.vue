<template>
  <div class="btnSubmit">{{ btnText }}</div>
</template>

<script>
export default {
  props: ["btnText"],
};
</script>


<style lang="less" scoped>
.btnSubmit {
  width: 100%;
  height: 48/360 * 100vw;
  line-height: 48/360 * 100vw;
  text-align: center;
  font-size: 50px;
  background: linear-gradient(to right, #a3f6ef, #f6a1fd);
  color: white;
  border: none;
  outline: none;
  border-radius: 24/360 * 100vw;
}
</style>