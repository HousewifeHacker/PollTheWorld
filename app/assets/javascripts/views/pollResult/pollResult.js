/*global PollApp, JST */
PollApp.Views.PollResult = Backbone.CompositeView.extend({
  template: JST['results/show'],
  
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.addChart();
  },
  
  addChart: function() {
    var view = new PollApp.Views.Chart({
      collection: this.model.answerChoices()
    });
    this.addSubview('#result-chart', view);
  },
  
  render: function() {
    var renderedContent = this.template({ poll: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
