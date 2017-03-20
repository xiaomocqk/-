const fs = require('fs');

const readText = function (pathname) {
	const bin = fs.readFileSync(pathname);

	if (bin[0] ===0xEF && bin[1] ===0xBB && bin[2] === 0xBF) {
		bin =bin.slice(3);
	}
	return bin.toString('utf-8')
}

readText('little.txt');