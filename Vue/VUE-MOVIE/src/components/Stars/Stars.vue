<template>
	<div class="stars">
		<i v-for="(item,index) in itemClasses" :class="itemClasses[index]"></i>
	</div>
</template>

<script>
	const LEN = 5;//星星个数
	const CLS_ON = 'on';
	const CLS_HALF = 'half';
	const CLS_OFF = 'off';

	export default {
		props:{
			score:{
				type:Number,
				default:0//默认均显示0分星星
			}
		},
		computed:{
			itemClasses() {
				let result = [];
				const floor = Math.floor;
				let n = floor(this.score)/2;
				let starOn = floor(n);
				let starHalf = (n - starOn) === 0 ? 0 : 1;
				
				let starOff = LEN - starOn - starHalf;

				for (let i = 0; i < starOn; i++) {
					result.push('on')
				};
				(starHalf === 1) && result.push('half');
				
				for (var i = 0; i < starOff; i++) {
					result.push('off')
				};

				return result
			}
		}
	}
</script>

<style lang="less">
	.stars{
		display: flex;
		align-items:center;

		i{
			width: 14px;
			height: 14px;
			margin-right: 4px;
			background-size: 10px 10px;
			background-repeat: no-repeat;
		}
		.on{
			background-image: url(star24_on@2x.png);
		}
		.half{
			background-image: url(star24_half@2x.png);
		}
		.off{
			background-image: url(star24_off@2x.png);
		}
	}
</style>