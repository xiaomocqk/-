import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App.vue'
import InTheater from './components/InTheater/InTheater.vue'
import ComingSoon from './components/ComingSoon/ComingSoon.vue'
import SearchPage from './components/SearchPage/SearchPage.vue'
import FilmDetails from './components/FilmDetails/FilmDetails.vue'
import SmallComment from './components/SmallComment/SmallComment.vue'
import LongComment from './components/LongComment/LongComment.vue'
import ActorInfo from './components/ActorInfo/ActorInfo.vue'
import SearchResult from './components/SearchResult/SearchResult.vue'

Vue.use(VueRouter);		//路由功能
Vue.use(VueResource); 	//类似于ajax请求数据用

// 配置路由
const router = new VueRouter({
	// mode: 'history',//使url不带#。适用于开发模式，生产模式下不能这样做，否则其他子页面刷新将无法找到网页
	routes: [
		//重定向【如果再App.vue中的created使用push的方法改变路由
		// 那么在任何子页面刷新，都将会回到首页
		// 但是重定向就不存在这种问题，也是很关键的一步】
		{path: '/', redirect: '/inTheater'},
		{path: '/inTheater',component: InTheater},
		{path: '/comingSoon',component: ComingSoon},
		{path: '/searchPage',component: SearchPage},
		{path: '/filmDetails/:id',component: FilmDetails},	//【关键】带上id
		{path: '/smallComment/:id', component: SmallComment},
		{path: '/longComment/:id', component: LongComment},
		{path: '/actorInfo/:id', component: ActorInfo},
		{path: '/searchResult', component: SearchResult},
	]
});

//自定义命名空间。所有子页面组件公用的缓存地址
window.cache = {
	CURRENT_CITY: "厦门",
	movies:[],//正在热映
	commingSoon: [],//即将上映
	filmDetails:{},//电影详情简介
	actorInfo: {},//影星资料
	searchResult: {}//搜索结果
};

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')