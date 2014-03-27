var gzippo = require('gzippo');
var express = require('express');
var app = express();


app.use(gzippo.staticGzip("" + __dirname));
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening in " + port);
