var request = require('supertest');
var chai = require('chai');
var app = require('../app');

describe('Ticker API', function() {
  describe('GET /ticker', function() {
    it('send a summary of BTC price to slack', function(done) {
      process.env.SLACK_HOST = "i0iu2uxnu8gt.runscope.net";
      process.env.SLACK_PATH = "/services/hooks/incoming-webhook";
      process.env.SLACK_TOKEN = "qzxBRDfVpihcn3Ja3eh0Dh2M";

      request(app)
      .get('/ticker')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        done();
      });
    });
  });
});
