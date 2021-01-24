 /*   
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

*/