import Accordion from '@molecules/accordion/accordion';

require('./faq.scss');

Array.from(document.querySelectorAll('.accordion')).forEach((element) => {
  new Accordion(element);
});
