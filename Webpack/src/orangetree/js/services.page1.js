// 首屏动画在dom加载后执行
$(function() {
	(function() {
		var isComplete = new Image();
		// 图片加载后执行
		isComplete.onload = function() {
			fadeInUpOrder([$('.page1 h1'), $('.gradient-text'), $('.page1 .scope div')]);
			$('.gradient-text').on('animationend', function() {
				$('.page1 .img').addClass('fadeInUp');
			});
		};
		isComplete.src = '../images/services/response.jpg';
	})();
})