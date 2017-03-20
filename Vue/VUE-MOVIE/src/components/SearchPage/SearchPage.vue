<template>
	<div id="search-page">
		<div class="search-wrap">
			<div 	class="back"
					@click="back"
			>
				<img src="../../assets/back.png" alt="取消">
			</div>
			<input 	type="text"
					placeholder="请输入电影名称"
					v-model="key"
					@keyup.enter="submit"
			>
			<span 	class="go"
					@click="submit"
			>
				搜索
			</span>
		</div>
		<div class="hot-search">
			<h3>热门搜索</h3>
			<div class="hot-result">
				<span 	v-for="item in hotResult"
						@click="filmDetails(item.id)"
				>
					{{item.title}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	const hotCount = 8;//热词个数
	export default {
		data(){
			return {
				hotResult: [],
				key:""
			}
		},
		created(){
			this.hotResult = window.cache.movies.slice(0,hotCount)
		},
		methods:{
			back() {
				this.$router.go(-1)
			},
			filmDetails(id){
				const path = '/filmDetails/'+id;
				this.$router.push({path: path})
			},
			submit() {
				this.$router.push({
					path:'/searchResult',
					query: { name: this.key }
				});
				this.key = '';
			}
		}
	}
</script>

<style lang="less">
	#search-page{
		height: 100%;
		padding: 10px;
		box-sizing: border-box;

		.search-wrap{
			width: 100%;
			display: flex;
			align-items:center;
		}
		.back{
			width: 16px;
			height: 16px;
			margin-right: 10px;
		}
		input {
			flex:1;
			height: 32px;
			border: none;
			border-radius: 16px;
			text-indent: 20px;
		}
		.go{
			padding: 6px 10px;
			margin-left: 6px;
			color: #fff;
			background-color: #df2d2d;
			border-radius: 20px;

		}
		.hot-search {

			h3{
				font-size:18px;
				font-weight: 700;
				line-height: 3
			}
		}
		.hot-result{
			display: flex;
			flex-wrap:wrap;
			span{
				padding: 6px 14px;
				background-color: #fff;
				border-radius: 20px;
				margin-right: 5px;
				margin-bottom: 12px;
				color: #e54847;
			}
		}
	}
</style>