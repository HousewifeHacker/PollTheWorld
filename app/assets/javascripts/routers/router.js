/*global PollApp */
PollApp.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "pollsIndex",
    "polls/answered" : "pollsAnswered",
    "polls/new": "pollNew",
    "polls/:id": "pollShow",
    "polls/:id/results": "pollResult"
  },
  
  pollsIndex: function() {
    PollApp.Collections.polls.fetch({data: { answered: false }});
    var view = new PollApp.Views.PollsIndex({
      collection: PollApp.Collections.polls
    });
    this._swapView(view);
  },

  pollsAnswered: function() {
    PollApp.Collections.answeredPolls.fetch({data: { answered: true }});
    var view = new PollApp.Views.PollsAnswered({
      collection: PollApp.Collections.answeredPolls
    });
    this._swapView(view);
  },
  
  pollNew: function() {
    var view = new PollApp.Views.PollNew({
      collection: PollApp.Collections.polls,
      model: new PollApp.Models.Poll()
    });
    this._swapView(view);
  },
  
  pollShow: function(id) {
    // naming is a little weird. This is where users vote
    var model = PollApp.Collections.polls.getOrFetch(id);
    var view = new PollApp.Views.PollShow({
      model: model
    });
    this._swapView(view);
  },
  
  pollResult: function(id) {
    var model = PollApp.Collections.polls.getOrFetch(id);
    var view = new PollApp.Views.PollResult({
      model: model
    });
    this._swapView(view);
  },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
