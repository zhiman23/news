<template>
  <div>
    {{ postData.title }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: {},
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      console.log(res.data);
      this.postData = res.data.data;
    });
  },
};
</script>

<style>
</style>