(function ($) {
    'use strict';

    $('.icon').on('click', function () {
        var $this = $(this);
        if ($this.hasClass('icon--arrow-up')) {
            var $slide = $(window).scrollTop() - $(window).height();
        }
        if ($this.hasClass('icon--arrow-down')) {
            var $slide = $(window).scrollTop() + $(window).height();
        }

        $('html, body').animate({
            scrollTop: $slide
        }, 1200);
    });

})(jQuery)