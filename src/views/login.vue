<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="inputWrapper">
      <input type="text" placeholder="用户名 / 手机号码" />
    </div>
    <div class="inputWrapper">
      <input type="text" placeholder="密码" />
    </div>
    <div class="btnSubmit">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import Myinput from "../components/Myinput";

export default {
  components: {
    Myinput,
  },
  methods: {
    logValue(value) {
      console.log("父组件");
      console.log("接收到子组件的传值");
      console.log(value);
    },
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
    color: #b82cbd;
  }
}
.inputWrapper {
  padding-bottom: 16/360 * 100vw;
  input {
    width: 100%;
    height: 48/360 * 100vw;
    line-height: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
    border: none;
    outline: none;
    border-bottom: 1px solid #333;
  }
}
.btnSubmit {
  padding-top: 26/360 * 100vw;
  button {
    width: 100%;
    // height: 48/360*100vw;
    line-height: 48/360 * 100vw;
    font-size: 18px;
    background: #b82cbd;
    color: white;
    border: none;
    outline: none;
    border-radius: 24/360 * 100vw;
  }
}
</style>

