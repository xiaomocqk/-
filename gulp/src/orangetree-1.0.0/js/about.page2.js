(function() {
	var iTop = $('.page2').offset().top,
		num = -150; //滚动提前量

	var aSpan = $('.page2 .text span');
	$(document).on('scroll', function() {
		if ($(this).scrollTop() > (iTop + num)) {
			fadeInDownOrder(aSpan);
		}
	});

	function fadeInDownOrder(obj, i) {
		i = i || 0;
		obj.eq(i).addClass('fadeInDown').on('animationend', function() {
			i++;
			if (i === obj.length) return;
			fadeInDownOrder(obj, i);
			// console.log(1)
		})
	}
})();