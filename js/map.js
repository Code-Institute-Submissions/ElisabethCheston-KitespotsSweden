

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



                // - SEARCH ENGINE - //
        // - References; - //
        // - https://stackoverflow.com/questions/35772717/searching-markers-with-leaflet-control-search-from-drop-down-list - //
        // - https://www.codota.com/code/javascript/functions/leaflet/DomUtil - //
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
        var div = L.DomUtil.create('div', 'list-group-item');
        div.innerHTML = '<select id = "selectSpot"><option value = "init">KITESPOTS</option></select>';
        return div;
    };
    selector.addTo(map);
        // - Function to browse and choose spots - //
    searchSpots.eachLayer(function(layer) {
        var spotChoice = document.createElement("option");
        spotChoice.innerHTML = layer.feature.properties.label + " - " + layer.feature.properties.name;
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


            /* 
        Url references for clustering and adding geoJson to markers in control layer; 

        - Clustering markers:       https://github.com/Leaflet/Leaflet.markercluster

        - Add geoJson to Leaflet;   https://leafletjs.com/reference-1.7.1.html#geojson
                                    https://leafletjs.com/examples/geojson/

        - Add markers to control:   https://leafletjs.com/examples/layers-control/
                                    https://esri.github.io/esri-leaflet/examples/layers-control.html

        - Add custom markers:       https://leafletjs.com/examples/custom-icons/                                                                                
        */

        // - Cluster and popups to kitespots North   - //
    var northCluster = new L.markerClusterGroup();
    var north = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"pink"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "NORTH EAST"
            },
            filter: function(feature, layer) {   
                return (feature.properties.label == "NORTH EAST"
            );
        }       
    });  
    northCluster.addLayer(north);
    
    
        // - Cluster and popups to kitespots North East - //
    var northeastCluster = new L.markerClusterGroup();
    var northeast = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "NORTH EAST"
            },
            filter: function(feature, layer) {   
                return (feature.properties.label == "NORTH EAST"
            );
        }       
    });       
    northeastCluster.addLayer(northeast);


        // - Cluster and popups to kitespots Åland - //
    var alandCluster = new L.markerClusterGroup();
    var aland = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "ÅLAND"
            },
            filter: function(feature, layer) {   
                return (feature.properties.label == "ÅLAND"
            );
        }       
    });       
    alandCluster.addLayer(aland);      

        // - Control layers - //
    var baseLayers = {
        "Hybrid": hybrid,
        "Topographic": topographic,
        "Streets": streets
    };
    var overLays = {
        'All': clusterSpots,
        'North': northCluster,
        'North East': northeastCluster,
        'Mid East': mideastCluster,
        'Åland': alandCluster,
        //'Gotland': gotlandCluster,
        //'Öland': olandCluster,
        //'South East': southeastCluster,
        //'South': southCluster,
        //'South West': southwestCluster,
        //'North West': southeastCluster,
        //'Vänen': vanenCluster,
        //'Vätten': vattenCluster
    }
        
    L.control.layers(baseLayers, overLays).addTo(map);

/*
    var overLays = {
        'All Kitespots': allSpotsCluster,
        'NORTHEAST': southSpotCluster,
        'GOTLAND': westSpotCluster,
        'ÖLAND': northSpotCluster,
        'SOUTH': northCluster
    }
    */