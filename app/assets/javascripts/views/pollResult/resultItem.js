PollApp.Views.ResultItem = Backbone.View.extend({ 
  template: JST['results/item'],
  
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  
  render: function() {
    var renderedContent = this.template({
      answerChoice: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});