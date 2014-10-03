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
    this.$('#poll-choices').sortable();
    return this;
  },
  
  createPoll: function() {
    var that = this;
    var params = this.$("form").serializeJSON();
    params["poll"].answer_choices_attributes.forEach(function(choice, i) {
      choice.ord = i
    });
    console.log(params["poll"]);
    var newPoll = new PollApp.Models.Poll(params["poll"]);
    newPoll.save({}, {
      success: function() {
        that.collection.add(newPoll);
	Backbone.history.navigate("/", { trigger : true });
      },
      error: function() {
	that.$el.prepend("<div class='alert alert-danger' role='alert' style='text-align: center'><h4>You must enter a question and 2 or more answer choices</h4></div>");
      }    
    })
  }
});
