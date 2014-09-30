/*global PollApp, JST */
PollApp.Views.AnswerChoicesIndex = Backbone.CompositeView.extend({
  template: JST["answer_choices/index"],
  
  initialize: function(options) {
    this.listenTo(this.collection, "add", this.addItems);
    this.collection.each(this.addItems.bind(this));
    this.poll = options.poll;
  },
  
  addItems: function(choice) {
    var view = new PollApp.Views.AnswerChoicesIndexItem({
      model: choice
    });
    this.addSubview('#answer-choices-list', view);
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
