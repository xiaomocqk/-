<template>
	<header>
		<img src="../../assets/back-ffffff.png"
			 alt="返回"
			 @click="back"
		>
		<h3>
			<slot></slot>
			{{title}}
		</h3>
	</header>
</template>

<script>
	export default{
		data(){
			return {

			}
		},
		props:{
			title:{
				type: String
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

	header{
		height: 50px;
		display: flex;
		align-items:center;
		padding: 0 10px;
		background-color: @red;

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
</style>