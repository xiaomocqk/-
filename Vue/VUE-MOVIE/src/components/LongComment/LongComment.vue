<template>
	<div class="long-comment">
		<loading v-if="loading"></loading>
		<div v-else>
			<v-title>长评--{{ data.subject.title }}</v-title>
			<div class="wrap">
				<ul>
					<li v-for="item in data.reviews">
						<h3 class="item-title">标题：{{ item.title }}</h3>
						<div class="item-head">
							<img 	:src="item.author.avatar"
									:alt="item.author.alt"
							>
							<div>
								<span class="author-name">{{ item.author.name }}</span>
								<stars :score="item.rating.value*2"></stars>
							</div>
							<span class="date">{{ item.updated_at}}</span>
						</div>
						<p>{{ item.summary}}</p>
						<div class="opinion">
							<span>{{ item.useful_count}}人赞同</span>
							<span>{{ item.useless_count }}人反对</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import vTitle from '../vTitle/vTitle.vue'
	import Loading from '../Loading/Loading.vue'
	import Stars from '../Stars/Stars.vue'

	let start = 0;//请求数据的起始索引值
	const COUNT = 10;//一次最多请求20条

	export default{
		data(){
			return {
				loading: true,
				data:{}
			}
		},
		components: {
			vTitle,
			Loading,
			Stars
		},
		created() {
			let url = `https://api.douban.com/v2/movie/subject/${ this.$route.params.id }/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${ start }&count=${ COUNT }&client=something&udid=dddddddddddddddddddddd`;

			this.$http.jsonp(url)
				.then(response => {
					this.loading = false;
					this.data = response.body;
					console.log(this.data)
				})
				.catch(
					response => console.log(response)
			);
		}
	}
</script>

<style lang="less">
	@border-color:#d3d3d3;
	@light-font-color:#999;

	.wrap{
		padding: 10px;
		
		li{
			border-bottom: 1px dashed @border-color;
			padding: 10px 0;

			>p{
				padding: 10px 0;
			}
		}
		.item-title{
			font-size: 14px;
			line-height: 1.5;
			font-weight: 700;
			margin-bottom: 10px;
		}
		.item-head{
			display: flex;
			align-items:flex-end;
			margin-bottom: 10px;

			img{
				border-radius: 50%;
				width: 48px;
				margin: 0 6px;
			}
			> div {
				flex:1;
				
			}
			.stars{
				margin-top: 6px
			}
			.date{
				margin-bottom: 16px;
				color:@light-font-color;
			}
		}
		.author-name{
			color:@light-font-color;
		}
		.opinion {
			text-align: right;

			span{
				margin-right: 10px;
				color: @light-font-color;
			}
		}
	}
</style>