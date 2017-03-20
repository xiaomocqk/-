// 大文件复制
// 程序拷贝一些小文件没啥问题，但这种一次性把所有文件内容都
// 读取到内存中后再一次性写入磁盘的方式不适合拷贝大文件，
// 内存会爆仓。对于大文件，我们只能读一点写一点，直到完成拷贝。
const fs =require('fs');

const copy = function(from, to){
	fs.createReadStream(from).pipe(fs.createWriteStream(to))
};

const main = function (argv) {
	copy(argv[0],argv[1])
};

main(process.argv.slice(2))


// 以上程序使用fs.createReadStream创建了一个源文件的只读数据流，
// 并使用fs.createWriteStream创建了一个目标文件的只写数据流，
// 并且用pipe方法把两个数据流连接了起来。

// 执行命令行

// E:\Node.js>node 03_fs-copyFile-big.js "tmp/sublime.zip" "tmp/sublime-1.zip"