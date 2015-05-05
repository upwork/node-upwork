var Debug = require('../lib/debug')
  , assert = require("assert");

describe('debug', function(){
  var debug;

  beforeEach(function(){
    debug = new Debug(false);
  });

  describe('test debug mode', function(){
    it('should return current debug mode', function(){
      assert.equal(debug.mode, false);
    })
  })
})
