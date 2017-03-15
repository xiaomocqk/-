<template>
	<div>
		<div class="header">
			<div><img class="logo" src="../../assets/logo.png" alt="logo"></div>
			<div class="header-title">
				<h3>喵眼电影</h3>
				<span class="slogan">看电影，上喵眼</span>
			</div>
			<input type="text"
				@click="goSearchPage"
				v-model.trim="query"
				placeholder="请输入电影名称"
			>
		</div>
	    <!-- vue警告:[虚拟组件]的循环，应该绑定key，且指定一个唯一的值 -->
	    <div class="tab">
	      <router-link
	      	v-for="(tab,index) in items"
	      	class="tab-item"
	        :class="{active: tab.isActive}"
	        :to="tab.linkTo"
	        :key="tab.id"
	      >
	        {{ tab.name }}
	      </router-link>
	    </div>
  </div>
</template>

<script>
	const TAB_ITEMS = [
		{
		  name:'正在热映',
		  id:0,
		  isActive: false,
		  linkTo:'/inTheater'
		},{
		  name:'即将上映',
		  id:1,
		  isActive:false,
		  linkTo:'/comingSoon'
		}
	];

	export default{
		data(){
			return {
				query:'',
				items:TAB_ITEMS
			}
		},
		mounted(){	// 【重点及难点】: 改变tab的active下划线(不适合是使用事件、computed、watch更新时，就需要考虑钩子函数)
			this.items.forEach((item)=>{
				item.isActive = false
			});
			if (this.prop) {
				this.items[this.prop-1].isActive = true	// this.prop接口的值
			}
		},
		props: {	//prop不传值或者0或者传负值时，即没有选中的样式
			prop:{
				type:Number
			}
		},
		methods:{
			goSearchPage() {
				this.$router.push({path:'/searchPage'})
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
			height: 34px;
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
		.header-title{
			flex:1
		}
	}
  .tab{
    display: flex;
    align-items:center;
    text-align: center;
    height: 36px;
    background-color: #df2d2d;

    .tab-item{
      flex:1;
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      line-height: 36px;
      position: relative;
      text-decoration: none;

      &.active:after{
        content: "";
        position: absolute;
        width: 70%;
        height: 1px;
        background-color:#fff;
        bottom: 2px;
        left: 20%;
      }
    }
  }
</style>