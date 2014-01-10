var request = require('supertest');
var chai = require('chai');
var app = require('../app');


describe('Ticker API', function() {
  describe('GET /ticker', function() {
    it('should return a summary of BTC', function(done) {
      request(app)
      .get('/ticker')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        var expect = chai.expect;
        var ticker = JSON.parse(res.body);
        expect(ticker.text).to.match(/^Current BTC price is \d+(\.\d{1,2})? USD./)
        done();
      });
    });
  });
});
