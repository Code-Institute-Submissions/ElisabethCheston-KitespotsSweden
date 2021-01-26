
                // - MAPS - //

        // - Basemaps variables - //
    var hybrid = L.esri.basemapLayer('ImageryClarity');
    var topographic = L.esri.basemapLayer('Topographic');
    var streets = L.esri.basemapLayer('Streets');
    var nationalGeographic = L.esri.basemapLayer('NationalGeographic');
    
        // - Create an on load ESRI basemap - //
    var map = new L.map('map', {
        center: [62.45,17.45],
        zoom: 5
    }),
    baseImagery = L.layerGroup();
    L.esri.basemapLayer('Topographic').addTo(map);



        // - CONTROL LAYERS - //

    var basemapLayers = {
            "Topographic": topographic,
            "Hybrid": hybrid,
            "Streets": streets,
            "National Geographic":  nationalGeographic
    };
  
        // - Add it all to the map - //
    L.control.layers(basemapLayers).addTo(map);

