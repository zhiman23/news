<template>
  <div>
    <van-dialog v-model="isShow" show-cancel-button title="修改用户名">
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      value: "",
    };
  },
};
</script>

<style>
</style>