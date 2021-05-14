import Link from '@/source/atoms/link/link';
import Accordion from '@molecules/accordion/accordion';

require('./services-inner.scss');

Array.from(document.querySelectorAll('.accordion')).forEach((item) => {
  new Accordion(item);
});

[].slice.call(document.querySelectorAll('.section-firstscreen')).forEach((el) => {
  new Link(el);
});
