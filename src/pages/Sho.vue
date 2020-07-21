<template>
  <div class="sho">
    <router-view></router-view>
    <van-tabbar route v-model="active">
      <van-tabbar-item icon="home-o" replace  to="/sho/so">首页</van-tabbar-item>
      <van-tabbar-item icon="search"  replace  to="/sho/fen">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o"  replace  to="/sho/guc">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o"   replace  to="/sho/wd">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "sho",

  data() {
    return {
        active:0,
    };
  }
};
</script>

<style lang="scss" scoped>
.sho {
  margin-bottom: 1.4rem;
}
</style>