export default class Animate {
  constructor(elements) {
    require('./animate.scss');

    this.options = {
      activeClass: 'animate',
      threshold: 0.1,
    };

    this.elements = elements;

    this.elements.forEach((el) => {
      this.init(el);
    });

    window.addEventListener('scroll', this.scrollHandle.bind(this));
  }

  scrollHandle() {
    this.elements.forEach((el) => {
      if (el.anim && el.anim.state !== 'end') {
        this.animate(el);
      }
    });
  }

  init(el) {
    const { animateClass, activeClass } = this.options;
    el.anim = {
      name: el.getAttribute('data-anim'),
      classes: [animateClass, activeClass],
      state: 'init',
    };

    setTimeout(this.animate.bind(this, el), 0);
  }

  animate(el) {
    const self = this.constructor;
    const {
      activeClass,
      threshold,
    } = this.options;

    const elThreshold = el.getAttribute('data-threshold') || threshold;
    const isElementInViewport = self.isElementInViewport(el, +(elThreshold));

    if (isElementInViewport) {
      el.anim.state = 'end';
      let delay = el.getAttribute('data-delay') || false;

      if (delay) {
        delay = +(delay) * 1000;

        setTimeout(() => {
          el.classList.add(activeClass);
        }, delay);
      } else {
        el.classList.add(activeClass);
      }

      const timeoutTime = self.getAnimDuration(el) + (delay || 0);

      // remove active class and animation attribute after animation end
      setTimeout(() => {
        el.classList.remove(this.options.activeClass);
        el.removeAttribute('data-anim');
        el.removeAttribute('data-delay');
      }, timeoutTime);
    }
  }

  static isElementInViewport(el, threshold) {
    const elRect = el.getBoundingClientRect();
    // calculate element transform offset
    const elTranslateY = this.getComputedTranslateY(el);
    let offsetY = 0;
    if (elTranslateY) {
      offsetY = elTranslateY < 0 ? Math.abs(elTranslateY) : -(elTranslateY);
    }
    // calculate position from element.top, offsetY, and height with threshold param
    const elPos = elRect.top + offsetY
      + (elRect.height * threshold);

    return elPos < window.innerHeight;
  }

  static getAnimDuration(el) {
    const elStyles = window.getComputedStyle(el);
    const isAnimation = elStyles.getPropertyValue('animation-name') !== 'none';
    const duration = isAnimation ? elStyles.getPropertyValue('animation-duration')
      : elStyles.getPropertyValue('transition-duration');

    return (+(duration.slice(0, -1)) * 1000) + 50;
  }

  static getComputedTranslateY(el) {
    if (!window.getComputedStyle) return false;
    const { transform } = window.getComputedStyle(el);
    if (transform === 'none') return false;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
      return parseFloat(mat[1].split(', ')[13]);
    }
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }
}
