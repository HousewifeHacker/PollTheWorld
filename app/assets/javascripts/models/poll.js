PollApp.Models.Poll = Backbone.Model.extend({
  urlRoot: '/api/polls',
  
  answerChoices: function() {
    if (!this.answerChoices) {
      this._answerChoices = 
        new PollApp.Collections.AnswerChoices([], { poll: this });
    }
    return this._answerChoices;
  },
  
  parse: function(response) {
    if(response.answerChoices) {
      this.answerChoices().set(response.answerChoices, { parse: true });
      delete response.answerChoices;
    }
    
    return response;
  }
});