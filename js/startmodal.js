
// - START POPUP MODAL ONLY SHOWN ONCE  - //

$(window).on('load', function () {
    $('#startModal').modal('show');
});

// - NAME LINK TO START MODE WITHOUT START MODAL - //

$("#startView").click(function() {
  infowindow.close();
  map.fitBounds(bounds);
});