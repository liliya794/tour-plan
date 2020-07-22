var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
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


