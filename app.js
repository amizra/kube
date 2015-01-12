var express = require('express');
var path = require('path');

var app = express();

app.engine('.html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/speak', function(req, res) {
	res.render('speaker.html');
});

app.get('/auditions', function(req, res) {
	res.render('auditions.html');
});

console.log('App listening on port ' + (process.env.PORT || 1997));
app.listen(process.env.PORT || 1997);
