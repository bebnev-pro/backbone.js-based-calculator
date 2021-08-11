if (typeof define !== 'function') {
  const define = require('amdefine')(module);
}

const Storage = require('dom-storage');
global.localStorage = new Storage(null, { strict: true });
global.sessionStorage = new Storage(null, { strict: true });

const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
const jsdom = require('mocha-jsdom');

describe('Main View', function() {
  let $;
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

  it('Summ model should be updated, when some model in collection updated.', function() {
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
    mainView.collection.set([{
      cash: 2,
      desription: '2+'
    },{
      cash: 2,
      desription: '2=4'
    }]);
    mainView.newSumm();
    expect(mainView.model.attributes.summ).to.equal(4);
  });

});