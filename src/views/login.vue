<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <Myinput
      errMsg="请输入正确用户名"
      :rule="/.{6}/"
      placeholder="用户名 / 手机号码"
      type="text"
    />
    <Myinput
      errMsg="密码必须是6~12位的数字"
      :rule="/^\d{6,12}$/"
      placeholder="密码"
      type="password"
    />

    <Mybtn btnText="登录" />
  </div>
</template>

<script>
import Myinput from "../components/Myinput";
import Mybtn from "../components/Mybtn";

export default {
  components: {
    Myinput,
    Mybtn,
  },
};
</script>

<style lang="less">
.container {
  padding: 24/360 * 100vw;
}
.btnClose {
  .iconfont {
    font-size: 28/360 * 100vw;
  }
}
.logo {
  text-align: center;
  .iconfont {
    font-size: 126/360 * 100vw;
    color: #ff00dd;
  }
}
</style>

