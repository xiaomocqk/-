<template>
	<div>
		<loading v-if="loading"></loading>
		<div v-else>
			<v-title>{{ data.name_en + data.name }}</v-title>
			<div class="data-wrap">
				<img :src="data.avatars.medium" :alt="data.alt">
				<div>
					<h3>影星资料</h3>
					<div>{{ data.name}}</div>
					<div>{{ data.name_en}}</div>
					<div>{{ data.gender}}</div>
				</div>
			</div>
			<div class="works">
				<h3>{{data.gender==="女"?"她":"他"}}的代表作品</h3>
				<ul>
					<li class="list"
						v-for="item in data.works"
						@click="filmDetails(item.subject.id)"
					>
						<img :src="item.subject.images.small" :alt="item.subject.alt">
						<div class="list-info">
							<h4>{{ item.subject.title}}</h4>
							<div>{{ item.roles.toString()}}</div>
							<div>{{ item.subject.year }}</div>
							<stars :score="item.subject.rating.average"></stars>
							<div>
								<span>{{item.subject.rating.average}}分</span>
								<span>{{ item.subject.collect_count}}人评论</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import vTitle from '../vTitle/vTitle.vue'
	import Loading from '../Loading/Loading.vue'
	import Stars from '../Stars/Stars.vue'

	export default{
		data() {
			return {
				loading:true
			}
		},
		components:{
			vTitle,
			Loading,
			Stars
		},
		created() {//created只有一次，所以url可以直接const声明
			const url = 'https://api.douban.com/v2/movie/celebrity/' + this.$route.params.id;
			const KEY = 'id'+this.$route.params.id;

			if (KEY in window.cache.actorInfo) {
				this.data = window.cache.actorInfo[KEY];
				this.loading = false;
			}else{
				this.$http.jsonp(url)
					.then(response => {
						this.loading = false;
						window.cache.actorInfo[KEY] = this.data = response.data;
					})
					.catch(
						response => console.log(response)
					)
			};
		},
		methods:{
			filmDetails(id) {
				const path = '/filmDetails/'+id;
				this.$router.push({path: path})
			}
		}
	}
</script>
<style lang="less">
	@box-padding:10px;

	.data-wrap{
		padding: @box-padding;
		display: flex;
		align-items: flex-end;
		color: #fff;
		background-color: #b4b1b1;
		
		> div{
			padding-left: 30px;
			line-height: 2;
			font-size: 18px;
		}
		h3{
			font-size: 26px;
		}
	}
	.works{
		padding: @box-padding;

		h3{
			font-size: 18px;
			line-height: 2;
		}
		img{
			width: 65px;
			height: 100px;
			margin-left: 6px;
		}
		.list{
			display: flex;
			align-items:flex-end;
			border-bottom: 1px solid #d6d3d3;
			padding: 10px 0;

			h4{
				font-size: 14px;
				line-height: 2
			}
		}
		.list-info{
			padding-left: 10px;
			line-height: 1.5;
		}
	}
</style>