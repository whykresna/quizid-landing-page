$(document).ready(function () {
  $('.headline').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerPadding: '0px',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
  });

  $('.rewards').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerPadding: '0px',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
  });
  
  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc >= 250) {
      $('#header nav').addClass('fixed-top shadow-sm bg-white animated slideInDown');
      $('#headline').addClass('mt-5');
    } else if (sc <= 250) {
      $('#header nav').removeClass('fixed-top shadow-sm bg-white animated slideInDown');
      $('#headline').removeClass('mt-5');
    }
  });
});