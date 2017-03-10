<template>
	<div class="header">
		<div><img class="logo" src="../../assets/logo.png" alt="logo"></div>
		<div>
			<h3>喵眼电影</h3>
			<span class="slogan">在线选座，热门影讯，爱上看电影</span>
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

<style lang="less">
	.header{
		display: flex;
		height: 60px;
	    padding: 9px 12px;
	    box-sizing: border-box;
		align-items:center;

		.logo{
			width: 42px;
			height: 42px;
			margin-right: 10px;
		}
		h3{
			font-weight: 700;
			font-size: 16px;
			margin-bottom: 6px;
		}
		.slogan{
			font-size: 12px;
			color: #999;
		}
		input{
			width: 120px;
			height: 24px;
			border-radius: 6px;
			border: 0;
			text-indent: 10px;
			outline: 0;
			background: #fff;

			&:-webkit-autofill{	//选中下拉选项时默认的背景
				-webkit-box-shadow: 0 0 0px 1000px #fff inset;
				box-shadow: 0 0 0px 1000px #fff inset;
			}
		}
		>div:nth-child(2){
			flex:1
		}
	}
</style>