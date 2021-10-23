var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'test/plain'});
res.end('Hello World');
console.log('App started at 5050');
})listen(5050);