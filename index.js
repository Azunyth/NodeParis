var util = require('util');
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('qs');

var server = http.createServer(function(req, res){
  var urlDtl = url.parse(req.url, true);
  var pathname = urlDtl.pathname;

  if(pathname == "/" || pathname == "/index"){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var fileStr = fs.createReadStream('views/index.html', 'utf8');
    fileStr.pipe(res);

    fs.readFile('views/index.html', 'utf8', function(err, data){
      res.end(data);
    });
  }else if(pathname == "/contact") {

    if(req.method == 'POST') {

      var postData = "";

      req.on('data', function(chunck){
        postData += chunck;
      });

      req.on('end', function(){
        var data = qs.parse(postData);
        console.log(data.firstname);
      });

    }

    fs.readFile('views/contact.html', 'utf8', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }else if(pathname == "/public/dist/css/main.css") {
    fs.readFile('public/dist/css/main.css', 'utf8', function(err, data){
      res.writeHead(200);
      res.end(data);
    });
  }else {
    fs.readFile('views/404.html', 'utf8', function(err, data){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});

server.listen(1337, function(){
  console.log('server is running');
});
