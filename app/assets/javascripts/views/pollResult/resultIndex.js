/*global PollApp, JST */
PollApp.Views.ResultIndex = Backbone.CompositeView.extend({
  template: JST["answer_choices/index"],
  
  initialize: function() {
    this.listenTo(this.collection, "add", this.addItems);
    this.collection.each(this.addItems.bind(this));
  },
  
  addItems: function(choice) {
    var view = new PollApp.Views.ResultItem({
      model: choice
    });
    this.addSubview('#answer-choices-list', view);
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
});