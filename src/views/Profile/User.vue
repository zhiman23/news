<template>
  <div class="User">
    <TopNav title="个人中心" />
    <div class="header" @click="$router.push('/edit')">
      <img
        v-if="userInfo.head_img"
        :src="$axios.defaults.baseURL + userInfo.head_img"
        alt=""
        class="touxiang"
      />
      <img v-else src="@/assets/1.jpg" alt="" class="touxiang" />
      <div class="info">
        <div class="name">
          <span
            class="iconfont"
            :class="{
              iconxingbienan: userInfo.gender === 1,
              iconxingbienv: userInfo.gender === 0,
            }"
          ></span>
          {{ userInfo.nickname || userInfo.username }}
        </div>
        <div class="data">2000-06-27</div>
      </div>
      <span class="iconfont iconjiantou1" @click="logout"></span>
    </div>
    <!-- 下 -->
    <Userbar
      label="我的关注"
      desc="关注的用户"
      @click.native="$router.push('/follow')"
    />
    <Userbar label="我的跟帖" desc="跟帖/回复" />
    <Userbar label="我的收藏" desc="文章/视频" />
    <Userbar label="设置" @click.native="$router.push('/edit')" />
    <Userbar label="退出" @click.native="logout" />
  </div>
</template>

<script>
import Userbar from "@/components/Userbar";
import TopNav from "@/components/TopNav";
export default {
  components: {
    Userbar,
    TopNav,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
    }).then((res) => {
      console.log(res.data);
      const { message, data } = res.data;
      if (message === "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo.head_img);
      }
    });
  },
  methods: {
    logText(str) {
      console.log(str);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$toast("退出成功");
      this.$router.replace("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.User {
  .header {
    display: flex;
    align-items: center;
    padding: 24/360 * 100vw 20/360 * 100vw;
    border-bottom: 5/360 * 100vw solid #e4e4e4;
    .touxiang {
      width: 70/360 * 100vw;
      height: 70/360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
    }
    .info {
      flex-grow: 1;
      padding-left: 10/360 * 100vw;
      .name {
        .iconxingbienv {
          color: tomato;
        }
        .iconxingbienan {
          color: skyblue;
        }
        color: #333;
        font-size: 16/360 * 100vw;
      }
      .data {
        font-size: 14/360 * 100vw;
        color: #888;
        margin-top: 6/360 * 100vw;
      }
    }
  }
}
</style>