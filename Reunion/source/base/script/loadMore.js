import debounce from '@base/script/debounce';
import Axios from 'axios';
import Link from '@atoms/link/link';

export default class LoadMore {
  constructor(parent, props) {
    this.props = props;
    this.method = 'get';
    this.data = {};
    this.parent = parent;
    this.loadMoreBtn = parent.querySelector('.js-load-more');
    this.submitFilterBtn = parent.querySelector('.js-submit-filter');
    this.formEl = parent.querySelector('form');
    this.pagination = parent.querySelector('.pagination');

    const filterSelector = this.constructor.filter();
    if (filterSelector) {
      this.filter = parent.querySelector(filterSelector);
      if (this.filter) {
        if (this.submitFilterBtn) {
          this.submitFilterBtn.addEventListener(('click'), (e) => {
            e.preventDefault();
            this.submitFilter();
          });
        } else {
          Array.from(this.filter.elements).forEach((e) => {
            e.addEventListener('change', () => {
              this.submitFilter();
            });
            e.addEventListener('input', () => {
              debounce(this.submitFilter, 500);
            });
          });
        }
      }
    }

    if (this.loadMoreBtn) {
      if (!this.loadMoreBtn?.href) {
        this.loadMoreBtn.href = this.loadMoreBtn?.dataset?.href;
      }
      if (!this.props.nextPage && this.loadMoreBtn?.href) {
        this.props.nextPage = this.loadMoreBtn.href;
      }
      this.loadMoreDebounce = debounce(this.loadMore.bind(this, false), 500);
      if (props?.onScroll) {
        const observer = new window.IntersectionObserver(
          this.loadMoreDebounce,
          {
            root: null,
            threshold: 0,
          },
        );
        observer.observe(this.loadMoreBtn);
      } else {
        this.loadMoreBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.loadMoreDebounce();
        });
      }
    }
  }

  setFilter(url, data, method) {
    this.props.nextPage = url;
    this.method = method;
    this.data = data;
    this.loadMore(true);
  }

  loadMore(isReplace = false) {
    if (this.props.nextPage && this.startLoad !== true) {
      this.startLoad = true;
      const requestConfig = {
        url: this.props.nextPage,
        method: this.method,
      };

      if (this.method === 'get') {
        requestConfig.params = this.data;
      } else {
        requestConfig.data = this.data;
      }

      Axios(requestConfig).then((responce) => {
        const { data } = responce;
        const { nextPage } = data;
        if (!nextPage) {
          this.props.nextPage = false;
          if (this.loadMoreBtn) {
            this.loadMoreBtn.style.display = 'none';
          }
        } else {
          if (this.loadMoreBtn) {
            this.loadMoreBtn.style.display = null;
          }
          this.props.nextPage = nextPage;
        }

        if (this.parent.dataset && this.parent.dataset.tabId) {
          data.items = data.items.filter((item) => item[this.parent.dataset.tabId]);
        }

        const renderTemplate = this.constructor.render(data, this.parent);
        let element = document.createElement('div');
        element.innerHTML = renderTemplate;
        const template = element.querySelector(this.constructor.classList()).innerHTML;
        if (isReplace) {
          if (!this.loadMoreBtn) {
            this.parent.querySelector(
              this.constructor.classList(),
            ).innerHTML = template;
          } else {
            this.loadMoreBtn.previousElementSibling.innerHTML = template;
          }
        } else {
          this.loadMoreBtn.previousElementSibling.insertAdjacentHTML('beforeend', template);
        }
        if (this.init) {
          this.init(this.loadMoreBtn.previousElementSibling);
        }
        if (this.constructor.init) {
          if (this.pagination) {
            this.constructor.init(this.pagination.previousElementSibling);
          } else {
            this.constructor.init(this.loadMoreBtn.previousElementSibling);
          }
        }
        element = undefined;
        this.startLoad = false;

        [].slice.call(document.querySelectorAll('.item-news')).forEach((block) => {
          if (block) {
            new Link(block);
          }
        });
      }).catch(() => {
        this.props.nextPage = false;
        if (this.loadMoreBtn) {
          this.loadMoreBtn.style.display = 'none';
        }
        this.startLoad = false;
      });
    }
  }

  submitFilter() {
    const newArrayFilter = [];
    Array.from(this.filter.elements).filter((elem) => elem.checked || elem.classList.contains('field-date__input')).forEach((item) => {
      newArrayFilter.push(item);
    });

    const filterData = newArrayFilter.reduce((summ, item) => {
      if (item.multiple) {
        return summ;
      }
      summ[item.name] = item.value;
      return summ;
    }, {});

    if (this.submitFilterBtn) {
      this.setUrl(this.submitFilterBtn);
    } else {
      this.setUrl({ href: window.location.href.split('?')[0] });
    }

    this.setFilter(this.filter.action, filterData, this.filter.method);
  }

  setUrl(el, isRedirect) {
    let newUrl = el.href;
    let multipleValues = '';
    const formEl = [...this.formEl.elements].filter((inputEl) => {
      if (inputEl.name !== '' && inputEl.value !== '' && inputEl.type !== 'hidden' && !inputEl.classList.contains('multiselect-input')) {
        if (inputEl.type === 'radio' && !inputEl.checked) return false;
        return true;
      }
      return false;
    });
    formEl.forEach((inputEl) => {
      const separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
      if (inputEl.multiple) {
        const arrayMultiple = [...inputEl.children].filter((elem) => elem.selected);
        arrayMultiple.forEach((elem, index) => {
          multipleValues += `${inputEl.name}=${elem.value}${index !== (arrayMultiple.length - 1) ? '&' : ''}`;
        });
      } else {
        const inputName = formEl.filter((input) => input.name === inputEl.name).length > 1 ? `${inputEl.name}[]` : inputEl.name;
        newUrl = `${newUrl + separator + inputName}=${inputEl.value}`;
      }
    });
    window.history.pushState({ page: 'another' }, '', multipleValues ? `${newUrl}&${multipleValues}` : newUrl);
    if (isRedirect) {
      window.location.href = multipleValues ? `${newUrl}&${multipleValues}` : newUrl;
    }
  }

  static filter() {
    return false;
  }
}
