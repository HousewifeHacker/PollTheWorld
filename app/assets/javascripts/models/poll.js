/*global PollApp */
PollApp.Models.Poll = Backbone.Model.extend({
  urlRoot: '/api/polls',
  
  answerChoices: function() {
    if (!this._answerChoices) {
      this._answerChoices = 
        new PollApp.Collections.AnswerChoices([], { poll: this });
    }
    return this._answerChoices;
  },
  
  parse: function(response) {
    if(response.answer_choices) {
      this.answerChoices().set(response.answer_choices, { parse: true });
      delete response.answer_choices;
    }
    
    return response;
  },
  
  bodies: function() {
    return this.answerChoices().bodies()
  },
  
  responses_counts: function() {
    return this.answerChoices().responses_counts()
  }
  
});