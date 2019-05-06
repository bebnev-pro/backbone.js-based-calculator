define([
  'backbone',
  'models/items-collection',
  'models/summ',
  'views/item'
], function (
  Backbone,
  ItemCollection,
  Summ,
  ItemView
) {
    var Start = Backbone.View.extend({
      el: "body",
      events: {
        "click .b-add": "addObject"
      },
      initialize: function () {
        this.coll = new ItemCollection();
        this.model = new Summ();
        this.listenTo(this.coll, 'add', this.addOne);
        this.listenTo(this.coll, 'change', this.newSumm);
      },
      addObject: function () {
        this.coll.add({});
      },
      addOne: function (model) {
        var view = new ItemView({ model: model });
        this.$('.table').append(view.render());
        this.newSumm();
      },
      newSumm: function () {
        var summator = 0;
        this.coll.each(function (obj, index) {
          summator += obj.get('cash');
        })
        this.$('.b-summ__summ').text(summator);
        var wHeight = $(window).height();
        var dHeight = $(document).height();
        var dScroll = $(document).scrollTop();
        var ss = dScroll - (dHeight - wHeight);
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