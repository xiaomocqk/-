<template>
	<div class="film-details">
		<loading v-if="loading"></loading>
		<div v-else>
			<v-title>{{message.title}}</v-title>
			<div class="flim-info">
				<img :src="message.images.medium" :alt="message.alt">
				<div>
					<h3>
						{{message.title}}
					</h3>
					<stars :score="message.rating.average"></stars>
					<div class="film-info-msg">
						<div>
							{{message.rating.average}}分
							({{message.collect_count}}人评分)
						</div>
						<div>
							{{message.year}}年
						</div>

						<!-- 直接使用toString方法，而不用遍历再join方法 -->
						<span>
							{{ message.genres.toString() }}
						</span>
						<div>
							<span>
								{{ message.countries.toString() }}
							</span>
						</div>
						<div>
							<span 	v-for="item in message.durations"
									v-if="item.indexOf('中国') != -1"
							>
								{{item}}
							</span>
						</div>
						<div>
							<div 	v-for="item in message.pubdates"
									v-if="item.indexOf('中国') != -1"
							>
								{{item}}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="container">
				<div class="film-count">
					<span>{{message.wish_count}}人想看</span>
					<span>{{message.reviews_count}}人看过</span>
				</div>
				<div class="abstract">{{message.summary}}</div>
				<section class="actors">
					<h3 class="section-title">演职人员</h3>
					 <ul>
					 	<li v-for="item in message.directors">
					 		<img 	:src="item.avatars.small"
					 				:alt="item.alt"
					 		>
					 		<span>
					 			{{item.name}}[导演]
					 		</span>
					 	</li>
					 	<li v-for="item in message.casts">
					 		<img 	:src="item.avatars.small"
					 				:alt="item.alt"
					 		>
					 		<span>
					 			{{item.name}}
					 		</span>
					 	</li>
					 </ul>
				</section>
				<section class="small-comment">
					<h3 class="section-title">热门短评</h3>
					<comment-list :commentList="message.popular_comments"></comment-list>
				</section>
				<div class="get-more">
					<div @click="goSmallComment(message.id)">查看全部短评</div>
					<div @click="goLongComment(message.id)">查看全部影评</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Loading from "../Loading/Loading.vue"
	import Stars from "../Stars/Stars.vue"
	import vTitle from "../vTitle/vTitle.vue"
	import CommentList from "../CommentList/CommentList.vue"

	const CURRENT_CITY = "厦门";

	export default {
		data() {
			return {
				loading: true,
				message: {}
			}
		},
		components:{
			Loading,
			Stars,
			vTitle,
			CommentList
		},
		created(){
			const KEY = 'id' + this.$route.params.id;//不是$router
			let url = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city='+encodeURI(CURRENT_CITY);

			// 重点是利用 in 判断和 || 赋值
			window.cache.filmDetails = window.cache.filmDetails || {};	// 缓存
			let items = window.cache.filmDetails;

			if (KEY in items) {
				this.message = items[KEY];
				this.loading = false
			} else {
				this.$http.jsonp(url)
					.then(response => {
						const result = response.body;
						// 缓存以{id001:{},id002:{}}的方式储存
						window.cache.filmDetails[KEY] = this.message = result;
						this.loading = false;
					})
					.catch( response => console.log(response) );
			}
		},
		methods:{
			goSmallComment(id){
				const path = '/smallComment/'+id;
				this.$router.push({path: path})
			},
			goLongComment(id){
				const path = '/longComment/'+id;
				this.$router.push({path:path});
			}
		}
	}
</script>

<style lang="less">
	@back-width:26px;
	@actor-img-width:70px;
	@red:#e54847;

	#app{
		background-color: #e5e9f2;
		overflow: scroll;
		// padding-bottom: 2000px;
	}
	.film-details{
		header{
			height: 50px;
			display: flex;
			align-items:center;
			padding: 0 10px;
			background-color: @red;

			img{
				height: @back-width;
			}
			h3{
				flex:1;
				text-align: center;
				margin-left: -@back-width;
				font-size: 20px;
				color: #fff;
			}
		}
		.flim-info{
			height: 178px;
			background-color: #b4b1b1;
			padding: 15px;
			display: flex;

			>div{
				flex:1;
				padding-left: 10px;
			}
			h3{
				font-size: 18px;
				line-height: 1.5
			}
			img{
				width: 102px;
				height: 143px;
				border: 1px solid #fff;
			}
		}
		.stars{
			margin: 4px 0;
		}
		.film-info-msg{
			color: #6b6868;
			line-height: 1.5
		}
	}
	#container{
		padding: 0 10px;
	}

	.abstract{
		line-height: 1.8;
		text-indent: 2em;
		margin-top: 10px;
		font-size: 14px;
	}

	.film-count{
		text-align: center;
		padding: 10px 0;

		span{
			display: inline-block;
			padding: 8px 16px;
			border-radius: 4px;
			color: #fff;
			font-size: 14px;
			background-color: @red;
			margin: 0 10px;
		}
	}
	section{
		padding: 10px 0
	}
	.section-title{
		font-size: 15px;
		font-weight: 700;
		margin-bottom: 4px;
		line-height: 2.5
	}
	// 演职人员
	.actors{
		ul{
			display: flex;
			overflow-x: auto;
		}
		li{
			width: @actor-img-width;
			margin-right: 6px;
		}
		span{
			display: block;
			width: @actor-img-width;
			text-overflow:ellipsis;
			overflow: hidden;
			white-space: nowrap;
			line-height: 2
		}
	}
	
	// 短评
	@border-color:#d3d3d3;
	@height:40px;

	.small-comment{
		h3{
			border-bottom: 1px solid @border-color;
		}/* 
		li {
			border-bottom: 1px dashed @border-color;
			padding: 10px 0;
		}
		img{
			border-radius: 50%;
			margin-right: 10px;
			padding: 10px 0;
		}
		.rating{
			overflow: hidden;
		
			.stars {
				float: left;
			}
			span {
				line-height: 1.8;
			}
		}
		p{
			padding: 10px 0;
			line-height: 1.8
		}
		.user-info{
			display: flex;
			align-items:center
		} */
	}
	.get-more {
		padding: 20px 0;

		div{
			height: @height;
			border: 1px solid @border-color;
			margin-bottom: 6px;
			font-size: 12px;
			color: @red;
			text-align: center;
			line-height: @height;
			border-radius: 4px;
		}
	}
</style>