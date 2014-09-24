PollApp.Collections.Polls = Backbone.Collection.extend({
  url: '/api/polls',
  model: PollApp.Models.Poll
});