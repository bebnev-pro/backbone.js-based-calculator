define(function(require) {
  var Item = require('models/item');
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