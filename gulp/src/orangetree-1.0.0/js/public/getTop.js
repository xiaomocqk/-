// 置顶
// 依赖于jquery
(function() {
	var getTop = $('<a>');

	getTop.attr({
		id: "getTop",
		href: "javascript:void(0);",
	}).appendTo('body');

	var iTop = 300 //设置显示的临界值

	$(document).on('scroll', function() {
		if ($(this).scrollTop() < iTop) {
			getTop.addClass('slideOutRight').removeClass('slideInLeft');
		} else {
			if (getTop.hasClass('slideInLeft')) return; //防止多次添加影响性能
			getTop.addClass('slideInLeft').removeClass('slideOutRight');
			// console.log(1)
		}
	})
	
	getTop.on('click', function up() {
		var scrollTop = $(document).scrollTop();
		scrollTop -= 100
		$(document).scrollTop(scrollTop);
		if (scrollTop <= 0) {
			$(document).scrollTop(0);
			return;
		};
		// setTimeout(up, 30);
		requestAnimationFrame(up);
		// console.log(1)
	})
})();