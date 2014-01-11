var http = require('http');
var https = require('https');

exports.all = function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  var optionsGet = {
    host: 'www.bitstamp.net',
    port: 443,
    path: '/api/ticker/',
    method: 'GET'
  };

  var request = https.request(optionsGet, function(response) {
    var responseString = '';

    response.on('data', function(data) {
      responseString += data;
    });

    response.on('err', function(e) {
      console.log(e);
    });

    response.on('end', function() {
      ticker = JSON.parse(responseString);
      text = "Current BTC price is " + ticker.ask + " USD.";
      payload = JSON.stringify({text: text})
      var paramsPost = "token=" + process.env.SLACK_TOKEN + "&payload=" + payload;

      var optionsPost = {
        host: process.env.SLACK_HOST,
        port: 80,
        path: process.env.SLACK_PATH,
        //path: '/services/hooks/incoming-webhook',
        method: 'POST',
        headers: { "content-type": "application/x-www-form-urlencoded",
                   "content-length": paramsPost.length
        }
      };

      // Use this for request bin testing.
      //var postRequest = http.request(optionsPost, function (postResponse) {
      var postRequest = https.request(optionsPost, function (postResponse) {
        var str = '';

        // Create the listener for data being returned.
        postResponse.on('data', function (chunk) {
          str += chunk;
        });

        // Create the listener for the end of the POST.
        postResponse.on('end', function (){
          console.log("POST RESPONSE: " + str);
          return res.json(200);
        });

        postResponse.on('error', function(e){
          console.log("Error" + e);
        });
      });

      // Write the parameters to the HTTP POST.
      postRequest.write(paramsPost);

      // Close the HTTP connection.
      postRequest.end();
    });
  });
  request.end();
};
