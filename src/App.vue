<template>
  <div id="app">
    <!-- 声明路由连接 -->
    <div><router-link to="/discover">发现音乐</router-link></div>
    <div><router-link to="/my">我的音乐</router-link></div>
    <div><router-link to="/friend">关注</router-link></div>
    <div><router-link to="/showproduct">商品展示</router-link></div>
    <!-- 声明标签占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: { 

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
