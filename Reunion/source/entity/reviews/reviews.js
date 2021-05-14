import Link from '@atoms/link/link';
import { ListNewsAjax } from '@molecules/list/news/ajax/list-news-ajax';

require('./reviews.scss');

[].slice.call(document.querySelectorAll('.item-news')).forEach((block) => {
  if (block) {
    new Link(block);
  }
});

[].slice.call(document.querySelectorAll('.item-person')).forEach((block) => {
  if (block) {
    new Link(block);
  }
});

const parent = document.querySelector('.list-news-ajax');
if (parent) {
  new ListNewsAjax(parent, {});
}
