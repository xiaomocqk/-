<template>
  <div id="app">
    <search></search>
    <!-- <recommand></recommand> -->
  </div>
</template>

<script>
import Search from './components/Search.vue'
// import Recommand from './components/recommand.vue'
// import {swiper, swiperSlide} from 'vue-awesome-swiper'
 
export default {
  // name: 'app',
    components:{
      Search/*,
      Recommand*/
    }

}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
