var http = require('http');

http.createServer(function(req, res){
  res.setHeader('Content-Type', 'text/html');
  const Arr = ['apple', 'banana', 'orange', 'grape'];

  for (var x of Arr) {
    res.write(x + '\n');
  }

  res.end();
}).listen(1234);