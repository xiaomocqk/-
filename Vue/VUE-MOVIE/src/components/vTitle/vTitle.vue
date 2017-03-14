<template>
	<div class="title-wrap">
		<header>
			<img src="../../assets/back-ffffff.png"
				 alt="返回"
				 @click="back"
			>
			<h3>
				<slot></slot>
			</h3>
		</header>
		<div class="placeholder"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			back(){
				window.history.go(-1)//或者this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less">
	@back-width:26px;
	@red:#e54847;
	@height:50px;
	
	.title-wrap{
		header{
			height: @height;
			display: flex;
			align-items:center;
			padding: 0 10px;
			background-color: @red;
			width: 100%;
			position: fixed;

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
		.placeholder{
			height: @height;
		}
	}
</style>