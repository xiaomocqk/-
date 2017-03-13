import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App.vue'
import InTheater from './components/InTheater/InTheater.vue'
import ComingSoon from './components/ComingSoon/ComingSoon.vue'
import SearchPage from './components/SearchPage/SearchPage.vue'
import FilmDetails from './components/FilmDetails/FilmDetails.vue'
import SmallComment from './components/SmallComment/SmallComment.vue'

Vue.use(VueRouter);		//路由功能
Vue.use(VueResource); 	//类似于ajax请求数据用

// 配置路由
const router = new VueRouter({
	mode: 'history',//使url不带#
	routes: [
		{path: '/inTheater',component: InTheater},
		{path: '/comingSoon',component: ComingSoon},
		{path: '/searchPage',component: SearchPage},
		{path: '/filmDetails/:id',component: FilmDetails},	//【关键】带上id
		{path: '/smallComment/:id', component: SmallComment}
	]
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')