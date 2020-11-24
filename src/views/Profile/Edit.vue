<template>
  <div class="edit_wrapper">
    <TopNav title="编辑资料" />
    <div class="logo">
      <!-- 头像 -->

      <van-uploader :after-read="afterRead">
        <img
          v-if="userInfo.head_img"
          :src="$axios.defaults.baseURL + userInfo.head_img"
          alt=""
          class="touxiang"
        />
        <img v-else src="@/assets/1.jpg" alt="" class="touxiang" />
      </van-uploader>
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
      :actions="genderList"
      @select="setGender"
      cancel-text="取消"
    />
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
      genderList: [
        { name: "男", gender: 1 },
        { name: "女", gender: 0 },
      ],
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    // 渲染页面
    loadPage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
      }).then((res) => {
        const { data, message } = res.data;
        if (message == "获取成功") {
          this.userInfo = data;
        }
      });
    },
    //昵称
    setNickname() {
      const data = {
        nickname: this.newNickname,
      };
      this.tongyong(data);
      //清空输入框的密码
      this.newNickname = "";
    },
    //密码
    passWord() {
      const data = {
        passWord: this.newPassword,
      };
      this.tongyong(data);
      this.newPassword = "";
    },
    //性别
    setGender(action) {
      console.log(action);
      const data = {
        gender: action.gender,
      };
      this.tongyong(data);
      this.isShowGender = false;
    },
    //封装请求
    tongyong(data) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),

        data,
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
    afterRead(fileObj) {
      console.log("文档读取后的回调");
      console.log("可以拿到选中的文件对象");
      console.log(fileObj);
      //上传
      const fd = new FormData();
      fd.append("file", fileObj.file);

      this.$axios({
        method: "post",
        url: "/upload",
        data: fd,
      }).then((res) => {
        console.log(res.data);
        const { message, data } = res.data;
        if (message == "文件上传成功") {
          console.log(data.url);
          //上传图片获取回来的地址
          const newData = {
            head_img: data.url,
          };
          this.tongyong(newData);
        }
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