(function() {
	var oPage3 = $('.page3'),
		iH = oPage3.height(),
		iTop = oPage3.offset().top; //定值	page3距离文档顶部的高度

	/*与线条和文字相关的变量*/
	var num = 200, // 滚动条提前量,用于线条动画的开始
		len = $('.page3 i').length;

	/*与背景滚动相关的变量*/
	var beforeScrollTop = iTop,
		bgTop = 0,
		delta = 0; //背景图在y轴上偏移量,向下滚动值为正

	$(document).on('scroll', function() {
		var afterScrollTop = $(this).scrollTop();

		// 线条动画的加载时机
		if (afterScrollTop > (iTop - num)) lineTextAnimation();

		// 背景滚动
		if (afterScrollTop > iTop) { //当窗口位于page3及以下的时候触发背景移动
			requestAnimationFrame(function() {//使动画更为流畅
				delta = afterScrollTop - beforeScrollTop;
				// console.log('delta:' + delta);

				bgTop -= delta / 1.5; //被除数的系数值越大，表示背景一次移动的距离越小
				oPage3.css('background-position', '0 ' + bgTop + 'px');

				beforeScrollTop = afterScrollTop;
			})
		}
	});

	//线条与文字的动画
	function lineTextAnimation(i) {
		var index = i || 0;

		$('.page3 i').eq(index).addClass('lineShow').on('webkitTransitionEnd', function() { //过渡结束时回调
			$('.page3 .text').eq(index).slideDown();

			index++;
			if (index === len) return; //停止循环

			lineTextAnimation(index);
		});
	}
})();