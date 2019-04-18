$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});

$(document).ready(function(){
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-inverse').addClass('on');
        } else {
            $('.navbar-inverse').removeClass('on');
        }
    });
});