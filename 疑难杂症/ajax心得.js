$(function(){
	var scroll = $(window).scrollTop(),
		docHeight = $(document).height(),
		winHeight = $(window).height(),
		n = 0;

	// 触发ajax的条件(通用)
	if( scroll > docHeight - winHeight ) {
		// console.log("到底了！")
		if (++n < 9) {
			loadData( $ul, n )
		}else {
			alert("没数据了！")
		}
	}
})


// 事先将ajax封装,方便调用
// $ele一般表示ul
// n表示第n次加载
function loadData( $ele, n) {
	$.ajax({
		url: '/path/to/file',
		success: function() {
			// 令json格式为:[{},{},{}]
			// each可以这样写
			// 可以利用join方法，字符串拼接将显得更清晰
			$.each(data, function(i, item) {
				str += [
					'<li>',
					'<a href="' + item.URL + '">',
					'<strong>' + item.productDetails + '</strong>',
					'</a>',
					'</li>'
				].join('')
			});

			$ele.append(str);
		},
		error: function() {}
	});
};