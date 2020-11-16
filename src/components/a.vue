<template>
  <div>
    <div @click="link">百度</div>
  </div>
</template>

<script>
export default {
  methods: {
    link() {
      window.location.href = "http://www.baidu.com";
    },
  },
};
</script>

<style>
</style>