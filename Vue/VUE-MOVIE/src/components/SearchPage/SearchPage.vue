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
					v-model="key">
			<span class="go">搜索</span>
		</div>
		<div class="hot-search">
			<h3>热门搜索</h3>
			<div class="hot-result">
				<span v-for="(item,index) in hotResult"
							@click="showInfo(index)"
				>
					{{item}}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				hotResult: [
					"金刚狼3",
					"一条狗的使命",
					"生化危机·终章",
					"乐高蝙蝠侠",
					"爱乐之城",
					"欢乐好声音"
				],
				key:""
			}
		},
		methods:{
			back() {
				this.$router.go(-1)
			},
			showInfo(index) {
				alert(this.hotResult[index])
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
			text-indent: 10px;
		}
		.go{
			padding: 0 5px;
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
				padding: 4px 6px;
				background-color: #fff;
				border-radius: 10px;
				margin-right: 5px;
				margin-bottom: 8px;
				color: #e54847;
			}
		}
	}
</style>