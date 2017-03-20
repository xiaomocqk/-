const fs = require('fs');

const steam = fs.createReadStream('little.txt', 'utf-8');

// data事件可能有多次
steam.on('data', () => {
	console.log('流的数据已经可以读取了')
});

steam.on('end', () => {
	console.log('流结束')
});

steam.on('error', (err) => {
	console.log('ERROR:' + err)
})