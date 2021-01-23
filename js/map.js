    // - FIX THIS -//
/*
    // - Snap geolocation to "start" in directionForm
    // Then any click after search engine zoom, zoom out
    // - Define "link"
    // - If any of the kitespots layers are clicked in the control, remove the spots on the loadmap.
*/
        // - Basemaps variables - //
    var hybrid = L.esri.basemapLayer('ImageryClarity');
    var topographic = L.esri.basemapLayer('Topographic');
    var streets = L.esri.basemapLayer('Streets');
    var nationalGeographic = L.esri.basemapLayer('NationalGeographic');


        // - Create an on load ESRI basemap - //
    var map = L.map('map', {
        center: [62.45,17.45],
        zoom: 5
    }),
    baseImagery = L.layerGroup();
    L.esri.basemapLayer('Topographic').addTo(map);

L.control.scale().addTo(map);
                        // - GEOLOCATOR - //
    /*
    Reference;
    https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    */
    $(document).ready(function() {
        
    //baseImagery = L.layerGroup();
    //L.esri.basemapLayer('ImageryClarity').addTo(map);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log();
                L.circle([position.coords.latitude, position.coords.longitude], {
                    radius: 10000,
                    weight: 1,
                    fillColor: 'green',
                    fillOpacity: 0.7
                }).addTo(map);
            });
        } else {
            console.log("Geolocation missing"); // geolocation is not available
        }
    });


                        // - SEARCH ENGINE - //
    /*
    References;
    https://stackoverflow.com/questions/35772717/searching-markers-with-leaflet-control-search-from-drop-down-list
    https://www.codota.com/code/javascript/functions/leaflet/DomUtil
    */

    var clusterSpots = L.markerClusterGroup();
        // - Variable for search source(kitespots) - //
    var searchSpots = L.geoJson(kitespots, {
        onEachFeature: function(feature, layer) {
            var popup = '';
            if (feature.properties.name) {
                popup += "<p><b> "+feature.properties.name + "</b><br/>" 
                + "Wind Direction: " + feature.properties.windDirection 
                + "</p>" + "<a><b></b>GET HERE</b></a>"; //link;
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
        var selected = searchSpots.getLayer(e.target.value);
            clusterSpots.zoomToShowLayer(selected, function() {
                selected;
                //enable.allspotsCluster();
            })
        }
    // -- -- -- -- -- --  Call tutor  -- -- -- -- -- -- -- -- //
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

    clusterSpots.addLayer(searchSpots);
     map.addLayer(clusterSpots);


            // - GEOJSON GROUPS WITH POPUPS IN CONTROL BOX - //
    /* 
        - Clustering markers:       https://github.com/Leaflet/Leaflet.markercluster
        - Add geoJson to Leaflet;   https://leafletjs.com/reference-1.7.1.html#geojson
                                    https://leafletjs.com/examples/geojson/
        - Add markers to control:   https://leafletjs.com/examples/layers-control/
                                    https://esri.github.io/esri-leaflet/examples/layers-control.html
        - Add custom markers:       https://leafletjs.com/examples/custom-icons/                                                                                
    */

        //var searchLink = ("<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>");


        // - Cluster and popups to kitespots North - //
    var allspotsCluster = new L.markerClusterGroup();
    var allspots = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8
            })
            .bindPopup("<p><b> "+feature.properties.name + "</b><br/>" 
                + "Wind Direction: " + feature.properties.windDirection 
                + "</p>" + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>"); 
        },
    });
        allspotsCluster.addLayer(allspots);
  

        // - Cluster and popups to kitespots North - //
    var northCluster = new L.markerClusterGroup();
    var north = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                icon:"pink"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>" + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'>GET HERE</a>");
        },
        onEachFeature: function (feature) {
            feature["properties"]["label"] == "NORTH"
        },
        filter: function(feature) {   
            return (feature.properties.label == "NORTH");
        }       
    });
    //(map.fitBounds(north.getBounds());
    //var bounds = L.latLngBounds(kitespots);
    //map.fitBounds(bounds);
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
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "NORTHEAST"
            },
            filter: function(feature) {   
                return (feature.properties.label == "NORTHEAST"
            );
        }       
    });       
    northeastCluster.addLayer(northeast);

    
        // - Cluster and popups to kitespots Mid East - //
    var mideastCluster = new L.markerClusterGroup();
    var mideast = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "MIDEAST"
            },
            filter: function(feature) {   
                return (feature.properties.label == "MIDEAST"
            );
        }       
    });       
    mideastCluster.addLayer(mideast);


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
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "ÅLAND"
            },
            filter: function(feature) {   
                return (feature.properties.label == "ÅLAND"
            );
        }       
    });       
    alandCluster.addLayer(aland); 
    

        // - Cluster and popups to kitespots Gotland - //
    var gotlandCluster = new L.markerClusterGroup();
    var gotland = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "GOTLAND"
            },
            filter: function(feature) {   
                return (feature.properties.label == "GOTLAND"
            );
        }       
    });       
    gotlandCluster.addLayer(gotland);
    
    
        // - Cluster and popups to kitespots Öland - //
    var olandCluster = new L.markerClusterGroup();
    var oland = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "ÖLAND"
            },
            filter: function(feature) {   
                return (feature.properties.label == "ÖLAND"
            );
        }       
    });       
    olandCluster.addLayer(oland);
    
    
        // - Cluster and popups to kitespots South East - //
    var southeastCluster = new L.markerClusterGroup();
    var southeast = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "SOUTHEAST"
            },
            filter: function(feature) {   
                return (feature.properties.label == "SOUTHEAST"
            );
        }       
    });       
    southeastCluster.addLayer(southeast);
    
    
        // - Cluster and popups to kitespots South - //
    var southCluster = new L.markerClusterGroup();
    var south = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "SOUTH"
            },
            filter: function(feature) {   
                return (feature.properties.label == "SOUTH"
            );
        }       
    });       
    southCluster.addLayer(south);
    
    
        // - Cluster and popups to kitespots south west - //
    var southwestCluster = new L.markerClusterGroup();
    var southwest = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "SOUTHWEST"
            },
            filter: function(feature) {   
                return (feature.properties.label == "SOUTHWEST"
            );
        }       
    });       
    southwestCluster.addLayer(southwest);
    
    
        // - Cluster and popups to kitespots north west - //
    var northwestCluster = new L.markerClusterGroup();
    var northwest = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "NORTHWEST"
            },
            filter: function(feature) {   
                return (feature.properties.label == "NORTHWEST"
            );
        }       
    });       
    northwestCluster.addLayer(northwest);
    
    
        // - Cluster and popups to kitespots Vänern - //
    var vanernCluster = new L.markerClusterGroup();
    var vanern = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "VÄNERN"
            },
            filter: function(feature) {   
                return (feature.properties.label == "VÄNERN"
            );
        },
              
    });       
    vanernCluster.addLayer(vanern);
    

        // - Cluster and popups to kitespots Vättern - //
    var vatternCluster = new L.markerClusterGroup();
    var vattern = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["windDirection"] == "SW/S" && "SW/S" && "S" && "SW/S/SE"
                //feature["properties"]["windDirection"] == "S/SW"
            },
            filter: function(feature) {   
                return (feature.properties.windDirection == "SW/S" && "SW/S" && "S" && "SW/S/SE"
            );
        }       
    });       
    vatternCluster.addLayer(vattern);
  
    

    // -- -- -- -- -- -- -- CHECK WITH TUTOR -- -- -- -- -- -- -- //
/*
    var regionLayers = northCluster || northeastCluster || mideastCluster || alandCluster || gotlandCluster || olandCluster || southeastCluster || southCluster || southwestCluster || northwestCluster || vatternCluster || vanernCluster

    document.getElementsByName(northCluster).addEventListener("select", click() {
        var regionLayers = document.getElementsByName("checked");
        if (regionLayers.checked.display =="true") 
        {
            clusterSpots.checked.display = "false";
            //checks.disable = false
        } 
        else
        {
            clusterSpots.checked.display = "true"
            //checks.disable = true
        }
    }) 
*/
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //
 

        // - Control layers - //
    var baseLayers = {
            "Hybrid": hybrid,
            "Topographic": topographic,
            "Streets": streets,
            "National Geographic":  nationalGeographic
    };
    var overlays = {       
            'All Kitespots': clusterSpots,
            'North': northCluster,
            'North East': northeastCluster,
            'Mid East': mideastCluster,
            'Åland': alandCluster,
            'Gotland': gotlandCluster,
            'Öland': olandCluster,
            'South East': southeastCluster,
            'South': southCluster,
            'South West': southwestCluster,
            'North West': northwestCluster,
            'Vänern': vanernCluster,
            'Vättern': vatternCluster
    };
  
        // - Add it all to the map - //
    L.control.layers(baseLayers, overlays).addTo(map);


/* 
// Google direction api key: AIzaSyBkrAJhwaHyBY6oDjbXUyyjyFGC9LKD1-w  
// MapBox api: pk.eyJ1IjoibGlhaGNoZXN0b24iLCJhIjoiY2trMDRyaDJ5MGU2MzJ2bW51d3J2enhmNyJ9.2JTF2IL2y0lF-lcUtNQM9g
*/