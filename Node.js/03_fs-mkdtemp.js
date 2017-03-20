// 创建临时目录
const fs = require('fs');
const path = require('path');

// 新建的临时目录的父目录tmp
const tmpDir = 'tmp';

// 指定一个目录 /tmp，如果目的是要在 /tmp 里创建一个临时目录，则 prefix 必须 以一个指定平台的路径分隔符（require('path').sep）结尾。
fs.mkdtemp(tmpDir + path.sep, (err, folder) => {
	if (err) throw err;
	console.log(folder)
})