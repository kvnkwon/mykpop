$(document).ready(function() {
  $('.covervid-video').coverVid(1920, 1080);
  $('.your-class').slick({
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear'
  });

});