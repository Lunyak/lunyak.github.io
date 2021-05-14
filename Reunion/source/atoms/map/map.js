import ymaps from 'ymaps';
import axios from 'axios';
// import MapCollections from '@blocks/map/collections/map-collections';

export default class Map {
  constructor(parent) {
    this.parent = parent;
    this.wrapper = parent.querySelector('.map__wrapper');
    this.api = this.parent.dataset.api;
    this.mapId = this.wrapper.id;
    this.config = this.parent.dataset.config;
    this.markers = [];
    axios.get(this.api).then((response) => {
      if (response && response.data) {
        if (response.data.items && response.data.items.length > 0) {
          response.data.items.forEach((el, index) => {
            response.data.items[index].coords = el.coords[0].split(',').map((string) => Number(string));
          });
          this.markers = response.data.items;
          window.contactsData = this.markers;
        }
      }
    }).catch();

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {
      const myMap = new maps.Map(this.mapId,
        this.config ? JSON.parse(this.config) : {
          center: this.center || [43.112960, 131.918810],
          zoom: 17,
          controls: [],
        });

      myMap.behaviors.disable(['scrollZoom']);
      if (this.markers) {
        this.placeMarks = [];
        this.markers.forEach((marker) => {
          const MyBalloonLayout = maps.templateLayoutFactory.createClass(
            '<div class="section-contacts__popover">'
                + '<div class="section-contacts__popover-arrow"></div>'
                + '<div class="section-contacts__popover-inner">'
                + '$[[options.contentLayout observeSize minWidth=235 maxWidth=350]]'
                + '</div>'
                + '</div>', {
              build() {
                this.constructor.superclass.build.call(this);
                this.parentElement = this.getParentElement();
                this.popover = this.parentElement.querySelector('.section-contacts__popover');
                this.applyElementOffset();
              },

              applyElementOffset() {
                if (window.innerWidth < 768) {
                  this.popover.style.top = '240px';
                  this.popover.style.left = '-165px';
                } else if (window.innerWidth > 767 && window.innerWidth < 1280) {
                  this.popover.style.top = '15px';
                  this.popover.style.left = '-73px';
                } else {
                  this.popover.style.top = '-80px';
                  this.popover.style.left = '60px';
                }
              },
            },
          );

          const MyBalloonContentLayout = maps.templateLayoutFactory.createClass(
            '<div class="section-contacts__tooltip">'
            + '<div class="section-contacts__tooltip-city text-link-2">{{properties.city}}</div>'
            + '{% for mail in properties.mail %}'
            + '<a class="section-contacts__tooltip-mail" href="{{mail.url}}">{{mail.text}}</a>'
            + '{% endfor %}'
            + '{% for phone in properties.phone %}'
            + '<a class="section-contacts__tooltip-phone text-link" href="{{phone.url}}">{{phone.text}}</a>'
            + '{% endfor %}'
            + '<div class="section-contacts__tooltip-daytime">{{properties.daytime}}</div>'
            + '</div>',
          );
          const newPlacemark = new maps.Placemark(marker.coords, {
            city: marker.tooltip.city,
            mail: marker.tooltip.mail,
            phone: marker.tooltip.phone,
            daytime: marker.tooltip.daytime,
          }, {
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonCloseButton: false,
            balloonPane: 'outerBalloon',
            hideIconOnBalloonOpen: false,
            iconLayout: 'default#image',
            iconImageHref: `/images/${marker.icon}.png`,
            iconImageSize: [40, 60],
            iconContentOffset: [0, 0],
          });
          this.placeMarks.push({ id: marker.id, placemark: newPlacemark });
          // добавление метки с карточкой
          // myMap.geoObjects.add(newPlacemark);
        });
      }

      const setTooltip = (id) => {
        if (this.activeMarker) this.activeMarker.placemark.balloon.close();
        const activeMarker = this.placeMarks.find((marker) => marker.id === id);
        activeMarker.placemark.balloon.open(activeMarker.placemark.coords);
        this.activeMarker = activeMarker;
      };

      if (window.activeCity) {
        setTooltip(window.activeCity);
      }

      document.addEventListener('showTooltip', (e) => {
        setTooltip(e.detail);
        if (e.detail) {
          const city = this.markers.find((item) => item.id === e.detail);
          if (city) {
            myMap.setCenter(city.coords);
          }
        }
      });
    }).catch();
  }
}
