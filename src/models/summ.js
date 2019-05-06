define([
  'backbone'
], function (
  Backbone
) {

    var Summ = Backbone.Model.extend({
      defaults: {
        summ: 230
      }
    });

    return Summ;

  });