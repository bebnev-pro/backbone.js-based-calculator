if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}
const ItemView = require('./item');
const ItemModel  = require('../models/item');
const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
var jsdom = require('mocha-jsdom');
var rerequire = jsdom.rerequire

jsdom()

const Storage = require('dom-storage');
global.localStorage = new Storage(null, { strict: true });
global.sessionStorage = new Storage(null, { strict: true });

define(function(require) {

  describe('Views -> Item', function() {

    var $;

    before(function () {
      $ = rerequire('jquery')
    });

    it('works', function () {
      document.body.innerHTML = '<div>hola</div>';
      expect($("div").html()).eql('hola');
    });

    it('Item View should be created', function() {
      const model = new ItemModel();
      const itemView = new ItemView({ model: model });
      expect(itemView).to.be.ok;
    });
  });

});