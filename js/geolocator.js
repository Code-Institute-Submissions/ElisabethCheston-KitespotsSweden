        // - GEOLOCATOR - //

    $(document).ready(function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log();
                L.circle([position.coords.latitude, position.coords.longitude], {
                    fillColor: 'red',
                    fillOpacity: 0.7,
                    radius: 6500,
                    weight: 1
                }).addTo(map);
            });
        } else {
            console.log("Geolocation missing"); // geolocation is not available
        }
    });