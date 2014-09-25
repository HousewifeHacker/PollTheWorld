/*global PollApp*/
PollApp.Collections.Responses = Backbone.Collection.extend({
  url: '/api/responses',
  model: PollApp.Models.Response
});

PollApp.Collections.responses = new PollApp.Collections.Responses();