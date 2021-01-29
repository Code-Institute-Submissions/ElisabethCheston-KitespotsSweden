

                // - MAPS - //

        // - Basemaps variables - //
    var hybrid = L.esri.basemapLayer('ImageryClarity');
    var topographic = L.esri.basemapLayer('Topographic');
    var streets = L.esri.basemapLayer('Streets');
    
        // - Create an on load ESRI basemap - //
    var map = new L.map('map', {
        center: [62.45,17.45],
        zoom: 5
    }),
    baseImagery = L.layerGroup();
    L.esri.basemapLayer('Topographic').addTo(map);


                // - SEARCH ENGINE - //

    var clusterSpots = L.markerClusterGroup();
        // - Variable for search source(kitespots) - //
    var searchSpots = L.geoJson(kitespots, {
        onEachFeature: function(feature, layer) {
            var popup = '';
            if (feature.properties.name) {
                popup += '<img src="images/kitesurf1.png" style="width:50px;height:50px;"> <p><b> '
                + feature.properties.name + '</b><br/>' + "Wind Direction: " 
                + feature.properties.windDirection + '<br/>'
                + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>";
            }
            layer.bindPopup(popup);
        }
    });
        // - Create search engine and place it on the map - //
    var selector = L.control({
        position: 'topright',
        opacity: 0.8,
        size: 10
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
        var selected = searchSpots.getLayer(e.target.value);
        clusterSpots.zoomToShowLayer(selected, function() {
            selected.openPopup();       
        });
        }
    clusterSpots.addLayer(searchSpots);
    map.addLayer(clusterSpots);


    
                // - GET JSON DATA WITH AJAX TO OVERLAY REGION - //
    //Reference: https://medium.com/@maptastik/loading-external-geojson-a-nother-way-to-do-it-with-jquery-c72ae3b41c01

    var regionsData = ("https://public.opendatasoft.com/api/records/1.0/search/?dataset=sverige-lan-counties-of-sweden&q=&rows=22&format=geojson");

    // Get the data and turn it to geojson
    $.ajax({
        url: regionsData,
        dataType: "json",
        success: function(data) {
            $(data.features).each(function(key, data) {
                regions.addData(data);
            });
             regions.addTo(map);
        },
        error: function(error) {
            console.log('error geojson')
        }
    });
    // Put it on the map
    var regions = L.geoJSON(null, {
    pointToLayer: function (features, latlng) {
        return L.circleMarker(latlng, {
            radius: 5,
            color: "#446CCF",
            opacity: .8,
            fillColor: "#30BFBF",
            fillOpacity: 0.6,
            weight: 2
        })            
        .bindPopup("<p><b> " + features.properties.lan_namn + "</b></p>");
    }  
    });

                    // - STYLE MARKERS - //
         // Refrence: https://leafletjs.com/examples/geojson/           
    var geojsonMarkerStyle = {
        radius: 3,
        fillColor: "#BA160C",
        color: "#BA160C",
        weight: 1,
        opacity: .9,
        fillOpacity: 0.7
    };

                   // - CITIES LAYERS - //

    var city = L.geoJson(cities, {
    pointToLayer: function (features, latlng) {
        return L.circleMarker(latlng, geojsonMarkerStyle)
                .bindPopup("<p><b> "+features.properties.city + "</b><br/>" 
            + "County: " + features.properties.admin_name + "<br/>"
            + "Population: " + features.properties.population + "</p>" 
            + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>");

        }
    }).addTo(map);


                   // - KITESPOT LAYERS - //

        // - Cluster and popups to kitespots All kitespots - //
    var allspotsCluster = new L.markerClusterGroup();
    var allspots = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .9
            })
            .bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>" + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>"); 
        },
    });

        // - CONTROL LAYERS - //

    var basemapLayers = {
        "Topographic": topographic,
        "Hybrid": hybrid,
        "Streets": streets
    }; 
    var overlays = {
        'Counties Names': regions,
        'Cities': city,
        //'Counties': polyRegions,
        'All': allspots
    };
  
    
        // - Add it all to the map - //
    L.control.layers(basemapLayers, overlays).addTo(map);

    var attribution = L.control.attribution({prefix: '<span class="AttributionClass"></span>'}).addTo(map);

