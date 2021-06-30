if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function(require) {
  var Item = require('../src/models/item');
  var _ = require('underscore');
  var chai = require('chai');
  var expect = chai.expect;

  describe('Models -> Item', function() {

    describe('Initialize...', function() {
      it('Item should be created', function() {
        expect(new Item()).to.be.ok;
      });
    });

  });
});