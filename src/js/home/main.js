(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $('.preloader').delay(500).fadeOut(500);
    });

    $(document).ready(function () {
        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.ofcavas-menu').slideToggle();
            $('.hamburger-menu .line-top').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        //10. dianetics Slider Initialize
        function dianetics_carouselInit() {
            $('.owl-carousel.dianetics_slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true,
                autoplayTimeout: 4500,
                smartSpeed: 2000,
                autoplayHoverPause: true,
                nav: true,
                navText: ['<img src="img/icon_prev.png" alt="prev"/>','<img src="img/icon_next.png" alt="next"/>'],
                dots: false,
            });
        }
        dianetics_carouselInit();

        //11. Video Initialize
        $(".overlay").click(function(){
            $('.overlay').fadeOut();
            $('video').trigger('play');
        });
    });

})(jQuery);