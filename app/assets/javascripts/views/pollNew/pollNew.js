/*global PollApp, JST */
PollApp.Views.PollNew = Backbone.CompositeView.extend({
  template: JST["new/poll"],

  events: {
    'click .new-choice' : 'addAnswerChoice',
    'click .remove-choice' : 'removeAnswerChoice'
  },
  
  initialize: function() {
    this.addAnswerChoice();
    this.addAnswerChoice();
  },

  addAnswerChoice: function(event) {
    var view = new PollApp.Views.AnswerChoiceForm({
      pollId: this.model.id
    });
    this.addSubview('#poll-choices', view);
  },
  
  removeAnswerChoice: function(event) {
    var view = event.currentTarget.parentElement;
    this.removeSubview('#poll-choices', view);
  },
  
  render: function() {
    var renderedContent = this.template({
      model: this.model
    });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});