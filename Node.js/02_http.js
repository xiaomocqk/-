const http = require('http');
const hostname = '127.0.0.1';
const port = 1101;

http.createServer(function (request, response) {
	response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end('hello world\n');
}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
