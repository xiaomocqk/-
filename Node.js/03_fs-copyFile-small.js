// 小文件复制
const fs = require('fs');

// from: 被复制的文件路径
// to: 存储文件的目标路径
const copy = function(from, to) {
	fs.writeFileSync(to, fs.readFileSync(from))
};

const main = function(argv) {
	copy(argv[0], argv[1])
};
// 以上程序使用fs.readFileSync从源路径读取文件内容，
// 并使用fs.writeFileSync将文件内容写入目标路径。

// slice返回一个新的数组，
// 如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

// process是一个全局变量，可通过process.argv获得命令行参数。
// 由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，
// 因此第一个命令行参数从argv[2]这个位置开始。
main(process.argv.slice(2));

// 当前目录执行命令行
// E:\Node.js>node 03_fs-copyFile-small.js "tmp/1.jpg" "tmp/2.jpg"