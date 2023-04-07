$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

(function ($) {


    $(window).on('load', function () {
        $('.gallery-controls li').on('click', function () {
            $('.gallery-controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.gallery-filter').length > 0) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }
    });
})(jQuery);