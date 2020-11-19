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
      :rule="/^.{3,8}$/"
      placeholder="用户名 / 手机号码"
      type="text"
      @setValue="setUsername"
    />
    <Myinput
      errMsg="密码必须是6~12位的数字"
      :rule="/^\d{6,12}$/"
      placeholder="请输入密码"
      type="password"
      @setValue="setPassword"
    />

    <Mybtn btnText="登录" @click.native="login()" />
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
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    setUsername(newValue) {
      this.username = newValue;
    },
    setPassword(newValue) {
      this.password = newValue;
    },

    login() {
      this.$axios({
        url: "http://157.122.54.189:9083/login",
        method: "POST",
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.message == "登录成功") {
          this.$toast.success("登录成功");
        } else {
          this.$toast.fail("登录失败");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
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

