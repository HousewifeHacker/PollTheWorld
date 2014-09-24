PollApp.Views.AnswerChoicesIndexItem = Backbone.View.extend({
  tagName: 'li',
  
  template: JST['answer_choices/indexItem'],
  
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function() {
    var renderedContent = this.template({
      answerChoice: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});