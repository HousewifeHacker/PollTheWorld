/*global PollApp, JST */
PollApp.Views.AnswerChoiceForm = Backbone.View.extend({
  template: JST["new/item"],

  events: {
    'click .remove-choice' : 'removeAnswerChoice',
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  removeAnswerChoice: function(event) {
    this.trigger('remove:view', '#poll-choices', this)
  }

});
