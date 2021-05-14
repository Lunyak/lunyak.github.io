import Accordion from '@molecules/accordion/accordion';

require('./vacancies.scss');

[].slice.call(document.querySelectorAll('.accordion')).forEach((item) => {
  new Accordion(item);
});
