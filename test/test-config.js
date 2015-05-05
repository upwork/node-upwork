var Config = require('../lib/config')
  , assert = require("assert");

describe('config', function(){
  var config;

  beforeEach(function(){
    var options = {
      'consumerKey' : 'xxxxx',
      'consumerSecret' : 'xxxx',
      'accessToken' : 'xx',
      'accessSecret' : 'x',
      'debug' : true
    }
    config = new Config(options);
  });

  describe('test config setup', function(){
    it('should setup config according provided options', function(){
      assert.equal(config.consumerKey, 'xxxxx');
      assert.equal(config.consumerSecret, 'xxxx');
      assert.equal(config.accessToken, 'xx');
      assert.equal(config.accessSecret, 'x');
      assert.equal(config.debug, true);
    })
  })
})
