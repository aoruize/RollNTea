/*global $*/

$(function () {
    
    "use strict";
    
/*==================================
    * Author        : Ideas_Factory
    * Template Name : Mazen - Creative Portfolio Template
==================================== */
    
/*=========== TABLE OF CONTENTS ===========

    01. Isotope Plugin
    02. Preloader
    03. Navbar
    04. Smooth Scroll
    05. MagnifPopup Plugin
    06. owl.carousel plugin
    07. Form Validation
    08. Window Scroll
    09. FitText Plugin
    10. counterUp Plugin
    11. about hover

======================================*/


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
        
        /*--------------------------------
            02. Preloader
        ----------------------------------*/
        $(".preloader").css('display','none');

        setTimeout(function(){

            $('html, body').animate({
                scrollTop: 0
            }, 1000, function () {
                
                $('.navbar-nav li:first-of-type').addClass('active').siblings().removeClass('active');
                $('.page-loader').css('animation-name','');
                $('.home .content').removeClass('opacity-zero');
                $('.main_img').removeClass('img-shadow');
                $('main').removeClass('load-main');
                if (!Modernizr.cssmask){
                    $(".page-loader,.preloader").fadeOut();
                }

            });

        },1000);

        
    });//--- window(load) ---//

    window.location.hash = "";

    $(".page-loader").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(e){
        if (Modernizr.cssmask){
            $(this).fadeOut();
        }

     });


});
