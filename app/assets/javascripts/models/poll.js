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

  responses: function() {
    if (!this._responses) {
      this._responses =
        new PollApp.Collections.Responses([], { answerChoice: this });
    }

    return this._responses;
  },

  parse: function(res) {
    if(res.answer_choices) {
      this.answerChoices().set(res.answer_choices, { parse: true });
      delete res.answer_choices;
    }

    if (res.responses) {
      this.responses().set(res.responses, { parse: true });
      delete res.responses;
    }
    
    return res;
  },
  
  bodies: function() {
    return this.answerChoices().bodies();
  },
  
  responses_counts: function() {
    return this.answerChoices().responses_counts();
  },
  
  total_responses: function() {
    var sum = 0;
    var counts = this.responses_counts();
    for (var i = 0; i < counts.length; i++) {
      sum += counts[i];
    }
    return sum;
  }
  
});
