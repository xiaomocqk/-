// 数据源
var data = {
	products: [{
		id: '2016',
		shopName: '阿里巴巴旗舰店',
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
			price: 60.04,
			originalPrice: 125,
			total: 4
		}]
	}, {
		id: '2017',
		shopName: '茵曼旗舰店',
		lists: [{
			link: 'http://www.sogou.com',
			details: '茵曼秋装女装小清新文艺范印花纯棉白衬衫女长袖衬衣秋季打底上衣',
			imgUrl: '',
			attitude: '颜色分类:天蓝色;尺码:M;',
			price: 299.98,
			originalPrice: 403,
			total: 1
		}]
	}]
};

$(function() {	
	// 往data中添加属性以表示数据长度
	data.length = data.products.length + 1;

	// 价格保留两位小数
	Vue.filter('currency', function(value) {
		return value.toFixed(2);
	});

	new Vue({
		el: '#wrapper', //指定作用域
		data: data, //绑定数据来源
		methods: {
			// 逐一勾选的样式切换
			check: function(index1, index2) {
				var e = window.event,
					$this = $(e.currentTarget),
					thisBody = $this.closest('.list-body'),
					thisHeadSelect = thisBody.prev().find('.select'),
					thisBodySelect = thisBody.find('.select'),
					thisBodySelected = null,
					price = data.products[index1].lists[index2].price,
					total = data.products[index1].lists[index2].total;

				// 样式切换
				$this.toggleClass('selected');

				// 是否勾选店铺全选,
				thisBodySelected = thisBody.find('.selected');
				thisBodySelected.length === thisBodySelect.length ? thisHeadSelect.addClass('selected') : thisHeadSelect.removeClass('selected');

				// 是否勾选底部全选
				bottomCheck();

				// 计算数量及金额(没有用计算属性,通过索引index1,index2可以更好取到值)
				calculate();
			},

			// 底部全选的样式切换
			aboveAll: function(e) {
				var allSelects = $('.select'),
					bottomSelect = $(e.currentTarget).children('i');

				bottomSelect.hasClass('selected') ? allSelects.removeClass('selected') : allSelects.addClass('selected');

				// 计算价格和数量
				calculate();
			},

			// 店铺内全选
			shopAll: function(index1) {
				var e = window.event,
					$this = $(e.currentTarget),
					shopSelects = $this.parent().next().find('.select'),
					listArray = data.products[index1].lists;

				$this.hasClass('selected') ? shopSelects.removeClass('selected') : shopSelects.addClass('selected');
				$this.toggleClass('selected');

				// 是否勾选底部全选
				bottomCheck();

				// 计算价格及数量
				calculate();
			}

		}
	});

});

// 是否勾选底部
function bottomCheck() {
	var listHeadSelect = $('.list-head .select'),
		listHeadSelected = $('.list-head .selected'),
		bottomSelect = $('.all-above .select');

	listHeadSelected.length === listHeadSelect.length ? bottomSelect.addClass('selected') : bottomSelect.removeClass('selected');
}
// 计算价格及数量(与在vue实例中的methods对象内利用索引index创建方法相比，省去了各种全选导致的重复问题)
function calculate() {
	var details = $('.list-body .selected').next('.detail'),
		prices = details.find('.per'),
		totals = details.find('.quantity em'),
		x=0,y=0;

	for (var i = 0; i < prices.length; i++) {
		x += parseInt( totals.eq(i).text() );
		y += prices.eq(i).text() * totals.eq(i).text();
	}
	y = y.toFixed(2);
	$('#total').text(x);
	$('#sum').text(y);
}
