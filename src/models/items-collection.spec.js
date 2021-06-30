if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

const ItemCollection = require('./items-collection');
const chai = require('chai');
const expect = chai.expect;

define(function(require) {
  describe('Models -> ItemCollection', function() {
    it('ItemCollection should be created', function() {
      const itemCollection = new ItemCollection();
      expect(ItemCollection).to.be.ok;
    });
  });
});