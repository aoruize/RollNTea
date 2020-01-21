/*global $*/

$(function () {
    
    "use strict";


    var $grid = $('.grid'),
        i;

    $(window).on('load', function () {

        /*--------------------------------
            01. Isotope Plugin
        ----------------------------------*/
        $grid.isotope({
          // options...
            itemSelector: '.col-md-6',
            percentPosition: true,
            masonry: {
                // use element for option
                columnWidth: '.col-md-6'
            }
        });
        //-- filter items on button click --//
        $(".section ul li").on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $(this).addClass("active_filter").siblings().removeClass("active_filter");
        });

        
    });//--- window(load) ---//

    window.location.hash = "";

    $(".page-loader").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e){
        if (Modernizr.cssmask){
            $(this).fadeOut();
        }

     });


});
