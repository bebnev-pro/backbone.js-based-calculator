require.config({
  baseUrl: '/projects/backbone.js-based-calculator/src',
  paths: {
    'jquery'        : '../node_modules/jquery/dist/jquery',
    'underscore'    : '../node_modules/underscore/underscore',
    'backbone'      : '../node_modules/backbone/backbone',
    'mocha'         : '../node_modules/mocha/mocha',
    'chai'          : '../node_modules/chai/chai',
    'chai-jquery'   : '../node_modules/chai-jquery/chai-jquery'
  },
  shim: {
    'chai-jquery': ['jquery', 'chai']
  }
});

define(function(require) {
  var chai = require('chai');
  var mocha = require('mocha');
  require('jquery');
  var chaiJquery = require('chai-jquery');

  // Chai
  var should = chai.should();
  chai.use(chaiJquery);

  mocha.setup('bdd');

  require([
    'tests/model-item-test.js',
  ], function(require) {
    mocha.run();
  });

});