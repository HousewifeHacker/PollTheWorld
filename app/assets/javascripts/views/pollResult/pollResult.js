/*global PollApp, JST */
PollApp.Views.PollResult = Backbone.CompositeView.extend({
  template: JST['results/show'],
  
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    
    this.addAnswerChoices();
  },
  
  addAnswerChoices: function() {
    var view = new PollApp.Views.ResultIndex({
      collection: this.model.answerChoices()
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