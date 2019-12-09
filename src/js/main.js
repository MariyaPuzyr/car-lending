$(document).ready(function () {
  $('.nav-link').click(function (event) {
    event.preventDefault();
    $('.nav-link').parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    var headerHeight = $('.navbar').innerHeight();
    var el = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(el).offset().top - headerHeight
    }, 1000);
  });

  if ($(window).width() >= 1200) {
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
      if (!$(this).scrollTop()) {
        $('.navbar').removeClass('fixed-menu');
      }
    });
    $(window).scroll(function () {
      if ($(this).scrollTop())
        $('.navbar').addClass('fixed-menu');
    });
  }

  /* Scroll Function */
  $(window).scroll(function () {

    /* Fixed Navigation */
    if ($('nav').offset().top > 0) {
      $('.navbar').addClass('fixed-menu');
    } else {
      $('.navbar').removeClass('fixed-menu');
    }
  });
});