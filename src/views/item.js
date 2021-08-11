if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define([
  'backbone',
  'underscore'
], function (
  Backbone,
  _
) {
  const ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'b-item__container row',
    events: {
      "click .b-item__delete": "deleteItem",
      "blur .b-item": "changeValue",
      "blur .b-item_description": "changeValue",
      "click .b-item__save": "changeValue"
    },
    initialize: function () {
      this.template = _.template($('#viewItem').html());
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function () {
      const view = this.template(this.model.toJSON());
      this.$el.html(view);
      return this.$el;
    },
    deleteItem: function () {
      this.model.set({
        cash: 0
      });
      this.model.destroy();
    },
    changeValue: function () {
      let newVal = this.$('.b-item').val();
      const newDescription = this.$('.b-item_description').val();
      newVal = parseFloat(newVal);
      this.model.set({
        cash: !!newVal ? newVal : null,
        description: !!newDescription ? newDescription : null
      }, { validate: true });
      this.render();
    }
  });
  
  return ItemView;
});