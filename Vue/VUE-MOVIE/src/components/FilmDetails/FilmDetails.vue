<template>
	<div class="film-details">
		<!-- <loading v-if="loading"></loading> -->
		<header>
			<img src="../../assets/back-ffffff.png" alt="返回">
			<h3>{{'扫啊'}}</h3>
		</header>
		<div class="flim-info">
			<img src="./p2432493858.jpg" alt="OOOOO">
			<div>
				<h3>{{"扫啊"}}</h3>
				<stars></stars>
				<div class="film-info-msg">
					<span>{{84}}({{123}}人评分)</span>
					<span>{{123}}</span>
					<span>{{654}}</span>
					<span>{{789}}</span>
					<span>{{453}}</span>
				</div>
			</div>
		</div>
		<div id="container">
			<div class="film-count">
				<span>{{46545}}人想看</span>
				<span>{{1}}人看过</span>
			</div>
			<div class="abstract">{{1231231}}</div>
			<section>
				<h3 class="section-title">演职人员</h3>
				 <ul>
				 	<li>
				 		<img src="" alt="">
				 		<span>{{"拉屎"}}</span>
				 	</li>
				 </ul>
			</section>
			<section>
				<h3 class="section-title">热门短评</h3>
				<stars></stars>
				<span>2017</span>
			</section>
		</div>
	</div>
</template>

<script>
import Loading from "../Loading/Loading.vue"
import Stars from "../Stars/Stars.vue"

	export default {
		data() {
			return {
				loading: true,
				message: {
					title:"你好"
				}
			}
		},
		components:{
			Loading,
			Stars
		}
	}
</script>

<style lang="less">
	@back-width:26px;

	#app{
		background-color: #e5e9f2;
	}
	.film-details{
		header{
			height: 50px;
			display: flex;
			align-items:center;
			padding: 0 10px;
			background-color: #e54847;

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
				font-size: 20px;
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

			span{
				display: block;
				line-height: 1.5
			}
		}
	}
	#container{
		padding: 0 10px;
	}
	.film-count{
		text-align: center;
		padding: 10px 0;

		span{
			display: inline-block;
			padding: 6px 10px;
			border-radius: 4px;
			color: #fff;
			font-size: 14px;
			background-color: #e54847;
			margin: 0 10px;
		}
	}
	.abstract{}
</style>