/*global PollApp, JST */
PollApp.Views.PollsIndexItem = Backbone.View.extend({
  template: JST["polls/indexItem"],

  tagName: "tr",
  
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function() {
    var renderedContent = this.template({ poll: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
