<template>
  <div>详情页</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router.params.id);
  },
};
</script>

<style>
</style>