Highcharts.chart('sports-container', {
    chart: {
        height: 1000,
        // backgroundColor: '#D3D3D3',
        type: 'bar'
    },
    // series: {
    //     type: 'bar',
    //     borderColor: '#FFFFFF'
    // },
    title: {
        text: '120 Years of Olympic Sports',
        style: {
            fontSize: '30px'
        }
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/home">Kaggle.com</a>',
        style: {
            fontSize: '20px'
        }
    },

    xAxis: {
        categories: [1896, 1900, 1904, 1906, 1908, 1912, 1920, 1924, 1928, 1932, 1936, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016],
        title: {
            text: 'Years',
            style: {
                fontSize: '26px'
            }
        },
        labels: {
            style: {
                fontSize: '20px'
            }
        }
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Sport Count',
            align: 'middle',
            style: {
                fontSize: '26px'
            }
        },
        labels: {
            overflow: 'justify'
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
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Summer',
        data: [9, 20, 18, 13, 24, 17, 25, 20, 17, 18, 24, 20, 19, 19, 19, 21, 20, 23, 23, 23, 25, 27, 29, 31, 34, 34, 34, 32, 34],
        color: '#FF0000'
    }, {
        name: 'Winter',
        data: [0, 0, 0, 0, 0, 0, 0, 10, 8, 7, 8, 9, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 12, 12, 14, 15, 15, 15, 15],
        color: '#000080'
    }
    ]
});