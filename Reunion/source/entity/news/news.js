import FieldDate from '@atoms/field/date/field-date';
import { ListNewsAjax } from '@molecules/list/news/ajax/list-news-ajax';

require('./news.scss');

[].slice.call(document.querySelectorAll('.field-date')).forEach((feedback) => {
  if (feedback) new FieldDate(feedback);
});

class News extends ListNewsAjax {
  static filter() {
    return '.js-filter';
  }
}

const rootEl = document.querySelector('.main');
if (rootEl) {
  new News(rootEl, {});
}

// [].slice.call(document.querySelectorAll('.main').forEach((parent) => {
//   if (parent) {
//     new News (parent, {});
//   }
// }));
