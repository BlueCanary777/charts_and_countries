var PieChart = function(newTitle, newName, newData){
  console.log(newData)
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: newTitle
    },
    series: [{
      name: newName,
      data: newData
    }]
  });

};
