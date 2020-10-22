// Creating map object
var myMap = L.map("map", {
    center: [40.7128, 0],
    zoom: 2
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var link = "countries.geojson";

// Function that will determine the color of a country based on the medals count? it belongs to
function chooseColor(ADMIN) {
    switch (ADMIN) {
        case "Aruba":
            return "yellow";
        case "Algeria":
            return "yellow";
        case "China":
            return "red";
        case "Russia":
            return "red";
        case "United States of America":
            return "blue";
        case "France":
            return "yellow";
        case "Brazil":
            return "green";
        case "Japan":
            return "purple";
        default:
            return "#d3ffff";
    }
}

// bring in cleaned olympic data from kaggle
// mouseOn move shows pop-up with country name
// mouseOff undo move 
// bind the pop-up and fill popup with country name and medal count
// clickON move zooms in
// and shows pop-up with medal count

// Grabbing our GeoJSON data..
d3.json(link).then(data => {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Style each feature (in this case a country)
        style: function(feature) {
            return {
                color: "black",
                // Call the chooseColor function to decide which color to color our country (color based on goals?)
                fillColor: chooseColor(feature.properties.ADMIN),
                fillOpacity: 0.1,
                weight: 0.5
            };
        },
        // Called on each feature
        onEachFeature: function(feature, layer) {
            // Set mouse events to change map styling
            layer.on({
                // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.85
                    });
                },
                // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.1
                    });
                },
                // When a feature (country) is clicked, it is enlarged to fit the screen
                click: function(event) {
                    myMap.fitBounds(event.target.getBounds());
                }
            });
            // Giving each feature a pop-up with information pertinent to it
            layer.bindPopup("<h1>" + feature.properties.ADMIN + "</h1> <hr> <h2>" + "Medal Count and Stuff" + "</h2>");

        }
    }).addTo(myMap);
});


// create time slider ? Is this a New Library we haven't gone over in class?)
// match geoJSON country names with kaggle Olympic data country names
// create legend/key in top corner with the followingn options:
// user input: Summer/Winter toggle that changes the CSS theme and data layer
// user input: Year input that moves the time slider to an exact year
// user input Filter: Female medals, Male medals
// user input Filter: ??Team medals, Individual medals??