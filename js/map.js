
//mapboxgl.accessToken = "pk.eyJ1IjoibGlhaGNoZXN0b24iLCJhIjoiY2tpbG5seXE5MGxhYzJ6bXd4Y2xvN2xwMiJ9.efl4PsN0s5YHbu22oEqrlg"
//import createFilter from "feature-filter-geojson";
/*
function geojson_filter(geojson, filter_exp) {
  var features = geojson.features;
  geojson.features = [];
  var geojson_clon = Object.assign({}, geojson);
  geojson.features = features;

  var filter = createFilter(filter_exp);
  geojson_clon .features = filter(geojson.features, filter);    
  return geojson_clon;
}

var filter = ["all",["==", "windDirection", "S"],];

var filtered_geojson = geojson_filter(kitespots, filter);
*/


        // - Basemaps variables - //
    var hybrid = L.esri.basemapLayer('ImageryClarity');
    var topographic = L.esri.basemapLayer('Topographic');
    var streets = L.esri.basemapLayer('Streets');

        // - Create an on load ESRI basemap - //
    var map = L.map('map', {
        center: [62.45,17.45],
        zoom: 5
    }),
    baseImagery = L.layerGroup();
    L.esri.basemapLayer('ImageryClarity').addTo(map);

        /* 
        Url references for clustering and adding geoJson to markers in control layer; 

        - Clustering markers:       https://github.com/Leaflet/Leaflet.markercluster

        - Add geoJson to Leaflet;   https://leafletjs.com/reference-1.7.1.html#geojson
                                    https://leafletjs.com/examples/geojson/

        - Add markers to control:   https://leafletjs.com/examples/layers-control/
                                    https://esri.github.io/esri-leaflet/examples/layers-control.html

        - Add custom markers:       https://leafletjs.com/examples/custom-icons/                                                                                
        */
                // - Cluster and popups to ALL kitespots - //

    var allSpotsCluster = new L.markerClusterGroup();
    var allKitespots = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng)
            .bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        }
    });
    allSpotsCluster.addLayer(allKitespots);

        // - Cluster and popups to kitespots facing SOUTH   - //
    var southSpotCluster = new L.markerClusterGroup();
    var kitespotS = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng)
            .bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        }
    });
    southSpotCluster.addLayer(kitespotS);

        // - Cluster and popups to kitespots facing WEST - //
    var westSpotCluster = new L.markerClusterGroup();
    var kitespotW = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .7,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["windDirection"] == "W"
            },
            filter: function(feature, layer) {   
                return (feature.properties.windDirection == "W"
            );
        }       
    });       
    westSpotCluster.addLayer(kitespotW);

        // - Cluster and popups to kitespots facing NORTH - //
    var northSpotCluster = new L.markerClusterGroup();
    var kitespotN = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .7,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["windDirection"] == "N"
            },
            filter: function(feature, layer) {   
                return (feature.properties.windDirection == "N"
            );
        }       
    });       
    northSpotCluster.addLayer(kitespotN);

        // - Cluster and popups to kitespots facing EAST - //
    var eastSpotCluster = new L.markerClusterGroup();
    var kitespotE = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .7,
                color:"red"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["windDirection"] == "E"
            },
            filter: function(feature, layer) {   
                return (feature.properties.windDirection == "E"
            );
        }       
    });
    eastSpotCluster.addLayer(kitespotE);


        // - Control layers - //
        var baseLayers = {
            "Hybrid": hybrid,
            "Topographic": topographic,
            "Streets": streets
        };
        var overLays = {
            'All Kitespots': allSpotsCluster,
            'Kitespots S': southSpotCluster,
            'Kitespots W': westSpotCluster,
            'Kitespots N': northSpotCluster,
            'Kitespots E': eastSpotCluster
        }
        
        L.control.layers(baseLayers, overLays).addTo(map);

/*
        // - Kitespots from geojson made in GeoJson.io - //
        var allKitespotsGeoJson = kitespots

        var allKitespots = L.geoJSON(allKitespotsGeoJson, {
            style: function (feature) {
                return {color: feature.properties.color};
            }
        }).bindPopup(function (layer) {
            return layer.feature.properties.name;
        }).addTo(map);

        select values;
        https://stackoverflow.com/questions/26128274/converting-geojson-object-to-javascript-array
*/
