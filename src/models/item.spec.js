if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

const Item = require('./item');
const chai = require('chai');
const expect = chai.expect;

define(function(require) {

  describe('Models -> Item', function() {
    it('Item should be created and have defaults property keys', function() {
      const item = new Item();
      expect(item).to.be.ok;
      expect(item).to.have.property('attributes');
      expect(item.attributes).to.have.property('cash');
      expect(item.attributes).to.have.property('valid');
      expect(item.attributes).to.have.property('description');
    });
  });

});