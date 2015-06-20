$(document).ready(function() {
  $('.covervid-video').coverVid(1920, 1080);
  $('.about-carousel').slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
  });

});