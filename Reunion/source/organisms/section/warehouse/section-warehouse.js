import Swiper from 'swiper/js/swiper.min';

export default class WarehouseSlider {
  constructor(parent) {
    const descriptions = parent.querySelector('.section-warehouse__slider');
    const cards = parent.querySelector('.section-warehouse__cards-container');
    const slides = [].slice.call(parent.querySelectorAll('.swiper-slide'));

    if (slides.length > 1) {
      setTimeout(() => {
        const thumbsSlider = new Swiper(cards, {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          loop: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          spaceBetween: 20,
          simulateTouch: false,
          allowTouchMove: false,
        });
        new Swiper(descriptions, {
          loop: true,
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
              if (thumbsSlider !== undefined) {
                thumbsSlider.slideTo(this.realIndex);
              }
            },
            slideChange() {
              if (thumbsSlider !== undefined) {
                thumbsSlider.slideTo(this.realIndex);
              }
            },
          },
        });
      }, 300);
    }
  }
}
