/*global PollApp */
PollApp.Collections.AnswerChoices = Backbone.Collection.extend({
  url: '/api/answer_choices',
  model: PollApp.Models.AnswerChoice,

  comparator: 'ord',
  
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
  },
  
  bodies: function() {
    var bodies = [];
    this.each(function(choice) {
      bodies.push(choice.get("body"));
    });
    return bodies;
  },
  
  responses_counts: function() {
    var responsesCounts = [];
    this.each(function(choice) {
      responsesCounts.push(choice.get("responses_count") || 0);
    });
    return responsesCounts;
  }
});

// PollApp.Collections.answerChoices = new PollApp.Collections.AnswerChoices();
