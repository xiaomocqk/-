// （原生）自定义进度条(利用测试网速的方法)

//前4个属性值需 自定义

var progressBar = {

	url: "../images/about/07.jpg", //用于测试的图片路径

	fileSize: 128, // 用于测试的图片的大小，单位k

	pageSize: 1024, //页面大小。假设为1M=1024k,即加载了1M则进度条达到100%

	speed: 0, //当前网速,计算单位k/s

	speedTest: function(cb) { //测试网速,接收一个cb回调函数
		var _self = this,
			oImg = new Image(),
			t0 = new Date();

		oImg.src = _self.url;

		oImg.onload = function() {
			var t1 = new Date();

			_self.speed = Math.round(_self.fileSize * 1000) / (t1 - t0);

			cb && cb();

			// console.log(t1-t0);//毫秒数
			// document.title = _self.speed; // 字节/毫秒 = k/s
		}

	}
};

//添加进度条至dom
(function() {
	var newBar = document.createElement('div');
	newBar.id = 'progressBar';
	document.body.appendChild(newBar);

	//引入并执行测试网速函数，并显示进度过程
	progressBar.speedTest(showProgress);

	function showProgress() {
		var duration = progressBar.pageSize / progressBar.speed; //进度条进行时间，单位秒

		newBar.style.transitionDuration = duration + 's';
		newBar.className = 'progress';

		if (duration < 0.1) { //防止时间太短，无法正常触发transitionend事件(transition与GUI渲染频率有关)
			newBar.style.width = '100%';
			setTimeout(function() {
				newBar.style.display = 'none';
				return;
			}, 100);
		};

		newBar.addEventListener('webkitTransitionEnd', function() {
			this.style.display = 'none';
		}, false)
	}
})();