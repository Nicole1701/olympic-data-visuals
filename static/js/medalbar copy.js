//** group API return by year https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/ ** */
const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};

var medal_year = d3.json("api/medals").then((data) => {
    console.log(data)
    const medalyear = groupBy(data, "year")
    console.log(medalyear)


    // const medalyearorder = orderBy(medalyear, "medal")
    // console.log(medalyearorder)



});
var realData =
    d3.json("api/medals").then((data) => {
        console.log(data)
        const medalyear = groupBy(data, "year")
        console.log(medalyear);
        console.log(realData);
    //     var dataPrev = {
            
    //         2016: [
    //             ['South Korea', 26],
    //             ['Japan', 64],
    //             ['Australia', 82],
    //             ['Germany', 159],
    //             ['Russia', 115],
    //             ['China', 113],
    //             ['Great Britain', 145],
    //             ['United States', 264]
    //         ],
    //         2012: [
    //             ['South Korea', 61],
    //             ['Japan', 84],
    //             ['Australia', 114],
    //             ['Germany', 94],
    //             ['Russia', 140],
    //             ['China', 125],
    //             ['Great Britain', 126],
    //             ['United States', 248]
    //         ],
    //         2008: [
    //             ['South Korea', 78],
    //             ['Japan', 51],
    //             ['Australia', 149],
    //             ['Germany', 99],
    //             ['Russia', 142],
    //             ['China', 184],
    //             ['Great Britain', 81],
    //             ['United States', 317]
    //         ],
    //         2004: [
    //             ['South Korea', 52],
    //             ['Japan', 93],
    //             ['Australia', 157],
    //             ['Germany', 149],
    //             ['Russia', 27],
    //             ['China', 94],
    //             ['Great Britain', 57],
    //             ['United States', 263]
    //         ]
            
    //     };

    //     var data = {

    //         2016: [
    //             ['South Korea', 26],
    //             ['Japan', 64],
    //             ['Australia', 82],
    //             ['Germany', 159],
    //             ['Russia', 115],
    //             ['China', 113],
    //             ['Great Britain', 145],
    //             ['United States', 264]
    //         ],
    //         2012: [
    //             ['South Korea', 61],
    //             ['Japan', 84],
    //             ['Australia', 114],
    //             ['Germany', 94],
    //             ['Russia', 140],
    //             ['China', 125],
    //             ['Great Britain', 126],
    //             ['United States', 248]
    //         ],
    //         2008: [
    //             ['South Korea', 78],
    //             ['Japan', 51],
    //             ['Australia', 149],
    //             ['Germany', 99],
    //             ['Russia', 142],
    //             ['China', 184],
    //             ['Great Britain', 81],
    //             ['United States', 317]
    //         ],
    //         2004: [
    //             ['South Korea', 52],
    //             ['Japan', 93],
    //             ['Australia', 157],
    //             ['Germany', 149],
    //             ['Russia', 27],
    //             ['China', 94],
    //             ['Great Britain', 57],
    //             ['United States', 263]
    //         ]
            
    //     };

    //     var countries = [{
    //         name: 'South Korea',
    //         flag: 197582,
    //         color: 'rgb(201, 36, 39)'
    //     }, {
    //         name: 'Japan',
    //         flag: 197604,
    //         color: 'rgb(201, 36, 39)'
    //     }, {
    //         name: 'Australia',
    //         flag: 197507,
    //         color: 'rgb(0, 82, 180)'
    //     }, {
    //         name: 'Germany',
    //         flag: 197571,
    //         color: 'rgb(0, 0, 0)'
    //     }, {
    //         name: 'Russia',
    //         flag: 197408,
    //         color: 'rgb(240, 240, 240)'
    //     }, {
    //         name: 'China',
    //         flag: 197375,
    //         color: "#DF0024"
    //     }, {
    //         name: 'Great Britain',
    //         flag: 197374,
    //         color: 'rgb(0, 82, 180)'
    //     }, {
    //         name: 'United States',
    //         flag: 197484,
    //         color: "#0085C7"
    //     }];


    //     function getData(data) {
    //         return data.map(function(country, i) {
    //             return {
    //                 name: country[0],
    //                 y: country[1],
    //                 color: countries[i].color
    //             };
    //         });
    //     }

    //     // function getData(_data) {
    //     //     return _data.map(function(country, i) {
    //     //         return {
    //     //             name: country[0],
    //     //             y: country[1],
    //     //             color: countries[i].color
    //     //         };
    //     //     });
    //     // }

    //     var chart = Highcharts.chart('medalbar', {
    //         chart: {
    //             type: 'column'
    //         },
    //         title: {
    //             text: 'Olympics 2016 - Top 5 Countries by Total Medals Brought Home By Athletes'
    //         },
    //         subtitle: {
    //             text: 'Comparing to results from Olympics 2012 - Source: <ahref="https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table">Wikipedia</a>'
    //         },
    //         plotOptions: {
    //             series: {
    //                 grouping: false,
    //                 borderWidth: 0
    //             }
    //         },
    //         legend: {
    //             enabled: true
    //         },
    //         tooltip: {
    //             shared: true,
    //             headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
    //             pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} medals</b><br/>'
    //         },
    //         xAxis: {
    //             type: 'category',
    //             max: 4,
    //             labels: {
    //                 useHTML: true,
    //                 animate: true,
    //                 formatter: function() {
    //                     var value = this.value,
    //                         output;

    //                     countries.forEach(function(country) {
    //                         if (country.name === value) {
    //                             output = country.flag;
    //                         }
    //                     });

    //                     return '<span><img src="https://image.flaticon.com/icons/svg/197/' + output + '.svg" style="width: 40px; height: 40px;"/><br></span>';
    //                 }
    //             }
    //         },
    //         yAxis: [{
    //             title: {
    //                 text: 'Total Medals Brought Home'
    //             },
    //             showFirstLabel: false
    //         }],
    //         series: [{
    //             color: 'rgb(158, 159, 163)',
    //             pointPlacement: -0.2,
    //             linkedTo: 'main',
    //             data: dataPrev[2016].slice(),
    //             name: '2012'
    //         }, {
    //             name: '2016',
    //             id: 'main',
    //             dataSorting: {
    //                 enabled: true,
    //                 matchByName: true
    //             },
    //             dataLabels: [{
    //                 enabled: true,
    //                 inside: true,
    //                 style: {
    //                     fontSize: '16px'
    //                 }
    //             }],
    //             data: getData(data[2016]).slice()
    //         }],
    //         exporting: {
    //             allowHTML: true
    //         }
    //     });

    //     var years = [2016, 2012, 2008, 2004];

    //     years.forEach(function(year) {
    //         var btn = document.getElementById(year);

    //         btn.addEventListener('click', function() {

    //             document.querySelectorAll('.buttons button.active').forEach(function(active) {
    //                 active.className = '';
    //             });
    //             btn.className = 'active';

    //             chart.update({
    //                 title: {
    //                     text: 'Olympics ' + year + ' - Top 5 Countries by Total Medals Brought Home By Athletes'
    //                 },
    //                 subtitle: {
    //                     text: 'Comparing to results from Olympics ' + (year - 4) + ' - Source: <ahref="https://en.wikipedia.org/wiki/' + (year) + '_Summer_Olympics_medal_table">Wikipedia</a>'
    //                 },
    //                 series: [{
    //                     name: year - 4,
    //                     data: dataPrev[year].slice()
    //                 }, {
    //                     name: year,
    //                     data: getData(data[year]).slice()
    //                 }]
    //             }, true, false, {
    //                 duration: 800
    //             });
    //         });
    //     });
    //     // bring in cleaned olympic medal data from flask app


    //     // d3.json("/api/medals/top").then((data) => {
    //     //     console.log(data);
    //     //     const topmedalyear = groupBy(data, "year")
    //     //     console.log(topmedalyear)
    //     // });
    //     // series = [{
    //     //     name: '2016',
    //     //     data: []
    //     // }, {
    //     //     name: '2012',
    //     //     data: []
    //     // }, {
    //     //     name: '2008',
    //     //     data: []
    //     // }, {
    //     //     name: '2004',
    //     //     data: []
    //     // }];

    //     // topmedalyear.forEach(point => {
    //     //     series.forEach(series => {
    //     //         if (series.year === data.year) {
    //     //             series.data.push({
    //     //                 x: new Date(medalcount.year).getTime(),
    //     //                 y: point.Value
    //     //             })
    //     //         }
    //     //     });
    //     // });

    //     // let medalData = d3.json("api/medals").then((data) => {
    //     //     console.log(data);

    //     //     series = [{
    //     //         name: '2016',
    //     //         data: []
    //     //     }, {
    //     //         name: '2012',
    //     //         data: []
    //     //     }, {
    //     //         name: '2008',
    //     //         data: []
    //     //     }, {
    //     //         name: '2004',
    //     //         data: []
    //     //     }];

    //     //     data.forEach(point => {
    //     //         series.forEach(series => {
    //     //             if (series.name === point.year) {
    //     //                 series.data.push({
    //     //                     x: new year(point.year),
    //     //                     y: point.medal
    //     //                 })
    //     //             }
    //     //         });
    //     //     });

    //     //     Highcharts.chart('medalbar', {

    //     //         xAxis: {
    //     //             type: 'datetime'
    //     //         },

    //     //         series: series

    //     //     });
    //     // });

    //     // //** group API return by year https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/ ** */
    //     // const groupBy = (array, key) => {
    //     //     // Return the end result
    //     //     return array.reduce((result, currentValue) => {
    //     //         // If an array already present for key, push it to the array. Else create an array and push the object
    //     //         (result[currentValue[key]] = result[currentValue[key]] || []).push(
    //     //             currentValue
    //     //         );
    //     //         // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    //     //         return result;
    //     //     }, {}); // empty object is the initial value for result object
    //     // };

    //     // d3.json("api/medals").then((data) => {
    //     //     console.log(data)
    //     //     const medalyear = groupBy(data, "year")
    //     //     console.log(medalyear)

    //     //     // Accepts the array and key


    //     //     // Group by color as key to the person array
    //     //     // const personGroupedByColor = groupBy(person, 'color');
    });