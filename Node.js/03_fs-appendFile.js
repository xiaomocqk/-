const fs = require('fs');

let contentText = 'append some data in to this \n';

fs.appendFile('write.txt', contentText, (err) => {
	if (err) throw err;
	console.log('添加成功！')
})