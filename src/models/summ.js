if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([
  'backbone'
], function (
  Backbone
) {
  const Summ = Backbone.Model.extend({
    defaults: {
      summ: 0
    }
  });
  return Summ;
});