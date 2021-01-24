
                // - MAPS - //

        // - Basemaps variables - //
    var hybrid = L.esri.basemapLayer('ImageryClarity');
    var topographic = L.esri.basemapLayer('Topographic');
    var streets = L.esri.basemapLayer('Streets');
    var nationalGeographic = L.esri.basemapLayer('NationalGeographic');

        // - Create an on load ESRI basemap - //
    var map = L.map('map', {
        center: [62.45,17.45],
        zoom: 5,
        minZoom: 1,
        maxZoom: 16,
        bounceAtZoomLimits: false
    }),
    baseImagery = L.layerGroup();
    L.esri.basemapLayer('Topographic').addTo(map);


                // - ZOOM FUNCTION FOR OVERLAYS - //
            //Refrence: https://stackoverflow.com/questions/45286918/leafletjs-dynamically-bound-map-to-visible-overlays
    var swed = [[68.4,25], [55,10]]; //create variable with SRC coordinate scale
    map.on('layeradd layerremove', function () {
        // Create new empty bounds
        var regionBounds = new L.LatLngBounds();
        // Iterate the map's layers
        map.eachLayer(function (layer) {
            // Check if layer is a featuregroup
            if (layer instanceof L.FeatureGroup) {
                // Extend bounds with group's bounds
                regionBounds.extend(layer.getBounds());
            }
        });
        // Check if bounds are valid (could be empty)
        if (regionBounds.isValid()) {
            
            //function onClick(event) {
            //    map.zoom([event.latlng])
           // }
            // Valid, fit bounds
            map.fitBounds(regionBounds);

        } else {
            // Invalid, fit world
            map.fitBounds(swed);
        }
    });




        // - Control layers - //
    var baseLayers = {
            "Hybrid": hybrid,
            "Topographic": topographic,
            "Streets": streets,
            "National Geographic":  nationalGeographic
    };
    var overlays = {       
         /*   'All Kitespots': clusterSpots,*/
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