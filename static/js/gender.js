// Add toggle to swap between winter and summer
// jsfiddle.net/ezc7oghm/1/

$(function() {
  $('[name=toggler]').click(function () {
      $('.toHide').css({
          top: '-9999em',
          opacity: 0
      });
      var chartToShow = $(this).val();
      $('#' + chartToShow).css({
          top: 0,
          opacity: 1
      });
  });
 
  // Get data for Summer Olympics
d3.json("api/gender/summer").then((data) => {
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

// Create chart for Summer Olympics
$('#divID-1').highcharts({
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
// Set legend
legend: {
  backgroundColor: '#f2f2f2',
  layout: 'horizontal',
  align: 'right',
  verticalAlign: 'top'
},

  series:series
});
 
});

// Get data for Winter Olympics
d3.json("api/gender/winter").then((data) => {
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

// Create chart for Winter Olympics
$('#divID-2').highcharts({
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

// Set legend
legend: {
  backgroundColor: '#f2f2f2',
  layout: 'horizontal',
  align: 'right',
  verticalAlign: 'top'
},

  series:series
});

});

}); 