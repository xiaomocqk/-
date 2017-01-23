// 首屏动画在dom加载后执行
(function() {
	(function() {
		var isComplete = new Image();
		// 首屏背景图片加载完毕后执行动画
		isComplete.onload = function() {
			// alert('可以加载动画了');
			var delay = 200; //第一行播放的初始延迟时间
			$('.page1 .text span').each(function() {
				$(this).addClass('fadeInUp').css('animationDelay', delay + 'ms');
				delay += 400; //播放时间的间隔
			});

			$('.flash-tree').addClass('flash'); //树形logo闪烁播放
		};
		
		isComplete.src = '../images/about/13.jpg';

	})();
})();