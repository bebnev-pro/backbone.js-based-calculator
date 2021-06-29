define([
  'backbone',
  'underscore'
], function (
  Backbone,
  _
) {
    var ItemView = Backbone.View.extend({
      tagName: 'tr',
      className: 'b-item__container',
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
        var view = this.template(this.model.toJSON());
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
        var newVal = this.$('.b-item').val();
        var newDescription = this.$('.b-item_description').val();
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