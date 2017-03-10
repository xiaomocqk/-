<template>
  <div id="app">
    <v-header></v-header>
    <!-- <search-page></search-page> -->
    <div class="tab">
      <div  v-for="(item,index) in items"
            :class="{active:item.isActive}"
            @click="selected(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <in-theater></in-theater>
  </div>
</template>

<script>
// import Vue from 'vue'
import vHeader from './components/Header/Header.vue'
// import SearchPage from './components/SearchPage/SearchPage.vue'
import InTheater from './components/InTheater.vue'

const TAB_ITEMS = [{
  name:'正在热映',
  isActive: true
},{
  name:'即将上映',
  isActive:false
}];

export default {
  components:{
    vHeader,
    // SearchPage
    InTheater,
    // Spinner
  },
  data(){
    return {
      items:TAB_ITEMS
    }
  },
  methods:{
    selected(index){
      let items = this.items;
      items.forEach(function(item){
        item.isActive = false;
      });
      items[index].isActive = true
    }
  }

}
</script>



<style lang="less">
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
    background-color: #F8F8F8;
    color: #2c3e50;

    .tab{
      display: flex;
      align-items:center;
      text-align: center;
      height: 36px;
      background-color: #df2d2d;

      div{
        flex:1;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;
        position: relative;

        &.active:after{
          content: "";
          position: absolute;
          width: 70%;
          height: 1px;
          background-color:#fff;
          bottom: 2px;
          left: 20%;
        }
      }
    }
}
</style>
