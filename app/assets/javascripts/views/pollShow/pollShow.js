/*global PollApp, JST */
PollApp.Views.PollShow = Backbone.CompositeView.extend({
  template: JST['polls/show'],

  events: { 
    'click .vote-radio': 'castVote', 
    'click .share-link': 'miniUrl'
  },
    
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    
    this.addAnswerChoices();
  },
  
  addAnswerChoices: function() {
    var view = new PollApp.Views.AnswerChoicesIndex({
      collection: this.model.answerChoices(),
      poll: this.model
    });
    this.addSubview('#poll-choices', view);
  },
  
  render: function() {
    var renderedContent = this.template({ poll: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  
  castVote: function(event) {
    var params = $(event.currentTarget).serializeJSON();
    var vote = new PollApp.Models.Response(params);
    var that = this;
    vote.save({}, {
      success: function() {
        PollApp.Collections.polls.remove(that.model);
        PollApp.Collections.answeredPolls.unshift(that.model);
        PollApp.Collections.responses.add(vote);
        that.model.responses().add(vote);
        Backbone.history.navigate("polls/" + that.model.id + "/results", { trigger: true });
      },
      error: function() {
        that.$el.prepend("<div class='alert alert-danger' role='alert' style='text-align: center'><h4>You cannot answer this poll again</h4></div>");
      }    
    });
  },

  miniUrl: function() {
    var that = this;
    $.ajax({
      url: "/api/url",
      type: "POST",
      data: { "long_url" : window.location.href },
      success: function(data) {
        that.$(".share-link").html(data.short_url);
      },
      error: function(data) {
        that.$(".share-link").html("Try again later");
      }
    })
  }
});
