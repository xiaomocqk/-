<template>
	<div class="header">
		<div><img class="logo" src="../../assets/logo.png" alt="logo"></div>
		<div>
			<h3>喵眼电影</h3>
			<span class="slogan">查影讯，上喵眼电影就够了！</span>
		</div>
		<input v-model="key" type="text" name="key" id="key" placeholder="请输入电影名称">
	</div>
</template>

<script>
	export default{
		data(){
			return {
				key:''
			}
		}
	}
</script>

<style rel="stylesheet/less" lang="less">
	.header{
		display: flex;
		height: 60px;
	    padding: 10px;
	    box-sizing: border-box;
		align-items:center;

		.logo{
			width: 42px;
			height: 42px;
			margin-right: 10px;
		}
		h3{
			font-weight: 700;
			font-size: 14px;
			margin-bottom: 6px;
		}
		.slogan{
			font-size: 12px;
			color: #999;
		}
		input{
			width: 150px;
			height: 24px;
			border-radius: 6px;
			border: 0;
			text-indent: 10px;
			outline: 0;
			background: #fff;
		}
		>div:nth-child(2){
			flex:1
		}
	}
</style>