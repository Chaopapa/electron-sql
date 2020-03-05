<template>
  <div class="home">
    <h1>主页</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("组件内守卫");

    next(vm => {
      console.log(vm.isLogin);
    });
  }
};
</script>

<style></style>
