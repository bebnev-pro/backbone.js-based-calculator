if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}
var assert = require('assert');

const Storage = require('dom-storage');
global.localStorage = new Storage(null, { strict: true });
global.sessionStorage = new Storage(null, { strict: true });

var jsdom = require('mocha-jsdom');

global.document = jsdom();

const ItemView = require('./item');
const ItemModel  = require('../models/item');
const chai = require('chai');
const expect = chai.expect;


define(function(require) {

  describe('Views -> Item', function() {
    it('Item View should be created', function() {

      var $ = require('jquery')(require("jsdom").jsdom().parentWindow);


      const model = new ItemModel();
      const itemView = new ItemView({ model: model });
      expect(itemView).to.be.ok;
    });
  });

});