// 全屏加载结束后
window.onload = function() {
	// css3动画结束事件
	var animEnd = 'animationend webkitAnimationEnd',
		tranEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend',
		dataRel = $('#fullPage').attr('data-rel');

	(function() {
		/*fullPage*/
		$('#fullPage').addClass(dataRel).on(tranEnd, function() { //触发两次xy共两个方向（所有操作在大背景结束下取值）
			// console.log(1);
			// page1
			var arr = [
				$('.page1 h1').attr('data-rel'),
				$('.page1 .line').attr('data-rel')
			];
			$('.page1 h1').addClass(arr[0]);
			$('.page1 .line').addClass(arr[1]);

			// page2
			initPage('.page2');
			// page3
			initPage('.page3');
			// page4
			initPage('.page4');
		});
	})();

	/*首次进入page执行的动画*/
	function initPage(page) {
		var iTop = $(page).offset().top, //当前页的距离顶部的位置
			viewH = $(window).height(),
			height = $(page + ' p').height(), //被添加和移除class元素的高度
			top = $(page + ' p').offset().top, //被添加和移除class元素距离顶部的位置
			arr = [
				$(page + ' h1').attr('data-rel'),
				$(page + ' .line').attr('data-rel'),
				$(page + ' .content').attr('data-rel'),
				$(page + ' .services').attr('data-rel')
			],
			completed = false;

		$(window).on('scroll', function() {
			var scrollTop = $(window).scrollTop();

			//页面刚进入窗口
			if (scrollTop >= iTop) {
				$(page + ' h1').addClass(arr[0]).on(animEnd, function() {
					$(page + ' .line').addClass(arr[1]);
					$(page + ' p').addClass(arr[2]);
					$(page + ' .services').addClass(arr[3]);
					completed = true;
				});
			}

			// 回收与重新添加class
			if (completed) {
				if (scrollTop + viewH > top + height) { // 向下滚动 元素完全进入窗口时
					$(page + ' p').addClass(arr[2]); //默认全部，不需要遍历
				} else if (scrollTop + viewH < top) { // 向上滚动 元素完全消失于窗口时
					$(page + ' p').removeClass(arr[2]); //默认全部，不需要遍历
				}
			}
		});
	}
}