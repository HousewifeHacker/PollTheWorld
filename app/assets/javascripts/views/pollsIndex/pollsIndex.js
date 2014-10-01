/*global PollApp, JST */
PollApp.Views.PollsIndex = Backbone.CompositeView.extend({
  template: JST["polls/index"],
  
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
    var view = new PollApp.Views.PollsIndexItem({
      model: poll
    });
    this.addSubview('#menu', view);
  },

  listenForScroll: function () {
    $(window).off("scroll"); // remove past view's listeners
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var self = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (self.collection.page_number < self.collection.total_pages) {
	self.collection.fetch({
          data: { answered: false, page: self.collection.page_number + 1 },
          remove: false,
          wait: true
	});
      }
    }
  },
  
  render: function() {
    var renderedContent = this.template();
    this.listenForScroll();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});
