
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


//  // The button action
//  $('#summer').click(function() {
//   summerData.series[0].setData(summerData);
//   $(this).attr('disabled', true);
//   $('#summer').attr('disabled', false);
// });

// $('#winter').click(function() {
//   winterData.series[0].setData(winterData);
//   $(this).attr('disabled', true);
//   $('#winter').attr('disabled', false);
// });