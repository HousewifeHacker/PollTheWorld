window.PollApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new PollApp.Routers.Router({ 
      $rootEl: $('#content') 
    });
    Backbone.history.start();
  }
};
