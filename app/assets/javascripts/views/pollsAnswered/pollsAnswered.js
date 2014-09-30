PollApp.Views.PollsAnswered = Backbone.CompositeView.extend({
  template: JST["answered/index"],

  initialize: function() {
    this.listenTo(this.collection, "add", this.addItems);
    this.collection.each(this.addItems.bind(this));
    this.listenTo(this.collection, "remove", this.removeItems);
  },

  removeItems: function(poll) {
    var view = _.find(this.subviews('#menu'), function(pollView) {
      return pollView.model.id == poll.id
    });
    if (view) {
      this.removeSubview("#menu", view)
    };
  },

  addItems: function(poll) {
    var view = new PollApp.Views.PollsAnsweredItem({
      model: poll
    });
    this.addSubview('#menu', view);
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
})
