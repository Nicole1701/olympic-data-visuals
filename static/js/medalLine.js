let medalData = d3.json("api/medals").then((data) => {
    console.log(data);

    series = [{
        name: '2016',
        data: []
    }, {
        name: '2012',
        data: []
    }, {
        name: '2008',
        data: []
    }, {
        name: '2004',
        data: []
    }];

    data.forEach(point => {
        series.forEach(series => {
            if (series.name === point.year) {
                series.data.push({
                    x: new year(point.year),
                    y: point.medal
                })
            }
        });
    });

    Highcharts.chart('container', {

        xAxis: {
            type: 'datetime'
        },

        series: series

    });
});