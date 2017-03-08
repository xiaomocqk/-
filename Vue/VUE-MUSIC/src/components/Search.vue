<template>
	<div class="search">
		<i></i>
		<input 	type="text"
				placeholder="搜索 歌曲/专辑/歌手"
				v-model="keywords"
		>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				keywords: ''
			}
		}
	}
</script>

<style lang="less">
.search{
	display: flex;
	position: relative;

	i{
		position: absolute;
		left: 20px;
		top: 15px;
		content: "";
		width: 30px;
		height: 30px;
		background: url(../assets/images/icon-search.png) no-repeat;
		background-size: cover;
	}

	input{
		flex-grow:1;
		border-radius: 5px;
		border:0;
		background-color: rgb(238,238,238);
		height: 40px;
		margin: 10px;
		text-indent: 3em;
	}
}
</style>