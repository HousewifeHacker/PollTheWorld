/*global PollApp, JST */
PollApp.Views.PollsIndexItem = Backbone.View.extend({
  template: JST["polls/indexItem"],

  tagName: "tr",
  
  events: {
    "click .delete-poll" : "removePoll"
  },
  
  render: function() {
    var renderedContent = this.template({ poll: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  removePoll: function(event) {
    this.model.destroy();
  }
});
