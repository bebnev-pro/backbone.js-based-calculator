var requirejs = require("requirejs");
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

requirejs.config({
  baseUrl: '/projects/backbone.js-based-calculator/src',
  nodeRequire: require,
});

define(function(require) {
  require([
    '../src/models/item.spec.js',
    '../src/models/items-collection.spec.js',
    '../src/models/summ.spec.js',
  ], function(require) {});
});