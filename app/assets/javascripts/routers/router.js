PollApp.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "pollsIndex",
    "polls/new": "pollNew",
    "polls/:id": "pollShow",
    "polls/:id/edit": "pollEdit"
  }
})