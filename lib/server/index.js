var express = require('express')
var http = require('http')
var app = express();
var ticker = require('../routes/ticker');

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
});

app.get('/ticker', ticker.all);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Server listening on port %d', app.get('port'));
});

module.exports = app;
