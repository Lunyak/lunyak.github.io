import Swiper from 'swiper/js/swiper.min';

export default class SliderPerson {
  constructor(parent) {
    const containerImage = parent.querySelector('.section-person__slider-image');
    const containerDesc = parent.querySelector('.section-person__slider');
    const slides = [].slice.call(parent.querySelectorAll('.swiper-slide'));
    if (containerDesc && slides.length > 1) {
      setTimeout(() => {
        const SliderImage = new Swiper(containerImage, {
          slidesPerView: 1,
          loop: true,
          autoHeight: true,
          simulateTouch: true,
          observer: true,
        });
        const SliderDesc = new Swiper(containerDesc, {
          slidesPerView: 1,
          loop: true,
          autoHeight: true,
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
        });
        SliderDesc.controller.control = SliderImage;
        SliderImage.controller.control = SliderDesc;
      }, 300);
    }
  }
}
