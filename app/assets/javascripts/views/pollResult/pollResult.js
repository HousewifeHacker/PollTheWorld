/*global PollApp, JST */
PollApp.Views.PollResult = Backbone.CompositeView.extend({
  template: JST['results/show'],

  events: {
    'click .share-link': 'miniUrl'
  },
  
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
