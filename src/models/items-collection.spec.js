const ItemCollection = require('./items-collection');
const chai = require('chai');
const expect = chai.expect;

describe('Models -> ItemCollection', function() {
  it('ItemCollection should be created', function() {
    const itemCollection = new ItemCollection();
    expect(ItemCollection).to.be.ok;
  });
});