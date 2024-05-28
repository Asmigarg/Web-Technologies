var http = require('http');

http.createServer(function (request, result) {
    result.writeHead(200, {'Content-Type': 'text/html'});
    result.end('Hello World!');
}).listen(1234);
