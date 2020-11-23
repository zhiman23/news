<template>
  <div>
    <button @click="show = true">弹出性别</button>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [{ name: "男" }, { name: "女" }],
    };
  },
  methods: {
    onSelect(action) {
      console.log("选中");
      console.log(action);
      this.show = false;
    },
  },
};
</script>

<style>
</style>