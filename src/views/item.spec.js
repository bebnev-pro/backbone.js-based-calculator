if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

const Storage = require('dom-storage');
global.localStorage = new Storage(null, { strict: true });
global.sessionStorage = new Storage(null, { strict: true });

const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
var jsdom = require('mocha-jsdom');

describe('Views -> Item', function() {

  var $;
  jsdom();

  before(function () {
    $ = require('jquery');
    global.$ = $;
  });

  it('Item View should be created', function() {
    const ItemView = require('./item');
    const ItemModel  = require('../models/item');
    document.body.innerHTML = '<div id="viewItem"><span class="b-item_description">Test Description</span><span class="b-item">123</span></div>';
    const model = new ItemModel();
    const itemView = new ItemView({ model: model });

    expect(itemView).to.be.ok;
  });

  it('Delete Item should empty the cash of model', function() {
    const ItemView = require('./item');
    const ItemModel  = require('../models/item');
    document.body.innerHTML = '<div id="viewItem"><span class="b-item_description">Test Description</span><span class="b-item">123</span></div>';
    const model = new ItemModel();
    const itemView = new ItemView({ model: model });

    model.set({
      cash: 123,
      description: '123'
    });

    itemView.deleteItem();
    expect(model.attributes.cash).to.equal(0);
  });
});