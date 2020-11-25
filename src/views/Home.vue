<template>
  <div id="app">
    <HomeHeader />

    <van-tabs v-model="active">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <van-list
          @load="loadMore"
          :immediate-check="false"
          v-model="category.loading"
        >
          <Postitem
            :postData="post"
            v-for="post in category.postList"
            :key="post.id"
          />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import Postitem from "../components/Postitem";
export default {
  components: {
    HomeHeader,
    Postitem,
  },
  data() {
    return {
      active: 1,
      categoryList: [],
    };
  },
  //当前分类列表是this.categoryList
  //当前激活分类的索引值是this.active
  //监控激活索引
  watch: {
    active() {
      // this.bodyPost();
      //切换分类会触发这个监听器
      //当前栏目已有文章就不需要获取
      const currn = this.categoryList[this.active];
      if (currn.postList.length == 0) {
        this.bodyPost();
      }
    },
  },
  //打开界面就会看到的
  created() {
    // this.header();、
    this.$axios({
      url: "/category",
    }).then((res) => {
      // console.log(res);
      //数组map()的概念
      // 1、map() 方法返回一个新数组，新数组中的元素为原始数组中的每个元素调用函数处理后得到的值。
      // 2、map() 方法按照原始数组元素顺序依次处理元素。
      // 注意： map() 不会对空数组进行检测。
      // 注意： map() 不会改变原始数组。
      // 注意：函数的作用是对数组中的每一个元素进行处理，返回新的元素。
      // 3、语法
      // map是数组的方法，有一个参数，参数是一个函数，函数中有3个参数
      // 参数1：item必须。当前元素的值
      // 参数2：index，可选。当前元素在数组中的索引值
      // 参数3：arr可选。当前元素属于的数组对象
      this.categoryList = res.data.data.map((item) => {
        return {
          ...item,
          postList: [],
          //每页都应该自己管理自己当前页面的页码和长度
          pageIndex: 1,
          pageSize: 6,
          //初始化分类，让他不要重复发送请求
          loading: false,
        };
      });
      this.bodyPost();
    });
  },
  methods: {
    // header() {
    //   this.$axios({
    //     url: "/category",
    //   }).then((res) => {
    //     console.log(res);
    //     this.categoryList = res.data.data;
    //     this.bodyPost();
    //   });
    // },
    loadMore() {
      const currn = this.categoryList[this.active];
      currn.pageIndex += 1;
      this.bodyPost();
    },
    bodyPost() {
      //当前激活索引
      const currn = this.categoryList[this.active];
      //获取文章的方式
      this.$axios({
        url: "/post",
        params: {
          //根据id发请求拿文章
          category: currn.id,
          pageIndex: currn.pageIndex,
          pageSize: currn.pageSize,
        },
      }).then((res) => {
        console.log(res);
        currn.postList = res.data.data;
        // console.log(this.categoryList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>