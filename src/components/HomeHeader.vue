<template>
  <div class="homeheader">
    <span class="iconfont iconnew" @click="$router.push('/')"></span>
    <div class="search">
      <span class="iconfont iconsearch"></span>
      <span class="searchText">搜索新闻</span>
    </div>
    <span class="iconfont iconwode" @click="$router.push('/User')"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.homeheader {
  height: 49/360 * 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  padding: 0 18/360 * 100vw;
  .iconnew {
    font-size: 50/360 * 100vw;
  }
  .search {
    flex-grow: 1;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.6);
    height: 34/360 * 100vw;
    line-height: 34/360 * 100vw;
    border-radius: 17/360 * 100vw;
    margin: 8 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    .iconsearch {
      font-size: 18/360 * 100vw;
    }
    .searchText {
      font-size: 10/360 * 100vw;
    }
  }
  .iconwode {
    font-size: 30/360 * 100vw;
    opacity: 0.6;
  }
}
</style>