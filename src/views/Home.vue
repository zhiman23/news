<template>
  <div id="app">
    <div>首页</div>
    <router-link to="/login">登录</router-link><br />
    <router-link to="/Register">注册</router-link><br />
    <router-link to="/User">个人中心</router-link><br />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#app {
  font-size: 50px;
}
</style>