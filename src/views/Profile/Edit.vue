<template>
  <div class="edit_wrapper">
    <TopNav title="编辑资料" />
    <div class="logo">
      <img
        v-if="userInfo.head_img"
        :src="$axios.defaults.baseURL + userInfo.head_img"
        alt=""
        class="touxiang"
      />
      <img v-else src="@/assets/1.jpg" alt="" class="touxiang" />
    </div>
    <!-- 昵称 -->
    <Userbar
      label="昵称"
      :desc="userInfo.nickname"
      @click.native="isShowNickname = true"
    />
    <!-- 密码 -->
    <Userbar label="密码" desc="******" @click.native="isShowPassword = true" />
    <!-- 性别 -->
    <Userbar
      label="性别"
      :desc="userInfo.gender == 1 ? '小哥哥' : '小姐姐'"
      @click.native="isShowGender = true"
    />
    <!-- 修改昵称 -->
    <van-dialog
      v-model="isShowNickname"
      show-cancel-button
      title="修改昵称"
      @confirm="setNickname"
    >
      <van-field v-model="newNickname" placeholder="请输入昵称" />
    </van-dialog>
    <!-- 修改密码 -->
    <van-dialog
      v-model="isShowPassword"
      show-cancel-button
      title="修改密码"
      @confirm="passWord"
    >
      <van-field v-model="newPassword" placeholder="请输入密码" />
    </van-dialog>
    <!-- 修改性别 -->
    <van-action-sheet
      v-model="isShowGender"
      show-cancel-button
      title="修改性别"
      @confirm="Gender"
    >
      <van-field v-model="newGender" />
    </van-action-sheet>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav";
import Userbar from "../../components/Userbar";

export default {
  components: {
    TopNav,
    Userbar,
  },
  data() {
    return {
      userInfo: {},
      isShowNickname: false,
      isShowPassword: false,
      isShowGender: false,
      newNickname: "",
      newPassword: "",
      newGender: [{ name: "男" }, { name: "女" }],
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        const { data, message } = res.data;
        if (message == "获取成功") {
          this.userInfo = data;
        }
      });
    },
    setNickname() {
      const data = {
        nickname: this.newNickname,
      };
      this.tongyong(data);
    },
    passWord() {
      const data = {
        passWord: this.newPassword,
      };
      this.tongyong(data);
    },
    tongyong(data) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data,
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
    Gender() {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          gender: this.newGender,
        },
      }).then((res) => {
        console.log(res.data);
        Toast("取消");
        this.loadPage();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  .touxiang {
    height: 70/360 * 100vw;
    width: 70/360 * 100vw;
    border-radius: 50%;
    //图片平铺
    object-fit: cover;
    //在范围内，把图片缩小，全部放下
    // object-fit: contain;
  }
}
</style>