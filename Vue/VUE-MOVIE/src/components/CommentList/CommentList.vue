<template>
	<ul class="v-comment-list">
		<li v-for="item in commentList"
			:key="item.id"
		>
			<div class="rating">
				<stars :score="item.rating.value*2"></stars>
				<span>{{ item.created_at }}</span>
			</div>
			<p>{{ item.content }}</p>
			<div class="user-info">
				<img 	:src="item.author.avatar"
						:alt="item.author.alt"
				>
				<span>{{ item.author.name }}</span>
				<span class="agree-count">
					<slot name="agreeCount">
						{{ item.useful_count }}人赞同
					</slot>
				</span>
			</div>
		</li>
	</ul>
</template>

<script>
	import Stars from '../Stars/Stars.vue'

	export default{
		data(){
			return {}
		},
		components:{
			Stars
		},
		props:{
			commentList:{
				required:true
			}
		}
	}
</script>

<style lang="less">
	@border-color:#d3d3d3;
	@light-font-color:#999;

	.v-comment-list{
		
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
				color: @light-font-color;
			}
		}
		p{
			padding: 10px 0;
			line-height: 1.8
		}
		.user-info{
			display: flex;
			align-items:center;
			color: @light-font-color;
		}
		.agree-count{
			flex:1;
			text-align: right;
			color: @light-font-color;
		}
	}
</style>