/*global PollApp */
PollApp.Collections.AnswerChoices = Backbone.Collection.extend({
  url: '/api/answer_choices',
  model: PollApp.Models.AnswerChoice,
  
  initialize: function(models, options) {
    this.poll = options.poll;
  },
  
  getOrFetch: function(id) {
    var answerChoice = this.get(id), 
        answerChoices = this;
    
    if (answerChoice) {
      answerChoice.fetch();
    } else {
      answerChoice = new PollApp.Models.AnswerChoice({ id: id });
      answerChoice.fetch({
        success: function() {
          answerChoices.add(answerChoice);
        }
      });
    }
    return answerChoice;
  }
});