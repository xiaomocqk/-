<template>
	<div>
		<loading v-if="loading"></loading>
		<div>
			<v-title :title="data.title">短评--</v-title>
		</div>
	</div>
</template>

<script>
	import vTitle from "../vTitle/vTitle.vue"
	import Loading from "../Loading/Loading.vue"

	const COUNT = 20;//每次请求最多加载20条
	export default {
		data(){
			return {
				title:"nisa",
				loading: true,
				data:{}
			}
		},
		components:{
			vTitle,
			Loading
		},
		created(){
			let url = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count='+COUNT;
			this.$http.jsonp(url)
				.then(response => {
					this.data = response.body;
					this.loading = false
				})

		}
	}
</script>

<style lang="less"></style>