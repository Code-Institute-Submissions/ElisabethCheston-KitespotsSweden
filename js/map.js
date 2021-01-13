

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
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"pink"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["windDirection"] == "S" || "SW/S" || "S/SE" || "SW/S/SE"
            },
            filter: function(feature, layer) {   
                return (feature.properties.windDirection == "S" || "SW/S" || "S/SE" || "SW/S/SE"
            );
        }       
    });  
    southSpotCluster.addLayer(kitespotS);

        // - Cluster and popups to kitespots facing WEST - //
    var westSpotCluster = new L.markerClusterGroup();
    var kitespotW = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["windDirection"] == "gotland"
            },
            filter: function(feature, layer) {   
                return (feature.properties.windDirection == "gotland"
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
                opacity: .8,
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
    var northCluster = new L.markerClusterGroup();
    var northSpots = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"red"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["id"] == "north"
            },
            filter: function(feature, layer) {   
                return (feature.properties.id == "north"
            );
        }       
    });
    northCluster.addLayer(northSpots);


                // - SEARCH ENGINE - //

        // - Reference; https://stackoverflow.com/questions/35772717/searching-markers-with-leaflet-control-search-from-drop-down-list - //                        
 var clusterSpots = L.markerClusterGroup();                
        // - Variable for search source(kitespots) - //
        var searchSpots = L.geoJson(kitespots, {
        onEachFeature: function(feature, layer) {
        var popup = '';
        if (feature.properties.name) {
            popup += "<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>";
            }
        layer.bindPopup(popup);
    }
        });
        // - The search engine and place it on the map - //
        var selector = L.control({
            position: 'topright',
            opacity: 0.8,
            size: 12
        });
        selector.onAdd = function(map) {
            var div = L.DomUtil.create('div', 'mySelector');
            div.innerHTML = '<select id = "selectSpot"><option value = "init">KITESPOTS</option></select>';
            return div;
        };
        selector.addTo(map);

        // - Function to browse and choose spots - //
    searchSpots.eachLayer(function(layer) {
        var spotChoice = document.createElement("option");
        spotChoice.innerHTML = layer.feature.properties.name;
        spotChoice.value = layer._leaflet_id;
        L.DomUtil.get("selectSpot").appendChild(spotChoice);
    });
        // - The selectSpot variable for the DomEvent listener. - //
    var selectSpot = L.DomUtil.get("selectSpot");

        // - Select kitespot on click - //
    L.DomEvent.addListener(selectSpot, 'click', function(e) {
        L.DomEvent.stopPropagation(e);
    });
        // - ChangeHandler zooms in on choosen spot with popup.""
    L.DomEvent.addListener(selectSpot, 'change', changeHandler);
    function changeHandler(e) {
        if (e.target.value == "init") {
            map.closePopup();
        } else {
            var selected = searchSpots.getLayer(e.target.value);
            clusterSpots.zoomToShowLayer(selected, function() {
                selected.openPopup();
            })
        }
    }
    clusterSpots.addLayer(searchSpots);
    
    map.addLayer(clusterSpots);


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
        'NORTH': northCluster
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
