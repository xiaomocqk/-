<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-size: 85%;//所有的文件并没有使用rem布局，所以这数值几乎没有什么作用
}

body{
  max-width: 500px;
  min-width: 320px;
  margin:0 auto;
}
#app {
    width: 100%;
    height: 100%;
    overflow: auto;
    font-family: 'FontAwesome', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F8F8F8;
    color: #2c3e50;
}
</style>
