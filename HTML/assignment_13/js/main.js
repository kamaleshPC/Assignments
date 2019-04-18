$(document).ready(function () {
  $('.dropdown-submenu a.test').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });

  $(window).bind('scroll', function () {
    var navHeight = $(window).height() - 500;
    if ($(window).scrollTop() > navHeight) {
      // $('.navbar-default').addClass('navbar-fixed-top');
      $('.pagetop').addClass('active');
    } else {
      // $('.navbar-default').removeClass('navbar-fixed-top');
      $('.pagetop').removeClass('active');
    }
  });

  
});


$(function () {
  $("#nav_header").load("navbar.html");
  $("#breadcrumb").load("breadcrumb.html");
  $("#footer_div").load("footer.html");
});

