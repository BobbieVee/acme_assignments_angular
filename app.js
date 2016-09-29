const express = require('express');
const path = require('path');
const app = express();

module.exports = app;

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

console.log('test')

app.get('/', function(req, res, next){
	console.log('hello there!!!!!!!')
	res.sendFile(path.join(__dirname,'index.html'));

})