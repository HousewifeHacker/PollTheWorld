PollApp.Views.PollsAnsweredItem = Backbone.View.extend({
  tagName: "tr",

  template: JST["answered/item"],

  events: {
    "click .delete-poll" : "removePoll"
  },

  render: function() {
    var renderedContent = this.template({ 
   poll: this.model })
    this.$el.html(renderedContent);
    return this;
  },

 removePoll: function(event) {
    this.model.destroy();
  }
});
