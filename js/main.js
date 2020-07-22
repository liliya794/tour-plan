var mySwiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "fade",

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 3000,
  },
});

$('.parallax-window').parallax({
  imageSrc: '../img/newsletter.jpg',
  speed: 0.6
});


