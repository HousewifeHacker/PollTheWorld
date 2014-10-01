/*global PollApp */
PollApp.Collections.Polls = Backbone.Collection.extend({
  url: '/api/polls',
  model: PollApp.Models.Poll,

  getOrFetch: function(id) {
    var poll = this.get(id), 
        polls = this;
    
    if (poll) {
      poll.fetch();
    } else {
      poll = new PollApp.Models.Poll({ id: id });
      poll.fetch({
        success: function() {
          polls.add(poll);
        }
      });
    }
    return poll;
  },

  parse: function(res) {
    this.page_number = parseInt(res.page_number);
    this.total_pages = parseInt(res.total_pages);
    return res.models
  }
});

PollApp.Collections.polls = new PollApp.Collections.Polls();
PollApp.Collections.answeredPolls = new PollApp.Collections.Polls();
