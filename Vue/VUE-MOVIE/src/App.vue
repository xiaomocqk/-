<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() { // 可以在beforeCreate与created之间衡量选其一
    this.$router.push({path:'/filmDetails'})    //自动让url地址由,如 localhost:3000 跳转到 localhost:3000/#/inTheater
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
