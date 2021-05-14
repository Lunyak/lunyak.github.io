import Btn from '@atoms/btn/btn';

export default class Accordion {
  constructor(wrapper) {
    if (!wrapper) return false;
    this.wrapper = wrapper;
    this.hidden = wrapper.querySelector('.accordion__hidden');
    this.imgs = wrapper.querySelectorAll('img');
    this.initEvents();
    this.wrapper.classList.add('js-init');
  }

  static init(parent = document) {
    const accordions = parent.querySelectorAll('.accordion:not(.js-init)');
    accordions.forEach((accordion) => new Accordion(accordion));
  }

  initEvents() {
    if (this.wrapper && this.hidden) {
      this.wrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion')) {
          this.wrapper.classList.toggle('accordion--active');
          if (this.hidden.style.maxHeight) {
            this.hidden.style.maxHeight = null;
          } else {
            this.hidden.style.maxHeight = `${this.hidden.scrollHeight}px`;
          }
        }
      });
    }

    const link = [].slice.call(this.wrapper.querySelectorAll('.link[data-api]'));
    const btn = [].slice.call(this.wrapper.querySelectorAll('.btn[data-api]'));
    const btns = btn.concat(link);
    if (btns.length) {
      btns.forEach((el) => {
        new Btn(el);
      });
    }
  }
}
