<template>
  <div>
    <input type="text" v-model="value" :placeholder="tixing" />
    <button @click="sendValue">提交给父组件</button>
  </div>
</template>

<script>
export default {
  //绑定（把子元素给到父元素）
  data() {
    return {
      value: "",
    };
  },
  //子组件声明接收
  props: ["tixing"],

  methods: {
    //每当点击的时候做一个子传父
    sendValue() {
      // console.log(this.value);
      //设定数据同时把数据传递出去
      this.$emit("setValue", this.value);
    },
  },
};
</script>

<style>
</style>