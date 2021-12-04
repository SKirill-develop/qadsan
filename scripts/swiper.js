import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

export const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  speed: 400,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      autoHeight: true,
    },
    1100: {
      slidesPerView: 5,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
