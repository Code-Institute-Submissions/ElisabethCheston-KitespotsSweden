                // - GEOLOCATOR - //

    $(document).ready(function() {
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