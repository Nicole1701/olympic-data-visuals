let genderData = d3.json("api/gender").then((data) => {
  console.log(data);

  series = [{
    name: 'M',
    data: []
  }, {
    name: 'F',
    data: []
  }];

data.forEach(point => {
  series.forEach(series => {
    if (series.name === point.sex) {
      series.data.push({
        x: point.year,
        y: point.count
      })
    }
  });
});

Highcharts.chart('container', {

  xAxis: {
    type: 'year',
    tickLength: 10
  },

  series: series

});
  });


