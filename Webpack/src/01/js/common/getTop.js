// 置顶
// 依赖于jquery
$(function(){
	(function() {
	var moveA = 0,
		// dataImg = $('#getTop img').attr('data-img'),
		min = 100; //隐藏临界值

	// $('#getTop img').attr('src', dataImg);

	
	$(window).on('scroll', function() {
		var moveB = $(this).scrollTop();
		if (moveB <= min) {
			$('#getTop').hide();
			return false;
		}
		if (moveB - moveA > 0) {
			$('#getTop').hide();
		} else {
			$('#getTop').show();
		}
		moveA = moveB;
	})

	$('#getTop').tap(function up() {
		var scrollTop = $(window).scrollTop();
		scrollTop -= 100;
		$(window).scrollTop(scrollTop);
		if (scrollTop <= 0) {
			$(window).scrollTop(0);
			return;
		};
		requestAnimationFrame(up);
	})
})();
})