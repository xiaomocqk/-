// 动画回收与重新添加（只考虑滚轮向上时）
/*
 * obj:需要移除class的jquery对象
 * className:移除class名称
 */
function AnimationRecycle(obj, className) {
	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop(),
			viewH = $(window).height(),
			iH = obj.height(),
			iTop = obj.offset().top;

		if (scrollTop + viewH > iTop + iH) { // 向下滚动 元素完全进入窗口时
			obj.addClass(className); //默认全部，不需要遍历
		} else if (scrollTop + viewH < iTop) { // 向上滚动 元素完全消失于窗口时
			obj.removeClass(className); //默认全部，不需要遍历
		}
	});
}


$(function() {

	// css3动画结束事件
	var animEnd = 'animationend webkitAnimationEnd';

	/*page1*/
	(function() {
		var URL = require("../images/about/41.jpg");
		
		var newImg = new Image(),
			// data-rel值储存在数组中
			dataRel = [
				$('.page1').attr('data-rel'),
				$('.page1 h1').attr('data-rel'),
				$('.page1 .line').attr('data-rel'),
				$('.page1 .content').attr('data-rel')
			];

		// 首屏图片加载完成后执行动画
		newImg.onload = function() {
			$('.page1 h1').addClass(dataRel[1]);
			$('.page1').addClass(dataRel[0]);
				// 线条、大标题同步进行动画
			$('.page1 .line').addClass(dataRel[2]).on(animEnd, function() {
				$('.page1 p').addClass(dataRel[3]);
			});

		};
		newImg.src = URL;
	})();

	/*page2*/
	(function() {
		var content = $('.page2 .content'),
			iTop = $('.page2').offset().top,
			dataRel = [
				$('.page2 h1').attr('data-rel'),
				$('.page2 .line').attr('data-rel'),
				content.attr('data-rel')
			],
			flag = false;

		$(window).on('scroll', function() {
			var scrollTop = $(this).scrollTop();
			// 页面完全进入视口
			if (scrollTop > iTop) {

				$('.page2 h1').addClass(dataRel[0]);
				$('.page2 .line').addClass(dataRel[1]);
				content.addClass(dataRel[2]);
				// console.log(1);//transitionend触发了多次
				flag = true;

			}
			// 动画回收与重新添加
			if (flag) { //确保屏幕的动画已经执行了
				AnimationRecycle(content, dataRel[2]);
			}
		});
	})();

	/* page3*/
	(function() {
		var content = $('.page3 .content'),
			iTop = $('.page3').offset().top,
			dataRel = [
				$('.page3 .bg').attr('data-rel'),
				$('.page3 h1').attr('data-rel'),
				$('.page3 .line').attr('data-rel'),
				content.attr('data-rel')
			],
			flag = false;

		$(window).on('scroll', function() {
			var scrollTop = $(this).scrollTop();
			if (scrollTop > iTop) {
				$('.page3 .bg').addClass(dataRel[0]);
				$('.page3 h1').addClass(dataRel[1]);
				$('.page3 .line').addClass(dataRel[2]);
				$('.page3 p').addClass(dataRel[3]);
				flag = true;
			}
			// 动画回收与重新添加
			if (flag) { //确保屏幕的动画已经执行了
				$('.page3 p').each(function() {
					AnimationRecycle($(this), dataRel[3]);
				});
			}
		});
	})();
});