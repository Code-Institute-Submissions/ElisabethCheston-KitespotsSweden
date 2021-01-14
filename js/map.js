

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

        // - Cluster and popups to kitespots North - //
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
                feature["properties"]["label"] == "NORTH"
            },
            filter: function(feature, layer) {   
                return (feature.properties.label == "NORTH"
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "MIDEAST"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "ÅLAND"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "GOTLAND"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "ÖLAND"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "SOUTHEAST"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "SOUTH"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "SOUTHWEST"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "NORTHWEST"
            },
            filter: function(feature, layer) {   
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "VÄNERN"
            },
            filter: function(feature, layer) {   
                return (feature.properties.label == "VÄNERN"
            );
        }       
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
            onEachFeature: function (feature, layer) {
                feature["properties"]["label"] == "VÄTTERN"
            },
            filter: function(feature, layer) {   
                return (feature.properties.label == "VÄTTERN"
            );
        }       
    });       
    vatternCluster.addLayer(vattern);      

    
    /*var svgCounties =  document.createElementNS("https://upload.wikimedia.org/wikipedia/commons/d/df/Sweden_location_map.svg", "svg", );
    // svgElement.setAttribute('NordNordWest, CC BY-SA 3.0', "https://creativecommons.org/licenses/by-sa/3.0", 'via Wikimedia Commons');
    // svgElement.setAttribute('viewBox', "0 0 200 200");
    svgElement.innerHTML = ('rect width="200" height="200"'); // <rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
    var svgElementBounds = [ [ 52.500440,2.250475 ], [ 70.742227,37.934697 ] ];
    L.svgOverlay(svgElement, svgElementBounds).addTo(map); */

        // - Control layers - //
    var baseTree = {
        label: 'MAPS',
        children: [
            {
                label: 'ESRI &#x1f5fa;',
                children: [
                    { label: "Hybrid", hybrid},
                    { label: "Topographic", topographic},
                    { label: "Streets", streets},
                ]
            }
        ]
    };

    var overalysTree = {
        label: 'LAYERS',
        children: [
            {
                label: 'KITESPOTS &#x1f5fa;',
                children: [        
                    { label: 'All', clusterSpots},
                    { label: 'North', northCluster},
                    { label: 'North East', northeastCluster},
                    { label: 'Mid East', mideastCluster},
                    { label: 'Åland', alandCluster},
                    { label: 'Gotland', gotlandCluster},
                    { label: 'Öland', olandCluster},
                    { label: 'South East', southeastCluster},
                    { label: 'South', southCluster},
                    { label: 'South West', southwestCluster},
                    { label: 'North West', northwestCluster},
                    { label: 'Vänern', vanernCluster},
                    { label: 'Vättern', vatternCluster}
                ]
            }
        ]
    };
  
        // - Add it all to the map - //
    L.control.layers.tree(baseTree, overalysTree).addTo(map);