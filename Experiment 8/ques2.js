var http = require('http');

http.createServer(function(req, res){
  const inputString = "aaabbbccc";
  const reg = /([a-z])\1+/g;
  const replacement = '$1';
  const result = inputString.replace(reg, replacement);
  res.setHeader('Content-Type', 'text/html');
  res.end(result);
}).listen(1234);