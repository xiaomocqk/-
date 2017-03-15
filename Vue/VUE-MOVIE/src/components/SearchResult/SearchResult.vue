<template>
	<div class="search-result">
		<loading v-if="loading"></loading>
		<div v-else>
			<v-head></v-head>
			<h3 class="title">"{{ $route.query.name }}"的搜索结果, 共{{ result.total }}条信息</h3>
			<ul>
				<li v-for="item in result.subjects"
					@click="filmDetails(item.id)"
				>
					<img :src="item.images.small" :alt="item.alt">
					<div class="list-info">
						<h3>{{ item.title}}</h3>
						<stars :score="item.rating.average"></stars>
						<div>{{ item.rating.average}}分({{item.collect_count}})评价</div>
						<div>{{ item.year }}年</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import vHead from '../vHead/vHead.vue'
	import Loading from '../Loading/Loading.vue'
	import Stars from '../Stars/Stars.vue'

	export default{
		data() {
			return {
				loading:true,
				result:[]
			}
		},
		components:{
			vHead,
			Loading,
			Stars
		},
		mounted() {
			const COUNT = 10;
			const QUERY = encodeURI( this.$route.query.name );
			const url = 'https://api.douban.com/v2/movie/search?count='+ COUNT +'&q=' + QUERY;
			const KEY = 'q'+ QUERY;

			if(KEY in window.cache.searchResult){
				this.result = window.cache.searchResult[KEY];
				this.loading = false
			}else{
				this.$http.jsonp(url)
					.then(response => {
						this.loading = false;
						window.cache.searchResult[KEY] = this.result = response.body;
						console.log(response.body)
					})
					.catch(result => console.log(response));
			}
		},
		methods:{
			filmDetails(id){
				const path = '/filmDetails/'+id;
				this.$router.push({path: path})
			}
		}
	}
</script>
<style lang="less">
	.search-result{
		.title{
			text-align: center;
			font-size: 16px;
			font-weight: 700;
			line-height: 2;
			padding: 10px;
		}
		ul{
			padding: 10px;
		}
		li{
			display: flex;
			align-items:center;
			padding: 10px 0;
			border-bottom:1px solid #d6d6d6;
		}
		.list-info{
			line-height: 2;
			padding-left: 20px;
			font-size: 14px;

			h3{
				line-height: 2;
				font-size: 16px;
			}
		}
	}
</style>