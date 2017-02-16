// 数据源
var data = {
	products: [{
		id: '2016',
		shopName: '雅雅旗舰店',
		lists: [{
			link: 'http://www.baidu.com',
			details: '12.14晚8点166元韩都衣舍2016女装冬装女装冬装女装新款背带休闲裤JW6684筱',
			imgUrl: '',
			attitude: '颜色:藏蓝色;尺码:S;',
			price: 139.98,
			originalPrice: 259,
			total: 1
		}, {
			link: 'http://www.qq.com',
			details: '俄罗斯果汁 石榴汁原装进口喜爱100%果汁饮料950ml多口味4盒包邮',
			imgUrl: '',
			attitude: '口味:石榴汁;',
			price: 60,
			originalPrice: 125,
			total: 4
		}]
	}, {
		id: '2017',
		shopName: '牛牛旗舰店',
		lists: [{
			link: 'http://www.sogou.com',
			details: '萍萍秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
			imgUrl: '',
			attitude: '颜色分类:天蓝色;尺码:M;',
			price: 299.98,
			originalPrice: 403,
			total: 1
		}]
	}, {
		id: '2018',
		shopName: '妞妞旗舰店',
		lists: [{
			link: 'http://www.sogou.com',
			details: '萍萍秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
			imgUrl: '',
			attitude: '颜色分类:天蓝色;尺码:M;',
			price: 599.98,
			originalPrice: 703,
			total: 2
		}, {
			link: 'http://www.qq.com',
			details: '萍萍秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
			imgUrl: '',
			attitude: '颜色分类:天蓝色;尺码:M;',
			price: 60.04,
			originalPrice: 125,
			total: 4
		}]
	}]
};

data.shopLength = 0; // 店铺个数
data.goodLength = 0; // 商品条数

data.shopState = []; 	// 店铺状态
data.goodState = []; 	// 商品状态
data.allState = false;	// 全选状态

data.count = 0; // 选中商品的数量
data.total = 0; // 选中商品的总价

/** 
 * 注意: 
 * 只要有涉及到组件的数据更新，都必须用数组的splice()方法或者vue提供的Vue.set()或者vm.$set()方法去更改数据 
*/

Vue.component('list', {
	template: '\
        <ul class="list">\
        	<li>店铺: {{shopState}}</li>\
        	<li>商品: {{goodState}}</li>\
            <li class="block"\
                v-for="(item, indexA) in products"\
            >\
                <div class="list-head">\
                    <i class="select shop-select"\
                        @click="changeShopState(indexA)"\
                        :class="{selected:shopState[indexA]}"\
                    ></i>\
                    <a class="shop" href="">{{ item.shopName }}</a>\
                    <span class="shop-edit">编辑</span>\
                </div>\
                <ol class="list-body">\
                    <li\
                        v-for="(aLi, indexB) in item.lists"\
                    >\
                        <i class="select product-select"\
                            @click="changeGoodState(indexA,indexB)"\
                            :class="{selected:goodState[indexA][indexB]}"\
                        ></i>\
                        <a class="detail"\
                            :href="aLi.link"\
                        >\
                            <div class="product-img"><img src="" alt=""></div>\
                            <div class="info">\
                                <strong>\
                                    {{ aLi.details }}\
                                </strong>\
                                <span class="info-attr">\
                                    {{ aLi.attitude }}\
                                </span>\
                                <div class="price clearfix">\
                                    <span>¥ <em class="per">\
                                        {{ aLi.price | currency }}\
                                    </em>&nbsp;</span>\
                                    <small>¥ <em>\
                                        {{ aLi.originalPrice | currency }}\
                                    </em></small>\
                                    <span class="quantity">&times;<em>\
                                        {{ aLi.total }}\
                                    </em></span>\
                                </div>\
                            </div>\
                        </a>\
                    </li>\
                </ol>\
            </li>\
        </ul>\
    ',
	data() {
		return data // 数据源
	},

	methods: {
		changeShopState: function(indexA) {
			var isBoolean = !this.shopState[indexA];

			this.shopState.splice(indexA, 1, isBoolean); 				// 店铺状态.在组件修改中如果要更新视图，就必须用Vue.set()方法或者是数组的原生方法

			for (var i = 0; i < this.goodState[indexA].length; i++) {
				// this.goodState[indexA][i] = isBoolean ? true : false;	// 同步更新当前店铺下商品状态。也需要更新状态,此方法无法触发价格和总金额的重计算
				this.goodState[indexA].splice(i,1,isBoolean ? true : false);
			};

			// 更新全选状态
			this.fn();
		},
		
		changeGoodState: function(indexA,indexB) {
			var currentGoodStateArray = this.goodState[indexA];
			var isBoolean = !currentGoodStateArray[indexB];

			currentGoodStateArray.splice(indexB,1,isBoolean);			// 商品状态更新

			for (var i = 0; i < currentGoodStateArray.length; i++) {
				if (!currentGoodStateArray[i]) {
					this.shopState[indexA] = false;						// 当发现一个未勾选时复制false并结束循环
					break;
				}else{
					this.shopState[indexA] = true;
				}
			};
			// 更新全选状态
			this.fn()
		},
		
		// 全选状态
		// 此函数不用于绑定事件,仅仅作为封装后的函数提供该组件的methods中提供调用
		fn:function(){
			for (var i = 0; i < this.shopState.length; i++) {
				if (!this.shopState[i]) {
					this.allState = false;
					break
				}else{
					this.allState = true;
				}
			}
		}
	},

	// 计算属性
	computed: {
	},
	watch: {}
});

// 注册全局的过滤器
Vue.filter('currency', function(value) {
	return value.toFixed(2); // 千分位四舍五入
})

new Vue({
	el: '#app',
	data: data,

	// 方法
	methods: {
		// 底部全选的样式切换
		changeAllState: function() {
			this.allState = !this.allState;
			for (var i = 0; i < this.shopState.length; i++) {
				// 店铺状态
				// this.shopState[i] = this.allState
				this.shopState.splice(i,1,this.allState);

				// 商品状态
				for (var j = 0; j < this.goodState[i].length; j++) {
					this.goodState[i].splice(j,1,this.allState)
				}
			}
		}
	},

	// 计算属性
	computed: {
		init: function() {
			var L = 0;
			var arr = [];

			for (var i = 0; i < this.products.length; i++) {
				var listLength = this.products[i].lists.length;
				L += listLength;
				arr.push(new Array(listLength))
			};

			this.goodLength = L; // 修正数据数量
			this.shopState = new Array(i); // 添加店铺状态[null,null,null,...]
			this.goodState = arr; // 添加商品状态[[null,null],[null],...]

			return L

		},
		summary:function(){
			var count = 0;
			var total = 0;
			for (var i = 0; i < this.goodState.length; i++) {
				for (var j = 0; j < this.goodState[i].length; j++) {
					var current = this.products[i].lists[j];
					// 总数量+总金额
					if (this.goodState[i][j]) {
						count += current.total;
						total += current.total*current.price
					};
				};
			};

			return {count:count,total:total}
		}
	}
});