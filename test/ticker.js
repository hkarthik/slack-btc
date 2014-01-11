var request = require('supertest');
var chai = require('chai');
var app = require('../app');

describe('Ticker API', function() {
  describe('GET /ticker', function() {
    it('should return a summary of BTC', function(done) {
      process.env.SLACK_HOST = "requestb.in";
      process.env.SLACK_PATH = "/100n9j91";
      process.env.SLACK_TOKEN = "FAKE_TOKEN";

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
