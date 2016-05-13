var express = require('express');
var path = require('path');
var ejs = require('ejs-locals');
var app = express();

app.engine('html', ejs);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'install')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function (req, res) {
  res.render('index',{title:'Android & IOS Demo Apps'})
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});