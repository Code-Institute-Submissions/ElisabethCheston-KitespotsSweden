               // - KITESPOT LAYERS - //
/*
        // - Cluster and popups to kitespots All kitespots - //
    var allspotsCluster = new L.markerClusterGroup();
    var allspots = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                radius:6,
                opacity: .1
            })
            .bindPopup("<p><b> "+feature.properties.name 
            + "</b><br/>" + "Wind Direction: " 
            + feature.properties.windDirection + "</p>" 
            + "<a href ='https://www.google.se/maps/@59.3036556,17.9778991,14z'><b> GET HERE </b></a>"); 
        },
    });
        allspotsCluster.addLayer(allspots);
  */

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
    northCluster.addLayer(north);


        // - Cluster and popups to kitespots North East - //
    var northeastCluster = new L.markerClusterGroup();
    var northeast = L.geoJson(kitespots, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                //icon: greenflag.png,
                radius:6,
                opacity: .8,
                color:"green"
            }).bindPopup("<p><b> "+feature.properties.name 
            + "</b><br/>" + "Wind Direction: " 
            + feature.properties.windDirection + "</p>");
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
                opacity: .8
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
                opacity: .8
            }).bindPopup("<p><b> "+feature.properties.name + "</b><br/>" + "Wind Direction: " + feature.properties.windDirection + "</p>");
        },
            onEachFeature: function (feature) {
                feature["properties"]["label"] == "VÄTTERN"
            },
            filter: function(feature) {   
                return (feature.properties.label == "VÄTTERN"
            );
        },
              
    });       
    vatternCluster.addLayer(vattern);    
