/*global PollApp, JST */
PollApp.Views.PollNew = Backbone.CompositeView.extend({
  template: JST["new/poll"],

  events: {
    'click .new-choice' : 'addAnswerChoice',
    'click .submit-poll' : 'createPoll'
  },
  
  initialize: function() {
    this.addAnswerChoice();
    this.addAnswerChoice();
  },

  addAnswerChoice: function() {
    var view = new PollApp.Views.AnswerChoiceForm();
    this.addSubview('#poll-choices', view);
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  
  createPoll: function() {
    var that = this;
    var poll = this.collection.create({
      body: this.$('#poll_body').val()
    }, { wait: true, success: function() {
      that.$('.choice-form-input').each( function(idx, el) {
        poll.answerChoices().create({
	  ord: idx,
          poll_id: poll.id,
          body: $(el).val()
        }, { wait: true });
      });
      Backbone.history.navigate("/", { trigger: true });
    }});
  }
});
