// Плагин Slick.js

// skider prewiew

$(document).ready(function () {
  $(".prewiew").slick({
    slidesToShow: 1,
    variableWidth: true,
    dots: false,
    arrows: true,
    centerMode: true,
    autoplay: true,
    responsive: [{
        breakpoint: 420,
        settings: {
          centerPadding: '20px',
        }
      },
    ],
  });
});

// slider CARD

$(document).ready(function () {
  $(".card__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    touchTreshhold: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    centerMode: false,
    responsive: [{
      breakpoint: 550,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        initialSlide: 3,
    },
    }],
  });
});


// для удобстава сделал симулятор клика по кнопкам Skick js
// можно стилизовать Skick.js, это не проблема, 
// но мне удобнее этот метод.

$(".prewiew .btn-next").on("click", function () {
  $(".prewiew .slick-next").click();
});
$(".prewiew .btn-prev").on("click", function () {
  $(".prewiew .slick-prev").click();
});
$(".card .btn-next").on("click", function () {
  $(".card .slick-next").click();
});
$(".card .btn-prev").on("click", function () {
  $(".card .slick-prev").click();
});

// сбрасываю свойство по умолчанию <a></a>
$("a").click(function (event) {
  // event.preventDefault();
});





// увелиычиваю размер INSTAGRAM CONTANT

$(".btn-else").on("click", function () {

  if ($(window).width() > 1190) {

    if (!$(".instagram__contant").hasClass('active')) {
      $(".instagram__contant").animate({
        maxHeight: 1500
      }, 1000);
      $(".instagram__contant").addClass('active');
      $('.btn-else').text('Скрыть');
    } else if ($(".instagram__contant").hasClass('active')) {
      $(".instagram__contant").animate({
        maxHeight: 570
      }, 1000);
      $(".instagram__contant").removeClass('active');
      $('.btn-else').text('Показать еще');
    }

  } else if ($(window).width() >= 767 && $(window).width() <= 1198) {

    if (!$(".instagram__contant").hasClass('active')) {
      $(".instagram__contant").animate({
        maxHeight: 1560
      }, 1000);
      $(".instagram__contant").addClass('active');
      $('.btn-else').text('Скрыть');
    } else if ($(".instagram__contant").hasClass('active')) {
      $(".instagram__contant").animate({
        maxHeight: 600
      }, 1000);
      $(".instagram__contant").removeClass('active');
      $('.btn-else').text('Показать еще');
    }

  } else {

    if (!$(".instagram__contant").hasClass('active')) {
      $(".instagram__contant").animate({
        maxHeight: 6400
      }, 1000);
      $(".instagram__contant").addClass('active');
      $('.btn-else').text('Скрыть');
    } else if ($(".instagram__contant").hasClass('active')) {
      $(".instagram__contant").animate({
        maxHeight: 1789
      }, 1000);
      $(".instagram__contant").removeClass('active');
      $('.btn-else').text('Показать еще');
    }
  }
});


//  выпадающее окно - fix header

$(function () {
  let nav = $(".personal__title");
  let close = $(".personal__close");
  let content = $(".personal__text");
  let contentH = content.innerHeight();
  let scrollPos = 0;

  $('.personal').on("scroll resize", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > 70) {
      nav.addClass("fixed");
      close.addClass("fixed");
    } else {
      nav.removeClass("fixed");
      close.removeClass("fixed");
    }
  });

  //  выпадающая реклама

});
$(function () {
  let popup = $(".popup__wrap");
  let span = $(".popup");
  let scrollPos = 0;

console.log(span);

  $(window).on("scroll resize", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > 800) {
      popup.addClass('active');
      span.addClass('active');
    } else {
      popup.removeClass('active');
      span.removeClass('active');
    }
  });
});

//  выпадающее окно - open/close

$(".personal__close").on("click", function () {
  $(".personal").hide(500);
});
$(".footer__coppy").on("click", function () {
  $(".personal").show(500);
});

// даю активный класс кнопки по клику

$('.btn-group').on('click', '.btn', function () {
  $(this).addClass('active').siblings().removeClass('active');
});

// задаю переменные

let map;
let buttonFiltersNatural = document.querySelector('.natural');
let buttonFiltersEntity = document.querySelector('.entity');
let buttonFiltersAll = document.querySelector('.btn-all');
let containerMarks = '';
let template = `<div id='map'></div>`;

// буду перерисовывать карту при фильтрации

let render = function (template, node) {
  if (!node) return;
  node.innerHTML = template;
  initMap();
};

// подключаю карту

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 55.751864,
      lng: 37.622417
    },

    // задаю параметры карты

    zoom: 12.5,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,

    // подключаю внешний вид карты

    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#bdbdbd"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c9c9c9"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }
    ],

  });

  // загрузил иконку картинки

  const image = "https://i.ibb.co/9G38R40/map.png";

  // создаю массив с метками

  neighborhoods = [
    ['0', 'Title 1', 55.758059, 37.557298, 'entity'],
    ['1', 'Title 2', 55.778749, 37.579257, 'natural'],
    ['2', 'Title 3', 55.752681, 37.579257, 'natural'],
    ['4', 'Title 4', 55.772775, 37.601756, 'entity'],
    ['5', 'Title 4', 55.759916, 37.640163, 'entity'],
    ['6', 'Title 4', 55.766233, 37.653813, 'natural'],
    ['7', 'Title 4', 55.768385, 37.692776, 'entity'],
    ['8', 'Title 4', 55.741465, 37.692538, 'natural'],
    ['9', 'Title 4', 55.741396, 37.652768, 'entity'],
  ];

  // отрисовываю компоненты при нажатии Физ лица 

  buttonFiltersNatural.onclick = function () {
    render(template, document.querySelector('#map__render'));
    toggleFilter('natural');
    containerMarks = neighborhoods.map(getGoogleObject);
  };

  // отрисовываю компоненты при нажатии Юр лица

  buttonFiltersEntity.onclick = function () {
    render(template, document.querySelector('#map__render'));
    toggleFilter('entity');
    containerMarks = neighborhoods.map(getGoogleObject);
  };

  // отрисовываю компоненты при нажатии "все"

  buttonFiltersAll.onclick = function () {
    render(template, document.querySelector('#map__render'));
    containerMarks = neighborhoods.map(getGoogleObject);
  };

  // отрисовываю компоненты при закгрузке страницы

  window.onload = function () {
    containerMarks = neighborhoods.map(getGoogleObject);
  };

  function getGoogleObject(neighborhood) {
    let category = neighborhood[4];
    let pos = new google.maps.LatLng(neighborhood[2], neighborhood[3]);
    return (new google.maps.Marker({
      position: pos,
      map: map,
      icon: image,
      category: category,
      title: 'Название'
    }));
  }

  // let containerMarks = neighborhoods.map(getGoogleObject);

  function toggleFilter(category) {
    neighborhoods = neighborhoods.filter((neighborhood) => {
      return neighborhood[4] === category || false;
    });
  }





}