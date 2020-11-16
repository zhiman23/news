<template>
  <div>
    登录页
    <Myinput tixing="请输入用户名" />
    <Myinput tixing="请输入密码" />
    <Myinput tixing="请输入昵称" />
    <baidu />
  </div>
</template>

<script>
import Myinput from "../components/Myinput";
import baidu from "../components/a";

export default {
  components: {
    Myinput,
    baidu,
  },
};
</script>

<style>
</style>