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

  chart: {
      scrollablePlotArea: {
          minWidth: 700
      }
  },

  data: {
    genderData
  },

  title: {
      text: 'Daily sessions at www.highcharts.com'
  },

  subtitle: {
      text: 'Source: Google Analytics'
  },

  xAxis: {
      tickInterval: 7 * 24 * 3600 * 1000, // one week
      tickWidth: 0,
      gridLineWidth: 1,
      labels: {
          align: 'left',
          x: 3,
          y: -3
      }
  },

  yAxis: [{ // left y axis
      title: {
          text: null
      },
      labels: {
          align: 'left',
          x: 3,
          y: 16,
          format: '{value:.,0f}'
      },
      showFirstLabel: false
  }, { // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
          text: null
      },
      labels: {
          align: 'right',
          x: -3,
          y: 16,
          format: '{value:.,0f}'
      },
      showFirstLabel: false
  }],

  legend: {
      align: 'left',
      verticalAlign: 'top',
      borderWidth: 0
  },

  tooltip: {
      shared: true,
      crosshairs: true
  },

  plotOptions: {
      series: {
          cursor: 'pointer',
          point: {
              events: {
                  click: function (e) {
                      hs.htmlExpand(null, {
                          pageOrigin: {
                              x: e.pageX || e.clientX,
                              y: e.pageY || e.clientY
                          },
                          headingText: this.series.name,
                          maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                              this.y + ' sessions',
                          width: 200
                      });
                  }
              }
          },
          marker: {
              lineWidth: 1
          }
      }
  },

  series: [{
      name: 'All sessions',
      lineWidth: 4,
      marker: {
          radius: 4
      }
  }, {
      name: 'New users'
  }]
});
  });


