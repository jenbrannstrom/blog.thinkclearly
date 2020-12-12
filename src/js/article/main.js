(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);
    });

    $(document).ready(function () {
        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
            $('body').toggleClass('overflow-hidden');
        });

        $(".niceScroll_box").niceScroll('.wrap',{
            cursoropacitymin: 1,
            cursorcolor:"#0D406B",
            horizrailenabled:false,
        });
    });

})(jQuery);