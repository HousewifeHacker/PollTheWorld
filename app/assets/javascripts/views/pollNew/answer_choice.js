/*global PollApp, JST */
PollApp.Views.AnswerChoiceForm = Backbone.View.extend({
  template: JST["new/item"],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});