
let summerData = d3.json("api/gender/summer").then((data) => {
  console.log(data);

  series = [{
    name: 'M',
    data: [],   
    color: 'darkblue'
  }, 
  
  {
    name: 'F',
    data: [],
    color: 'red'
  }];

data.forEach(point => {
  series.forEach(series => {
    if (series.name === point.sex) {
      series.data.push({
        x: (point.year),
        y: (point.count)
      })
    }
  });
});

Highcharts.chart('container', {
  chart: {
      type: 'line'
  },
  title: {
      text: 'Olympics Gender Breakout: Summer Games'
  },
  subtitle: {
      text: '1896-2016'
  },
  xAxis: {
    type: 'year',
    tickInterval: 4,
    showFirstLabel: true,
    startOnTick: false,  
    title: {
      text: 'Olympic Year'
  }   
      
  },
  yAxis: {
    tickPixelInterval: 40,
    title: {
          text: '# of Athletes'
      }
  },

  tooltip: {
    crosshairs: true,
    shared: true
},

legend: {
  backgroundColor: '#f2f2f2',
  layout: 'horizontal',
  align: 'right',
  verticalAlign: 'top'
},

  series:series
});
 

});

let winterData = d3.json("api/gender/winter").then((data) => {
  console.log(data);

  series = [{
    name: 'M',
    data: [],   
    color: 'darkblue'
  }, 
  
  {
    name: 'F',
    data: [],
    color: 'red'
  }];

data.forEach(point => {
  series.forEach(series => {
    if (series.name === point.sex) {
      series.data.push({
        x: (point.year),
        y: (point.count)
      })
    }
  });
});

Highcharts.chart('w-container', {
  chart: {
      type: 'line'
  },
  title: {
      text: 'Olympics Gender Breakout: Winter Games'
  },
  subtitle: {
      text: '1896-2016'
  },
  xAxis: {
    type: 'year',
    tickInterval: 4,
    showFirstLabel: true,
    startOnTick: false,  
    title: {
      text: 'Olympic Year'
  }   
      
  },
  yAxis: {
    tickPixelInterval: 40,
    title: {
          text: '# of Athletes'
      }
  },

  tooltip: {
    crosshairs: true,
    shared: true
},

legend: {
  backgroundColor: '#f2f2f2',
  layout: 'horizontal',
  align: 'right',
  verticalAlign: 'top'
},

  series:series
});
 
});

let seasons = ['Summer', 'Winter'];

seasons.forEach(function (season) {
    var btn = document.getElementById(year);

    btn.addEventListener('click', function () {

        document.querySelectorAll('.buttons button.active').forEach(function (active) {
            active.className = '';
        });
        btn.className = 'active';

        chart.update({
            title: {
                text: 'Summer Olympics ' + year + ' - Top 5 countries by Gold medals'
            },
            subtitle: {
                text: 'Comparing to results from Summer Olympics ' + (year - 4) + ' - Source: <ahref="https://en.wikipedia.org/wiki/' + (year) + '_Summer_Olympics_medal_table">Wikipedia</a>'
            },
            series: [{
                name: year - 4,
                data: dataPrev[year].slice()
            }, {
                name: year,
                data: getData(data[year]).slice()
            }]
        }, true, false, {
            duration: 800
        });
    });
});
