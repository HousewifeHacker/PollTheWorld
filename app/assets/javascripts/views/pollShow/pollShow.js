/*global PollApp, JST */
PollApp.Views.PollShow = Backbone.CompositeView.extend({
  template: JST['polls/show'],
  
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
  }
});