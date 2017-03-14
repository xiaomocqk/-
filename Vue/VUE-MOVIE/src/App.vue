<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
