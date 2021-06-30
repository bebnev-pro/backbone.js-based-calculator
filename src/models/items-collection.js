if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([
  'backbone',
  './item'
], function (
  Backbone,
  Item
) {

    var ItemCollection = Backbone.Collection.extend({
      model: Item
    });
    return ItemCollection;

  });