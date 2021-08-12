if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([
  'backbone',
  'underscore',
  'rxjs'
], function (
  Backbone,
  _,
  rxjs
) {
  const fromEvent = rxjs.fromEvent;
  const ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'b-item__container row',
    initialize: function () {
      this.template = _.template($('#viewItem').html());
    },
    subscriptions: null,
    render: function () {
      const viewHtml = this.template(this.model.toJSON());
      this.$el.html(viewHtml);
      this.makeSubscriptions();
      return this.$el;
    },
    makeSubscriptions() {
      this.subscriptions = {};

      this.subscriptions['deleteItem'] = fromEvent(this.$el.find('.b-item__delete'), 'click')
      .subscribe(() => {
        this.deleteItem();
      });

      this.subscriptions['changeDescription'] = fromEvent(this.$el.find('.b-item_description'), 'blur')
      .subscribe(() => {
        this.changeValue();
      });

      this.subscriptions['changeItem'] = fromEvent(this.$el.find('.b-item'), 'blur')
      .subscribe(() => {
        this.changeValue();
      });

      this.subscriptions['changeModel'] = fromEvent(this.model, 'change')
      .subscribe(() => {
        this.render();
      });

    },
    deleteItem: function () {
      this.model.set({ cash: 0});
      this.model.destroy();
      this.remove();
      this.unsubscribeAll();
    },
    unsubscribeAll: function() {
      for (let subscription in this.subscriptions) {
        this.subscriptions[subscription].unsubscribe();
      }
    },
    changeValue: function () {
      let newVal = this.$el.find('.b-item').val();
      const newDescription = this.$el.find('.b-item_description').val();
      newVal = parseFloat(newVal);
      this.model.set({
        cash: !!newVal ? newVal : null,
        description: !!newDescription ? newDescription : null
      });
    }
  });
  
  return ItemView;
});