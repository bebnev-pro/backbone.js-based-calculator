define([
  'backbone'
], function (
  Backbone
) {

    var Item = Backbone.Model.extend({
      defaults: {
        cash: null,
        valid: false,
        description: ''
      },
      validate: function (attrs) {
        
      }
    });

    return Item;
  });