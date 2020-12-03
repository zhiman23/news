<template>
  <div id="app">
    <!-- <router-view v-if="isRouterAlive" /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  // name: "app",
  // provide() {
  //   return {
  //     reload: this.reload,
  //   };
  // },
  // data() {
  //   return {
  //     isRouterAlive: true,
  //   };
  // },
  // methods: {
  //   reload() {
  //     this.isRouterAlive = false;
  //     this.$nextTick(function () {
  //       this.isRouterAlive = true;
  //     });
  //   },
  // },
};
</script>

<style lang="less">
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");

* {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
}
// #app {
//   width: 750/360 * 100vw;
// }
</style>
