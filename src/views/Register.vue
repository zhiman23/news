<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test" @click="$router.back()"></span>
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
      errMsg="请输入正确的昵称"
      :rule="/^.{2,8}$/"
      placeholder="请输入昵称"
      type="text"
      @setValue="setNickname"
    />
    <Myinput
      errMsg="请输入正确的密码"
      :rule="/^\d{6,12}$/"
      placeholder="请输入密码"
      type="password"
      @setValue="setPassword"
    />

    <Mybtn btnText="注册" @click.native="register()" />
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
      nickname: "",
    };
  },
  methods: {
    setUsername(newValue) {
      this.username = newValue;
    },
    setNickname(newValue) {
      this.nickname = newValue;
    },
    setPassword(newValue) {
      this.password = newValue;
    },
    register() {
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.message == "注册成功") {
          this.$toast.success("注册成功");
          this.$router.push("/login");
        } else {
          this.$toast.fail("注册失败");
        }
      });
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
    color: #ff00dd;
  }
}
</style>