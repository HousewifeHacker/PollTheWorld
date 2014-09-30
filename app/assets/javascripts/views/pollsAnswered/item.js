PollApp.Views.PollsAnsweredItem = Backbone.View.extend({
  tagName: "tr",

  template: JST["answered/item"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    var renderedContent = this.template({ poll: this.model })
    this.$el.html(renderedContent);
    return this;
  }

});
