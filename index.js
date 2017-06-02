var http = require('http');
var express = require('express');
var path = require('path');
var ejs = require('ejs-locals');
var app = express();

app.engine('html', ejs);
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');*/

app.use('/install', express.static(path.join(__dirname, 'install')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function (req, res) {
  res.render('index',{title:'Android & IOS Demo Apps'})
});

process.on('uncaughtException', function(err){
   console.log('handeleed exp', err) 
});

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(process.env.PORT || 8081);
server.on('error', function(err){
    console.log('show error', err)
});
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
