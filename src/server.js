var express = require('express');
var app = express();
var path=require('path');
var axios=require('axios');
var report=require('./report.js');

app.use(express.static(__dirname + 'www'))
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

var hbs = require('hbs');
var ejs = require('ejs')

var port=3000

app.get( '/', ( req, res ) => {
    report.getData();
    res.sendFile( path.join( __dirname, 'www', 'index.html' ));
});

app.listen(port, () => console.log('listening on localhost:' + port))
