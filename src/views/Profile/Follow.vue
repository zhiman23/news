<template>
  <div class="edit_wrapper">
    <TopNav title="我的关注" />
    <div class="list" v-for="user in followList" :key="user.id">
      <div class="item">
        <img
          v-if="user.head_img"
          :src="$axios.defaults.baseURL + user.head_img"
          alt=""
          class="touxiang"
        />
        <img v-else src="@/assets/1.jpg" alt="" class="touxiang" />
      </div>
      <div class="info">
        <div class="name">{{ user.nickname }}</div>
        <div class="date">2019-10-10</div>
      </div>
      <div class="cancelBtn" @click="unguan(user.id)">取消关注</div>
    </div>
    <button @click="guan(1234)">关注用户1</button>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav";

export default {
  components: {
    TopNav,
  },
  data() {
    return {
      followList: [],
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    loadPage() {
      this.$axios({
        url: "/user_follows",
      }).then((res) => {
        this.followList = res.data.data;
      });
    },
    guan(id) {
      this.$axios({
        url: "/user_follows/" + id,
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
    unguan(userId) {
      this.$axios({
        url: "/user_unfollow/" + userId,
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  align-items: center;
  padding: 20/360 * 100vw;
  border-bottom: 1px solid #f2f2f2;
  .touxiang {
    width: 40/360 * 100vw;
    height: 40/360 * 100vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .info {
    flex-grow: 1;
    padding-left: 10/360 * 100vw;
    .name {
      font-size: 16/360 * 100vw;
      color: #333;
    }
    .date {
      font-size: 14/360 * 100vw;
      color: #888;
      padding-top: 4/360 * 100vw;
    }
  }
  .cancelBtn {
    background: #ddd;
    height: 36 /360 * 100vw;
    line-height: 36 /360 * 100vw;
    font-size: 13 /360 * 100vw;
    padding: 0 16 /360 * 100vw;
    border-radius: 18 /360 * 100vw;
    color: #333;
    text-align: center;
  }
}
</style>