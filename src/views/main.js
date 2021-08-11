if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([
  'backbone',
  '../models/items-collection',
  '../models/summ',
  './item'
], function (
  Backbone,
  ItemCollection,
  Summ,
  ItemView
) {
  const Start = Backbone.View.extend({
    el: "body",
    events: {
      "click .b-add": "addObject"
    },
    initialize: function () {
      this.collection = new ItemCollection();
      this.model = new Summ();
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'change', this.newSumm);
    },
    addObject: function () {
      this.collection.add({});
    },
    addOne: function (model) {
      const view = new ItemView({ model: model });
      this.$('.main-container').append(view.render());
      this.newSumm();
    },
    newSumm: function () {
      let summator = 0;
      this.collection.each(function (obj, index) {
        summator += obj.get('cash');
      })
      this.$('.b-summ__summ').text(summator);
      this.model.set({
        summ: summator
      });
      const wHeight = $(window).height();
      const dHeight = $(document).height();
      const dScroll = $(document).scrollTop();
      const ss = dScroll - (dHeight - wHeight);
      if (wHeight < dHeight) {
        $('.b-summ__positioner').addClass('fixed');
      }
      if (wHeight >= dHeight || ss == 0) {
        $('.b-summ__positioner').removeClass('fixed');
      }
    }
  });

  return Start;
});