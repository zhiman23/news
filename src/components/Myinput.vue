<template>
  <div class="inputWrapper">
    <!-- :class="isOk ? '' : 'error'" -->
    <input
      :class="{
        error: !isOk,
      }"
      :placeholder="placeholder"
      :type="type"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  //绑定（把子元素给到父元素）
  data() {
    return {
      value: "",
      isOk: true,
    };
  },
  //子组件声明接收
  props: ["placeholder", "type", "rule", "errMsg"],
  //监听(需求：每当输入数据发生变化，校验数据格式)
  watch: {
    //第一种方法
    value(newValue) {
      //创建正则表达式
      if (this.rule.test(newValue)) {
        console.log("合法");
        this.isOk = true;
      } else {
        console.log(this.errMsg);
        this.isOk = false;
      }
    },
  },

  // methods: {
  //   //每当点击的时候做一个子传父
  //   sendValue() {
  //     // console.log(this.value);
  //     //设定数据同时把数据传递出去
  //     this.$emit("setValue", this.value);
  //   },
  // },
};
</script>

<style lang="less">
.inputWrapper {
  padding-bottom: 16/360 * 100vw;
  input {
    width: 100%;
    height: 48/360 * 100vw;
    line-height: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
    border: none;
    outline: none;
    border-bottom: 1px solid #333;
  }
  .error {
    border-color: red;
  }
}
</style>