var https = require('https');

exports.all = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var options = {
    host: 'www.bitstamp.net',
    port: 443,
    path: '/api/ticker/',
    method: 'GET'
  };

  var request = https.request(options, function(response) {
    var responseString = '';

    response.on('data', function(data) {
      responseString += data;
    });

    response.on('end', function() {
      ticker = JSON.parse(responseString);
      text = "Current BTC price is " + ticker.ask + " USD.";
      return res.json(200, JSON.stringify({text: text}));
    });
  });
  request.end();
};
