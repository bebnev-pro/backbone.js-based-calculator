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

// test run separately
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
    document.body.innerHTML = '<div id="viewItem">hola</div>';

    const model = new ItemModel();
    const itemView = new ItemView({ model: model });
    expect(itemView).to.be.ok;
  });
});