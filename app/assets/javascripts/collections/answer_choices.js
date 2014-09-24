PollApp.Collections.AnswerChoices = Backbone.Collection.extend({
  url: '/api/answer_choices',
  model: PollApp.Models.AnswerChoice,
  
  initialize: function(models, options) {
    this.poll = options.poll;
  }
});