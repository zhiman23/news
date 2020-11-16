<template>
  <div>
    <input type="text" :placeholder="tixing" />
  </div>
</template>

<script>
export default {
  //子组件声明接收
  props: ["tixing"],
};
</script>

<style>
</style>