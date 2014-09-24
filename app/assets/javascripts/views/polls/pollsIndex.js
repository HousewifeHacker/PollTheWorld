/*global PollApp, JST */
PollApp.Views.PollsIndex = Backbone.CompositeView.extend({
  template: JST["polls/index"],
  
  initialize: function() {
    this.listenTo(this.collection, "sync add", this.addItems);
    this.collection.each(this.addItems.bind(this));
  },
  
  addItems: function(poll) {
    var view = new PollApp.Views.PollsIndexItem({
      model: poll
    });
    this.addSubview('#menu', view);
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});