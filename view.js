var ItemView = Backbone.View.extend( {
  tagName: 'div',
  className: 'b-item__container',
  events: {
    "click .b-item__delete" : "deleteItem",
    "blur .b-item" : "changeValue",
    "click .b-item__save" : "changeValue"
  },
  initialize: function() {
    this.template = _.template($('#viewItem').html());
    this.listenTo(this.model,'change',this.render);
    this.listenTo(this.model,'destroy',this.remove);
  },
  render: function() {
    var view = this.template(this.model.toJSON());
    this.$el.html(view);
    return this.$el;
  },
  deleteItem : function() {
    this.model.destroy();
    start.newSumm();
  },
  changeValue : function() {
    var newVal = this.$('.b-item').val();
    newVal = parseFloat(newVal);
    var newNan = isNaN(newVal);
    this.model.set({
      cash: newVal,
      valid: newNan
    },{validate:true});
    this.render();
    start.newSumm();
  }
});
var Start = Backbone.View.extend({
  el: "body",
  events: {
    "click .b-add" : "addObject"
  },
  initialize: function() {
    this.coll = new ItemCollection();
    this.model = new Summ();
    this.listenTo(this.coll, 'add', this.addOne);
  },
  addObject: function() {
    this.coll.add({});
  },
  addOne: function(model) {
    var view = new ItemView({model:model});
    this.$('#container').append(view.render());
    this.newSumm();
  },
  newSumm: function() {
    var summator = 0;
    this.coll.each(function(obj,index) {
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