let should = require('chai').should()
   ,http = require('http')
   ,request = require('supertest')

var app = require("./index.js")

// define server base URL
var BASE_URL = "http://localhost:8080"

// run API test
describe("API Test with SuperTest", function(){
  it("GET / should return 'Hello World!'", function(done) {
    request(app)
      .get('/api')
      .expect(200,"Hello World!")
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect('X-Powered-By', 'Express')
      .end( function(err, res){
        done();
      })
  });

  it("GET /test should return 404", function(done){
    request(app)
      .get('/test')
      .expect(404)
      .end(function(err, res){
        if (err)
          return done(err) // if response is 500 or 404 & err, test case will fail
        done()
      });
  });

})