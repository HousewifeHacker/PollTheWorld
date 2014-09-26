PollApp.Views.Chart = Backbone.View.extend({
  
  template: JST["results/chart"],
  
  initialize: function() {
    this.listenTo(this.collection, "add change", this.render);
  },
  
  render: function() {
    $(this.$el).html(this.template());
    
    var data = {
      labels: this.collection.bodies(),
      datasets: [
        {
          label: "My First dataset",
          data: this.collection.responses_counts()
        }
      ]
    };
    var options = {
      scaleBeginAtZero : true,
      scaleShowGridLines : true,
      scaleGridLineColor : "rgba(0,0,0,.05)",
      scaleGridLineWidth : 1,
      barShowStroke : true,
      barStrokeWidth : 2,
      barValueSpacing : 5,
      barDatasetSpacing : 1,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    };
    var ctx = this.$el.find('#myChart')[0].getContext("2d"); 
    var barChart = new Chart(ctx).Bar(data, options);
    return this
  }
})