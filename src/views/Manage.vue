<template>
  <div>
    <TopNav title="栏目管理" />
    <div class="active">
      <h2>点击删除以下频道</h2>
      <div class="list">
        <div class="item">推荐</div>
        <div class="item">热点</div>
        <div class="item">娱乐</div>
        <div class="item">科技</div>
        <div class="item">汽车</div>
        <div class="item">财经</div>
      </div>
    </div>
    <div class="deactive">
      <h2>点击添加以下频道</h2>
      <div class="list">
        <!-- <div class="item"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  components: {
    TopNav,
  },
  data() {
    return {
      activeList: [],
      deactiveList: [],
    };
  },
  created() {
    this.$axios({
      url: "category",
    }).then((res) => {
      console.log(res.data.data);
      this.activeList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
h2 {
  font-size: 12/360 * 100vw;
  font-weight: 400;
  color: #999998;
  padding-left: 14/360 * 100vw;
}
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    font-size: 14/360 * 100vw;
    border: 1px solid #888;
    padding: 6/360 * 100vw 14/360 * 100vw;
    margin: 14/360 * 100vw;
  }
}
</style>