var canvas = {},
	image = {},
	particles = [],
	gridX = 5, //每间隔5px取一次值
	gridY = 5; //每间隔5px取一次值

window.onload = function() {

	canvas.obj = document.getElementById('canvas');
	canvas.ctx = canvas.obj.getContext('2d');

	image.obj = new Image();
	image.obj.src = '1.jpg';

	image.obj.onload = function() {
		canvas.w = canvas.obj.width = image.obj.width; //画布款
		canvas.h = canvas.obj.height = image.obj.height;
		canvas.ctx.drawImage(image.obj, 0, 0); //不是url，而是对象
		canvas.imageData = canvas.ctx.getImageData(0, 0, canvas.w, canvas.h); // 每一个色值占据data数组索引的一个位置，一个像素有个4个值（R、G、B、A）占据数组的4个索引位置。

		calculate();
		draw();

		// 打印信息
		console.log(canvas);
		console.log(image);
		console.log(particles);
	}
}

function calculate() {
	var data = canvas.imageData.data;
	// console.log(canvas.imageData); 首先需要特别清楚数据的存储顺序(方式),以下i,j的单位都是以px为单位的第i行,第j列（从0开始）。
	// 【这个才是难点】其中 (i * imageWidth * 4)计算出来的数值表示,第i行的第0个数据在data数组中的索引,即它之前的所有数据，是前几行的数据
	// i,j都从0开始
	for (var i = 0; i < canvas.h; i += gridY) {
		for (var j = 0; j < canvas.w; j += gridX) {
			var k = i * 4 * canvas.w + 4 * j; // 第i行之前的像素总量=i*canvas.w,数据量就是4倍

			var particle = {
				y: i,
				x: j,
				R: data[k],
				G: data[k + 1],
				B: data[k + 2],
				A: data[k + 3]
			}
			particles.push(particle);
		}
	}
}

// 设置画布
function draw() {
	canvas.ctx.clearRect(0, 0, canvas.w, canvas.h);
	for (var i = 0; i < particles.length; i++) {
		canvas.ctx.fillStyle = 'rgba(' + particles[i].R + ',' + particles[i].G + ',' + particles[i].B + ',' + particles[i].A + ')';
		canvas.ctx.fillRect(particles[i].x, particles[i].y, 2, 2); // 填充的尺寸定位2px * 2px
	}
};