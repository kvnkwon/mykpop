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
  $("#footer").stickyFooter({
    // The class that is added to the footer.
    class: 'sticky-footer',

    // The footer will stick to the bottom of the given frame. The parent of the footer is used when an empty string is given.
    frame: '',

    // The content of the frame. You can use multiple selectors. e.g. "#header, #body"
    content: '#body'
  });

});