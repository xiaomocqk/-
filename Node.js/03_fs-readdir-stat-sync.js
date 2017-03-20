// 异步读取文件目录
const fs = require('fs');
const path = require('path');

// readdir读取的是url
const travelSync = function(dir, callback) {
	fs.readdirSync(dir).forEach((file) => {
		const pathname = path.join(dir, file);
		if (fs.statSync(pathname).isDirectory()) {
			travelSync(pathname, callback);
		} else {
			callback(pathname);
		}
	});
};

travelSync('tmp/', (pathname) => {
	console.log(pathname)
})