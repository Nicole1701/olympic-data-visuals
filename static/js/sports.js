let sportsData = d3.json("api/sports").then((data) => {
       console.log(data);

    series = [{
        name: 'Summer',
        data: [],
        color: '#FF0000'
    },{
        name: 'Winter',
        data: [],
        color: '#000080'
    }];

data.forEach(point => {
    series.forEach(series => {
        if (series.name === point.season) {
            series.data.push({
              x: point.year,
              y: point.sport
            })
        }
    });
});

Highcharts.chart('sports-container', {
    chart: {
        height: 1000,
        width: 1500,
        type: 'bar'
    },
    title: {
        text: 'Number of Olympic Sports',
        style: {
            fontSize: '20px'
        }
    },
    xAxis: {
        type: 'category',
        tickInterval: 2,
        showFirstLabel: true,
        startOnTick: false,  
        title: {
            text: 'Year',
            style: {
                fontSize: '26px'
                }
        },
        reversed: false,
        labels: {
            step: 2,
            allowOverlap: true,
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        min: 0,
        max: 40,
        title: {
            text: 'Number of Sports',
            align: 'middle',
            style: {
                fontSize: '26px'
            }
        },
        labels: {
            overflow: 'justify',
            style: {
                fontSize: '16px'
            }
        }
    },
    tooltip: {
        valueSuffix: ' events'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 80,
        floating: true,
        borderWidth: 1,
        itemStyle: {
            fontSize: '18px'
        },
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: series

    }); //these close highcharts line 23

}); //these close line 1