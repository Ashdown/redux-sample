var express = require('express');
var app = express();
var path = require('path');

require('./dev-server')

//html endpoint

app.use('/', express.static(path.join(__dirname, 'public')));

//json endpoint

app.get('/test', function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});

app.listen(4000);

