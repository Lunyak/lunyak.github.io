import '@babel/polyfill';
import 'svgxuse';
import Header from '@organisms/header/header';
import ObjectFitImages from 'object-fit-images';
import Animate from '@base/script/animate';
import Footer from '@organisms/footer/footer';
import MainFeedback from '@organisms/section/feedback/section-feedback';

window.InputMask = require('inputmask');

require('lazysizes');
require('./common.scss');

ObjectFitImages(null, {
  watchMQ: true,
});

const lazySizesCustom = {
  preloadAfterLoad: true,
  expand: 600,
  expFactor: 1,
};

window.lazySizesConfig = { ...window.lazySizesConfig, ...lazySizesCustom };

document.addEventListener('lazybeforeunveil', (e) => {
  if (e.target.lazyInit) {
    e.target.lazyInit();
  }
});

[].slice.call(document.querySelectorAll('.header')).forEach((block) => {
  if (block) {
    new Header(block);
  }
});

[].slice.call(document.querySelectorAll('.footer')).forEach((block) => {
  if (block) {
    new Footer(block);
  }
});

[].slice.call(document.querySelectorAll('.section-feedback')).forEach((feedback) => {
  new MainFeedback(feedback);
});

const animElements = Array.from(document.querySelectorAll('[data-anim]'));
if (animElements.length > 0) {
  new Animate(animElements);
}

const inputTel = Array.from(document.querySelectorAll('input[type="tel"]'));
if (inputTel) {
  inputTel.forEach((item) => {
    window.Inputmask({ mask: '+7 (999) 999-99-99', showMaskOnHover: false }).mask(item);
  });
}
