const fs = require('fs');

const rs = fs.createReadStream('little.txt', 'utf-8');

rs.on('data', (chunck) => {
	console.log(chunck)
});

rs.on('end', () => {
	console.log('END')
});

rs.on('error', (err) => {
	console.log('ERROR:' + err)
})