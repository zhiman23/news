<template>
  <div>
    <TopNav title="栏目管理" />
    <div class="activeList">
      <h2>点击删除以下频道</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in activeList"
          @click="deactive(index)"
          :key="item.id"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="deactiveList">
      <h2>点击添加以下频道</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in deactiveList"
          @click="active(index)"
          :key="item.id"
        >
          {{ item.name }}
        </div>
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
  watch: {
    activeList() {
      localStorage.setItem("activeList", JSON.stringify(this.activeList));
    },
    deactiveList() {
      localStorage.setItem("deactiveList", JSON.stringify(this.deactiveList));
    },
  },
  created() {
    if (localStorage.getItem("activeList")) {
      this.activeList = JSON.parse(localStorage.getItem("activeList"));
      if (localStorage.getItem("deactiveList")) {
        this.deactiveList = JSON.parse(localStorage.getItem("deactiveList"));
      }
    } else {
      this.$axios({
        url: "category",
      }).then((res) => {
        this.activeList = res.data.data;
      });
    }
  },
  methods: {
    //禁用一个分类，先放入禁用列表，再从激活列表中删除
    deactive(index) {
      this.deactiveList.push(this.activeList[index]);
      this.activeList.splice(index, 1);
    },
    active(index) {
      this.activeList.push(this.deactiveList[index]);
      this.deactiveList.splice(index, 1);
    },
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