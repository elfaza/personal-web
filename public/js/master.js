(function($) {
  "use strict"; // Start of use strict

/*-----------------------------------------------------------------------------------*/
/*  SHOW THE LOADER
/*-----------------------------------------------------------------------------------*/
    document.onreadystatechange = function () {
        var state = document.readyState
        if (state == 'complete') {
            $('#loader').fadeOut(500);
        }
    }
/*-----------------------------------------------------------------------------------*/
/*   Progress Bar
/*-----------------------------------------------------------------------------------*/
    var loadProgress = function() { 
            $(".progress").each(function(){
            var pos = ($(this).offset().top);

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                
                $('.progress .progress-bar').css("width",
                    function() {
                        return $(this).attr("aria-valuenow") + "%";
                    }
                )
            }
        });
    }
    // Load Progress if page is not at top
    loadProgress();
    // Load Progress when page is scrolled
    $(window).scroll(loadProgress);
/*-----------------------------------------------------------------------------------*/
/*   Smooth Scrolling using Jquery Easing
/*-----------------------------------------------------------------------------------*/
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                  scrollTop: (target.offset().top - 50)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
/*-----------------------------------------------------------------------------------*/
/*   Close navbar drop down in mobile
/*-----------------------------------------------------------------------------------*/
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
/*-----------------------------------------------------------------------------------*/
/*   Scrollspy
/*-----------------------------------------------------------------------------------*/
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 50
    });
/*-----------------------------------------------------------------------------------*/
/*   Change Navbar When Scroll
/*-----------------------------------------------------------------------------------*/
    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
/*-----------------------------------------------------------------------------------*/
/*   Pop Up Project
/*-----------------------------------------------------------------------------------*/   
    var popUpAnimation = function() { 
            $(".progress").each(function(){
            var pos = ($(this).offset().top);

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                

            }
        });
    }
    // Pop up if page is not at top
    popUpAnimation();
    // Pop up when page is scrolled
    $(window).scroll(popUpAnimation);
/*-----------------------------------------------------------------------------------*/
/*   START AOS PLUGIN
/*-----------------------------------------------------------------------------------*/  
    $(document).ready(function(){
        AOS.init();
    });
/*-----------------------------------------------------------------------------------*/
/*  RESIZE PANEL EDUCATION TO SAME HEIGHT
/*-----------------------------------------------------------------------------------*/
    $(window).on( 'load', function() {
        var largestHeight = 0; //Init height as 0
        $('#content-wrapper .list-education .edu-img').each(function() { //Loop through all content-1, content-2, etc
             if ($(this).height() > largestHeight){
                largestHeight = $(this).height(); 
            }
        });
        $('#content-wrapper .list-education .edu-img').height(largestHeight);
    });
/*-----------------------------------------------------------------------------------*/
/*  RESIZE PANEL WORKING EXPERIENCE TO SAME HEIGHT
/*-----------------------------------------------------------------------------------*/
    $(window).on( 'load', function() {
        var largestHeight = 0; //Init height as 0
        $('#content-wrapper .list-working-experience .work-img').each(function() { //Loop through all content-1, content-2, etc
             if ($(this).height() > largestHeight){
                largestHeight = $(this).height(); 
            }
        });
        $('#content-wrapper .list-working-experience .work-img').height(largestHeight);
    });
/*-----------------------------------------------------------------------------------*/
/*  BUTTON TO TOP
/*-----------------------------------------------------------------------------------*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    $(window).scroll(function() {
        if(!isMobile){
            if ($(this).scrollTop() > 50 ) {
                $('.scrolltop:hidden').stop(true, true).fadeIn();
            } else {
                $('.scrolltop').stop(true, true).fadeOut();
            }
        }
    });
    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop: 0}, 1000);return false})})
})(jQuery); // End of use strict