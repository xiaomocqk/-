<template>
	<div class="recommand">
		<div class="swiper-container">
			<swiper :options="swiperOption">
			    <swiper-slide>
			        
			    </swiper-slide>
			    <swiper-slide>
			        
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
		    </swiper>
		</div>
	</div>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'

	export default {
		components:{
			swiper,
			swiperSlide
		},
		data(){
			return {
				swiperOption:{
					pagination: '.swiper-pagination',
			        paginationClickable: true,
			        autoplay: 1000,
				}
			}
		}
	}

</script>
<style lang="less"></style>