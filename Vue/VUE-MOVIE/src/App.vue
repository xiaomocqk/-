<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    // 可以在beforeCreate与created之间衡量选其一
    // 自动让url地址由,如 localhost:3000 跳转到 localhost:3000/#/inTheater
    // 目的是在其他子路由页面刷新时，可以跳转到首页，防止例如<link>标签内到css文件路径，
    // 以当前路由的组件所在的目录问根目录，导致文件404
    // 所以最好直接把reset.css直接写成内联样式
    this.$router.push({path:'/inTheater'})
    // this.$router.push({path:'/smallComment/6873143'})
  }
}
</script>

<style>
html,body{
  height: 100%;
  overflow: hidden;
  font-size: 62.5%;
}

body{
  max-width: 500px;
  min-width: 320px;
  margin:0 auto;
}
#app {
    height: 100%;
    overflow: auto;
    font-family: 'FontAwesome', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F8F8;
    color: #2c3e50;
}
</style>
