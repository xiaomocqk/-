<template>
	<div>
		<loading v-if="loading"></loading>
		<div v-else>
			<v-title>短评--{{data.subject.title}}</v-title>
			<div class="comment-wrap">
				<comment-list :commentList="data.comments">
					<span></span>
				</comment-list>
			</div>
		</div>
	</div>
</template>

<script>
	import vTitle from '../vTitle/vTitle.vue'
	import Loading from '../Loading/Loading.vue'
	import CommentList from '../CommentList/CommentList.vue'

	const COUNT = 10;//每次请求最多加载20条
	export default {
		data(){
			return {
				title:"nisa",
				loading: true,
				sessionStorage: false,
				data:{}
			}
		},
		components:{
			vTitle,
			Loading,
			CommentList
		},
		created(){
			let url = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count='+COUNT;
			this.$http.jsonp(url)
				.then(response => {
					this.data = response.body;
					// console.log(this.data);
					this.loading = false
				})
				.catch(
					response => console.log(response)
			);

		}
	}
</script>

<style lang="less">
	.comment-wrap{
		padding: 10px;
	}
</style>