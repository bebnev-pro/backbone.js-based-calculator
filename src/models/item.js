if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([
  'backbone'
], function (
  Backbone
) {

  const Item = Backbone.Model.extend({
    defaults: {
      cash: null,
      valid: false,
      description: ''
    },
    validate: function (attrs) {}
  });

  return Item;
});