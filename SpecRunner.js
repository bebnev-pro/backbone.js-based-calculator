var requirejs = require("requirejs");
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

requirejs.config({
  baseUrl: '/projects/backbone.js-based-calculator/src',
  nodeRequire: require,
  paths: {
    'jquery'        : 'node_modules/jquery/dist/jquery',
    'underscore'    : 'node_modules/underscore/underscore',
    'backbone'      : 'node_modules/backbone/backbone',
    'mocha'         : 'node_modules/mocha/mocha',
    'chai'          : 'node_modules/chai/chai',
    'chai-jquery'   : 'node_modules/chai-jquery/chai-jquery'
  },
  shim: {
    'chai-jquery': ['jquery', 'chai']
  }
});

define(function(require) {
  var chai = require('chai');
  var mocha = require('mocha');
  var should = chai.should();

  require([
    './tests/model-item-test.js',
  ], function(require) {
  });

});