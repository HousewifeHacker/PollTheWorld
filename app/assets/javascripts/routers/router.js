PollApp.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "pollsIndex",
    "polls/new": "pollNew",
    "polls/:id": "pollShow",
    "polls/:id/edit": "pollEdit"
  },
  
  pollShow: function(id) {
    var model = PollApp.Collections.polls.getOrFetch(id);
    var view = new PollApp.Views.PollShow({
      model: model
    });
    this._swapView(view)
  },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});