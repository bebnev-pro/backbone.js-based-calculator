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

describe('Main View', function() {
  var $;
  jsdom();

  before(function () {
    $ = require('jquery');
    global.$ = $;
  });

  it('Main View should be created', function() {
    const MainView = require('./main');
    const ItemCollection = require('../models/items-collection');
    const SummModel = require('../models/summ');
    document.body.innerHTML = '<div id="viewItem"><span class="b-item_description">Test Description</span><span class="b-item">123</span></div>';
    const itemCollection = new ItemCollection();
    const summModel = new SummModel();
    const mainView = new MainView({ 
      collection: itemCollection,
      model: summModel
    });

    expect(mainView).to.be.ok;
  });
});