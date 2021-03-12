
// - START POPUP MODAL ONLY SHOWN ONCE  - //

$(window).on('load', function () {
    $('#startModal').modal('show');
});


/*
$(document).ready(function() {
    var startViewShown = $.cookie('startViewShown');

    // On newer versions of js-cookie, API use:
     // var startViewShown = Cookies.get('startViewShown');

    if (!startViewShown) {
        $(window).load(function(){
            $( "#startView" ).dialog();
            $.cookie('startViewShown', 1);
            // On newer versions of js-cookie, API use:
            // Cookies.set('startViewShown', 1);

        });
    }
    else {
        $("#startView").hide();
    }
});
/*
$(document).ready(function() {
    var startViewShown = localStorage.getItem('startViewShown')

    if (!startViewShown) {
        $(window).load(function(){
            $( "#startView" ).startView();
            localStorage.setItem('startViewShown', 1)
        });
    }
    else {
        $("#startView").hide();
    }
});
*/

// - NAME LINK TO START MODE WITHOUT START MODAL - //

$("#startView").click(function() {
  infowindow.close();
  map.fitBounds(bounds);
})



/*

$(window).on('load', function () {
    $('#startModal').modal('show');
});



$(window).click('click', function () {
    $('#startView').map('show');
});
*/