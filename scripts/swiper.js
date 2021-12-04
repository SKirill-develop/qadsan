import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

export const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  speed: 400,
  breakpoints: {
    320: {
      loop: false,
      direction: 'vertical',
    },
    760: {
      loop: true,
      direction: 'horizontal',
    },
    1100: {
      loop: true,
      slidesPerView: 5,
    },
    1024: {
      loop: true,
      slidesPerView: 3,
      autoHeight: true,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
