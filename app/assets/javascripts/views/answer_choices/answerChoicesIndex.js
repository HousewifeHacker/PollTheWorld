PollApp.Views.AnswerChoicesIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "add", this.addItems);
    this.collection.each(this.addItems.bind(this));
  },
  
  addItems: function(choice) {
    var view = new PollApp.Views.AnswerChoicesIndexItem({
      model: choice
    });
    this.addSubview('#answer-choices-list', view);
  },
  
  render: function() {
    this.$el.html("<ul id='answer-choices-list'></ul>")
    this.attachSubviews();
    return this;
  }
});