	new WOW().init();
$(document).ready(function(){

	$(".img_div .img_overlay").click(function(){
    $(".content_overlay").addClass("show");
    });

    $(".content_title .hide_btn").click(function(){
    $(".content_overlay").removeClass("show");
    });

       $(window).bind('scroll', function() {
			        var navHeight = $(window).height() - 500;
			        if ($(window).scrollTop() > navHeight) {
			            $('.navbar-default').addClass('on');
			            $('.light_logo').hide();
			            $('.dark_logo').show();
			        } else {
			            $('.navbar-default').removeClass('on');
			            $('.dark_logo').hide();
			            $('.light_logo').show();
			        }
			    });

         window.onscroll = function() {scrollFunction()};

				function scrollFunction() {
				  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				    $('.pagetop').addClass('active');
				  } else {
				    $('.pagetop').removeClass('active');
				  }
				}

});