import Swiper from 'swiper/js/swiper.min';
import Animate from '@base/script/animate';

export default class FirstScreen {
  constructor(parent) {
    const container = parent.querySelector('.swiper-container');
    const slides = Array.from(parent.querySelectorAll('.swiper-slide'));
    if (container && slides.length > 1) {
      setTimeout(() => {
        new Swiper(container, {
          slidesPerView: 1,
          loop: true,
          autoHeight: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
          observer: true,
          navigation: {
            nextEl: parent.querySelector('.swiper__button--next'),
            prevEl: parent.querySelector('.swiper__button--prev'),
            disabledClass: parent.querySelector('swiper__button--disabled'),
          },
          pagination: {
            el: parent.querySelector('.swiper-pagination'),
            type: 'fraction',
            formatFractionCurrent(n) {
              return n < 10 ? `0${n}` : n;
            },
            formatFractionTotal(n) {
              return n < 10 ? `0${n}` : n;
            },
          },
          on: {
            init() {
              const animElements = Array.from(parent.querySelectorAll('[data-anim]'));
              new Animate(animElements);
            },
          },
        });
      }, 300);
    }
  }
}
