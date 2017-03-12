<template>
	<div id="in-theater">
		<v-head></v-head>
		<loading v-if="loading"></loading>
		<ul>
			<li v-for="item in movies">
				<img 	:src="item.images.small"
						:alt="item.alt"
				>
				<div class="info">
					<h3 class="film-title">
						{{item.title}}
					</h3>
					<stars :score="item.rating.average"
					>
					</stars>
					<div class="score">
						{{item.rating.average}}分
					</div>
					<div class="director">
						导演：
						<span v-for="director in item.directors"
									class="mr5"
						>
							{{ director.name }}
						</span>
					</div>
					<div class="cast">
						主演：
						<span v-for="cast in item.casts"
									class="mr5"
						>
							{{cast.name}}
						</span>
					</div>
				</div>
			</li>
		</ul>
		<p 	id="show-end"
			v-if="showEnd"
		>
			已经到底了
		</p>
	</div>
</template>

<script>
	import VHead from '../Header/Header.vue'
	import Loading from '../Loading/Loading.vue'
	import Stars from '../Stars/Stars.vue'

	const CURRENT_CITY = "厦门";
	const DEFAULT_COUNT = 5;		//一次最多请求5条(用于分页)
	let start = 0;		//数据请求的起始位置(用于分页)

	export default {
		data() {
			return {
				loading:true,
				city: CURRENT_CITY,
				showEnd:false,//底线
				movies:[]
			}
		},
		components:{
			VHead,
			Loading,
			Stars
		},
		mounted() {
			// https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd
			let url = 'https://api.douban.com/v2/movie/in_theaters?count='+ DEFAULT_COUNT +'&city='+ encodeURI(this.city);
			this.$http.jsonp(url)
				.then((response) => {
					this.movies = response.body.subjects;
					this.loading = false;
					this.showEnd = true
				})
				.catch((response) => {
					console.log(response)
				}
			)
		}
	}
</script>

<style lang="less">
	#in-theater{
		ul{
			padding: 0 20px;
		}
		li{
			display: flex;
			border-bottom: 1px solid #d6d6d6;
			padding: 10px 0;
			align-items:flex-end;
			line-height: 1.5;

			img{
				width: 65px;
				height: 100px;
			}
		}
		.info {
			padding-left: 20px;
			overflow: hidden;
		}
		.film-title{
			font-size: 20px;
			line-height: 2;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
		.score {
			font-size: 15px;
		}
		.director,.cast{
			font-size: 14px;
			color: #666;

			span{
				margin-right: 10px;
			}
		}
		#show-end{
			text-align: center;
			line-height: 2;
			color: #999;
		}
	}
</style>