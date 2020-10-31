var chartData = [];

function getData(){
	$.getJSON('/api/gender', function(data){
  	Highcharts.each(data, function(el){
    	el.x = new Date(el.year).getTime();
      el.y = Number(el.count);
    	chartData.push(el);
    });
    chartData.sort(function(a, b){
    	return a.x - b.x
    });
  	chart.series[0].setData(chartData);
  });
}


var chart = Highcharts.chart('container', {
	xAxis: {
  	type: 'datetime'
  },
  chart: {
    type: 'spline'
  },
  series: [{data: []}]
});

getData();

//setInterval(getData, 5000);




// var data = [{
//       "Date": "Feb. 12",
//       "Platform": "WIndows",
//       "Value": 625
//     },
//     {
//       "Date": "Feb. 12",
//       "Platform": "Apple",
//       "Value": 700
//     },
//     {
//       "Date": "Feb. 12",
//       "Platform": "IPhone",
//       "Value": 650
//     },
//     {
//       "Date": "Feb. 19",
//       "Platform": "WIndows",
//       "Value": 600
//     },
//     {
//       "Date": "Feb. 19",
//       "Platform": "Apple",
//       "Value": 725
//     },
//     {
//       "Date": "Feb. 19",
//       "Platform": "IPhone",
//       "Value": 675
//     }
//   ],
//   series = [{
//     name: 'WIndows',
//     data: []
//   }, {
//     name: 'Apple',
//     data: []
//   }, {
//     name: 'IPhone',
//     data: []
//   }];

// data.forEach(point => {
//   series.forEach(series => {
//     if (series.name === point.Platform) {
//       series.data.push({
//         x: new Date(point.Date).getTime(),
//         y: point.Value
//       })
//     }
//   });
// });

// Highcharts.chart('container', {

//   xAxis: {
//     type: 'datetime'
//   },

//   series: series

// });
