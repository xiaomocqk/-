// 依赖services.fadeInUpOrder.js
(function() {

	animationStrat($('.page2'));
	animationStrat($('.page3'));

	// 动画执行时机
	function animationStrat($page) {
		var iTop = $page.offset().top,
			num = -200, //滚动条提前量
			flag = false; //标志动画加载情况

		$(document).on('scroll', function() {
			if (flag) return; //优化性能，防止多次滚动触发

			var scrollTop = $(this).scrollTop();

			if (scrollTop > (iTop + num)) {
				// 公共动画
				fadeInUpOrder([$page.find('h1'), $page.find('.text'), $page.find('.scope div')]);

				$page.find('.text').on('animationend', function() {
					// page2图片动画
					$page.find('.img').addClass('fadeInLeft');
					// page3图片动画
					$page.find('.app img').each(function() {
						$(this).addClass('fadeInRight');
					});
					flag = true;
					// console.log(1)
				})
			}
		})
	}

})();