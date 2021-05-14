import html from '@/util';
import LoadMore from '@base/script/loadMore';
import template from './list-news-ajax.pug';

require('./list-news-ajax.scss');

export class ListNewsAjax extends LoadMore {
  constructor(parent, props = {}) {
    super(parent, props);
  }

  static render(data, el) {
    const btn = el.querySelector('.js-load-more');
    const list = el.querySelector('.list-news');
    if (data.nextPage) {
      btn.classList.remove('link--hide');
    } else {
      btn.classList.add('link--hide');
      list.style.marginBottom = 0;
    }

    return html(template, {
      info: data,
      className: '',
      nextPage: false,
    });
  }

  static classList() {
    return '.list-news';
  }
}

export default (props) => ({
  template: html(template, props),
  init(parent) {
    new ListNewsAjax(parent, props);
  },
});
