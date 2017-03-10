<template>
	<div id="in-theater">
		<spinner v-if="loading"></spinner>
		<ul>
			<li v-for="item in movies">
					<img  :src="item.imageUrl"
								:alt="item.alt"
					>
					<div class="info">
						<h3>
							{{item.title}}
						</h3>
						<stars :score="item.score"></stars>
						<div class="score">{{item.score}}分</div>
						<div class="director">
							<span v-for="director in item.directors">
								导演：
								{{ director.name }}
							</span>
						</div>
						<div class="cast">
							<span v-for="cast in item.casts">
								主演：
								{{cast.name}}
							</span>
						</div>
					</div>
			</li>
		</ul>
		<p 	id="no-more"
				v-if="bottomTips"
		>
			我是有底线的
		</p>
	</div>
</template>

<script>
	import Spinner from './Spinner.vue'
	import Stars from './Stars/Stars.vue'

	export default {
		data() {
			return {
				loading:true,
				bottomTips:true,//底线
				movies:[
					{
						title:"金刚狼3：殊死一站",
						imageUrl: "1.jpg",
						alt:"喵眼",
						score:8.4,
						casts:[{//主演
							name:"休·杰克曼"
						},{
							name:"帕特里克·斯图尔特"
						}],
						directors:[//导演
							{
								name:"詹姆斯·曼高德"
							}
						]

					},
					{
						title:"金刚狼3：殊死一站",
						imageUrl: "1.jpg",
						alt:"喵眼",
						score:8.4,
						casts:[{//主演
							name:"休·杰克曼"
						},{
							name:"帕特里克·斯图尔特"
						}],
						directors:[//导演
							{
								name:"詹姆斯·曼高德"
							}
						]

					},
					{
						title:"金刚狼3：殊死一站",
						imageUrl: "1.jpg",
						alt:"喵眼",
						score:8.4,
						casts:[{//主演
							name:"休·杰克曼"
						},{
							name:"帕特里克·斯图尔特"
						}],
						directors:[//导演
							{
								name:"詹姆斯·曼高德"
							}
						]

					},
				]
			}
		},
		components:{
			Spinner,
			Stars
		},
		mounted() {
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
					.then(function (response){
						console.log(response.bodyText)
					})
					.catch(function (response){
						console.log(response)
					})
		}
	}
</script>

<style lang="less">
	#in-theater{
		padding: 10px 20px 0 20px;

		li{
			display: flex;
			border-bottom: 1px solid #d6d6d6;
			padding: 10px 0;
			align-items:flex-end;
			line-height: 1.5
		}
		h3{
			font-size: 20px;
			line-height: 2
		}
		.info {
			padding-left: 20px;
		}
		.score {
			font-size: 15px;
		}
		.director,.cast{
			font-size: 14px;
			color: #666;
		}
		#no-more{
			text-align: center;
			line-height: 2;
			color: #999;
		}
	}
</style>