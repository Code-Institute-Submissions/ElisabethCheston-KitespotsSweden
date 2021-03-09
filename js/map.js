
// - MAPS - //

// - Basemaps variables - //
var hybrid = L.esri.basemapLayer('ImageryClarity');
var topographic = L.esri.basemapLayer('Topographic');
var streets = L.esri.basemapLayer('Streets');
var darkGray = L.esri.basemapLayer('DarkGray');

// - Create an on load ESRI basemap - //
var map = new L.map('map', {
    center: [62.45, 17.45],
    zoom: 5,
    attributionControl: false
});
L.esri.basemapLayer('Topographic').addTo(map);


// - ATTRIBUTION - //

var pageAttribution = new L.control.attribution({
    showAttribution: true, 
    position: 'center' 
});



// - GEOLOCATOR - //

// Reference - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
$(document).ready(function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log();
            L.circle([position.coords.latitude, position.coords.longitude], {
                fillColor: "#FDFF00",
                fillOpacity: 0.7,
                color: "#FDFF00",
                radius: 1100,
                weight: 3,
                opacity: 0.8
            }).addTo(map);
        });
    } else {
        console.log("Geolocation missing"); // geolocation is not available
    }
});



// - KITESPOTS DROPDOWNLIST - //

// Reference - https://www.codota.com/code/javascript/functions/leaflet/DomUtil
var clusterSpots = L.markerClusterGroup();
// - Variable for search source(kitespots) - //
var searchSpots = L.geoJson(kitespots, {
    onEachFeature: function (feature, layer) {
        var popup = '';
        if (feature.properties.name) {
            popup += '<center><img src="images/kitesurf1.png"style="width:80px;height:200x;"/></center>' + '<p><b> ' + feature.properties.name + '</b><br/>' + "Wind Direction: " + feature.properties.windDirection + '<br/>' + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>";
        }
        layer.bindPopup(popup);
    }
});
// - Create search engine and place it on map - //
var selector = L.control({
    position: 'topright',
    opacity: 0.8,
    size: 10
});
selector.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'list-group-item');
    div.innerHTML = '<select id = "selectSpot"><option value = "init">CHOOSE A KITESPOTS</option></select>';
    return div;
};
selector.addTo(map);
// - Function to browse and choose spots - //
searchSpots.eachLayer(function (layer) {
    var spotChoice = document.createElement("option");
    spotChoice.innerHTML = layer.feature.properties.label + " - " + layer.feature.properties.name;
    spotChoice.value = layer._leaflet_id;
    L.DomUtil.get("selectSpot").appendChild(spotChoice);
});
// - The selectSpot variable for the DomEvent listener. - //
var selectSpot = L.DomUtil.get("selectSpot");
// - Select kitespot on click - //
L.DomEvent.addListener(selectSpot, 'click', function (e) {
    L.DomEvent.stopPropagation(e);
});
// - ChangeHandler zooms in on choosen spot with popup. //
L.DomEvent.addListener(selectSpot, 'change', changeHandler);
function changeHandler(e) {
    var selected = searchSpots.getLayer(e.target.value);
    clusterSpots.zoomToShowLayer(selected, function () {
        selected.openPopup();
    });
}
clusterSpots.addLayer(searchSpots);
map.addLayer(clusterSpots);



// - STYLE CITY MARKERS - //
// Refrence: https://leafletjs.com/examples/geojson/           
var markerStyle = {
    radius: 4,
    weight: 3,
    color: "#F0E891",
    opacity: 0.6,
    fillColor: "#A50B5E",
    fillOpacity: 0.8,
};



// - CITIES LAYER - //

var city = L.geoJson(cities, {
    pointToLayer: function (features, latlng) {
        return L.circleMarker(latlng, markerStyle)
            .bindPopup("<center><img src='images/cityPic/" + features.properties.cityPic + "' style='width:200px;height:300x;'/></center>" + "<p><b> " + features.properties.city + "</b><br/>" + "County: " + features.properties.admin_name + "<br/>" + "Population: " + features.properties.population + "</p>" + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>");
    }
});



// - CITY POPUP TO FIT ON MAP - //

// Reference - https://jsfiddle.net/09pe8ko6/
document.querySelector(".leaflet-popup-pane").addEventListener("load", function (event) {
    var target = event.target,
        tagName = target.tagName,
        popup = map._popup;
    //console.log("got load event from " + tagName);
    if (tagName === "IMG" && popup) {
        popup.update();
    }
}, true); // Capture the load event, because it does not bubble.



// - POLYGONS LAYER - //

// Reference - https://gis.stackexchange.com/a/385670/175494 - Falke Design
var polyRegions = L.featureGroup();
//fetch json data..
fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=sverige-lan-counties-of-sweden&q=&rows=22")
    .then(response => response.json())
    .then(data => {
        // ..under 'records'..
        data.records.forEach((d) => {
            //... 'fields.geo_shape' where coordinate data is.
            var polyJson = d.fields.geo_shape;
            //view data in console
            console.log(polyJson);
            var layer = L.GeoJSON.geometryToLayer(polyJson, {
                radius: 6,
                color: "#f0fff0",
                opacity: 0.8,
                fillColor: "#ACACE6",
                fillOpacity: 0.3,
                weight: 1
            });
            polyRegions.addLayer(layer);

            //Create circleMarker for popup of region name
            var regionPoint = L.GeoJSON.coordsToLatLng(d.geometry.coordinates);
            var circle = L.circleMarker(regionPoint, {
                radius: 5,
                weight: 3,
                color: "#F8DE7E",
                opacity: 0.4,
                fillColor: "#30BfBf",
                fillOpacity: 0.7

            }).bindPopup("<p><b> " + d.fields.lan_namn + "</b></p>");
            polyRegions.addLayer(circle);
        });
    });



// - BRING OVERLAY TO FRONT - //

map.on('click', function () {
    city.bringToFront();
});



// - CONTROL LAYERS - //

var basemapLayers = {
    "Topographic": topographic,
    "Hybrid": hybrid,
    "Streets": streets,
    "DarkGray": darkGray
};
var overlays = {
    'Cities': city,
    'Regions': polyRegions

};
// - Add it all to the map - //
L.control.layers(basemapLayers, overlays).addTo(map);