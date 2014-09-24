PollApp.Collections.Responses = Backbone.Collection.extend({
  url: '/api/responses',
  model: PollApp.Models.Response
});