var Item = Backbone.Model.extend({
  defaults:{
    cash: 0,
    valid: false
  },
  validate: function(attrs) {
    if(attrs.valid == true) {
      alert('Вы ввели недопустимые символы. Возможен ввод только действительных чисел.');
      return('Incorrect');
    }

  }
});
var Summ = Backbone.Model.extend({
  defaults: {
    summ: 230
  }
});
var ItemCollection = Backbone.Collection.extend({
  model: Item
});