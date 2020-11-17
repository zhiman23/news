<template>
  <div class="inputWrapper">
    <!-- :class="isOk ? '' : 'error'" -->
    <input
      @blur="showErrMsg"
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
  props: ["placeholder", "type", "rule", "errMsg", "blur"],
  //监听(需求：每当输入数据发生变化，校验数据格式)
  watch: {
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

  methods: {
    showErrMsg() {
      if (!this.isOk) {
        alert(this.errMsg);
      }
    },
  },
};
</script>

<style lang="less" scoped>
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