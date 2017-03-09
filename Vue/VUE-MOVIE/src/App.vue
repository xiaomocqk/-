<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import vHeader from './components/header/header.vue'
// import Recommand from './components/recommand.vue'
// import {swiper, swiperSlide} from 'vue-awesome-swiper'
 
export default {
    components:{
      vHeader
    }

}
</script>

<style>
html,body{
  height: 100%;
  overflow: hidden;
}
body{
  font-size: 62.5%;
  max-width: 500px;
  min-width: 414px;
  margin:0 auto;
}
#app {
    height: 100%;
    overflow: auto;
    font-family: 'FontAwesome', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E5E9F2;
    color: #2c3e50;
}
</style>
