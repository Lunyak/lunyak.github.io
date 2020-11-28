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