var http = require("http")
var dt = require("./myFirstModule")
var url = require("url")

http.createServer(function(req,res) {
  res.writeHead(200, {
    "content-Type" : "text/html",
    "name" : "shiva"
  });
  var q = url.parse(req.url,true).query;
  var txt = q.year + " " + q.month
  res.write(txt)
  res.write("the data and time cdm now is " + dt.myDateTime() );
  res.end();
}).listen(8089)