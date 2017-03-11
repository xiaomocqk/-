<template>
	<div id="in-theater">
		<spinner v-if="loading"></spinner>
		<ul>
			<li v-for="item in movies">
				<img 	:src="item.images.small"
							:alt="item.alt"
				>
				<div class="info">
					<h3>
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
		<p 	id="no-more"
				v-if="showEnd"
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
				showEnd:false,//底线
				movies:[]
			}
		},
		components:{
			Spinner,
			Stars
		},
		mounted() {
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
				.then(function (response){
					this.movies = response.body.subjects;
					this.loading = false;
					this.showEnd = true
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