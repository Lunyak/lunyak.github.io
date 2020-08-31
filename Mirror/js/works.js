$(document).ready(function () {
  $(".works__slider").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    draggable: false,
    infinite: false,
  });
});


$(".btn-slider-next").on("click", function () {
  $(".works__slider > .slick-next.slick-arrow").click();
});
$(".btn-slider-prev").on("click", function () {
  $(".works__slider > .slick-prev.slick-arrow").click();
});














$(".works__slider").on("init", function (event, slick) {

  $(".works__slider-count").text(
    `${parseInt(slick.currentSlide + 1)} `);

  $(".works__slider-count-2").text(
    ` / ${slick.slideCount}`
  );
});


$(".works__slider").on("afterChange", function (event, slick, currentSlide) {

  $(".works__slider-count").text(
    `${parseInt(slick.currentSlide + 1)} `);

  $(".works__slider-count-2").text(
    ` / ${slick.slideCount}`
  );
});


$(document).on("click", "#works-next-first", function(e) {
  var selectedItem = $('.slider-first > .slider-item').find('.prevew');
  selectedItem.removeClass('prevew');
  selectedItem.next().addClass('prevew');
});

$(document).on("click", "#works-prev-first", function(e) {
  var selectedItem = $('.slider-first > .slider-item').find('.prevew');
  selectedItem.prev().addClass('prevew');
  selectedItem.removeClass('prevew');
});



$(document).on("click", "#works-next-second", function(e) {
  var selectedItem = $('.slider-second > .slider-item').find('.prevew');
  selectedItem.removeClass('prevew');
  selectedItem.next().addClass('prevew');
});

$(document).on("click", "#works-prev-second", function(e) {
  var selectedItem = $('.slider-second > .slider-item').find('.prevew');
  selectedItem.prev().addClass('prevew');
  selectedItem.removeClass('prevew');
});



$(document).on("click", "#works-next-third", function(e) {
  var selectedItem = $('.slider-third > .slider-item').find('.prevew');
  selectedItem.removeClass('prevew');
  selectedItem.next().addClass('prevew');
});

$(document).on("click", "#works-prev-third", function(e) {
  var selectedItem = $('.slider-third > .slider-item').find('.prevew');
  selectedItem.prev().addClass('prevew');
  selectedItem.removeClass('prevew');
});












$(document).on("click", "#works-next-first", function(e) {
  var selectedItem = $('.slider-first > .slider-item').find('.active');
  selectedItem.removeClass('active');
  selectedItem.next().addClass('active');
});

$(document).on("click", "#works-prev-first", function(e) {
  var selectedItem = $('.slider-first > .slider-item').find('.active');
  selectedItem.prev().addClass('active');
  selectedItem.removeClass('active');
});



$(document).on("click", "#works-next-second", function(e) {
  var selectedItem = $('.slider-second > .slider-item').find('.active');
  selectedItem.removeClass('active');
  selectedItem.next().addClass('active');
});

$(document).on("click", "#works-prev-second", function(e) {
  var selectedItem = $('.slider-second > .slider-item').find('.active');
  selectedItem.prev().addClass('active');
  selectedItem.removeClass('active');
});



$(document).on("click", "#works-next-third", function(e) {
  var selectedItem = $('.slider-third > .slider-item').find('.active');
  selectedItem.removeClass('active');
  selectedItem.next().addClass('active');
});

$(document).on("click", "#works-prev-third", function(e) {
  var selectedItem = $('.slider-third > .slider-item').find('.active');
  selectedItem.prev().addClass('active');
  selectedItem.removeClass('active');
});



jQuery(document).ready(function ($) {
  let slideWi = $('.active').next().outerWidth(true);

    function moveLeft() {
      $('.slider-first ul').animate({
          left: + slideWi
      }, 700, function () {
          $('.slider-first ul li:last-child').prependTo('.slider-first ul');
          $('.slider-first ul').css('left', '');
      });
  };
    function moveRight() {
        $('.slider-first ul').animate({
            left: - slideWi
        }, 700, function () {
            $('.slider-first ul li:first-child').appendTo('.slider-first ul');
            $('.slider-first ul').css('left', '');
        });
    };
    $('#works-prev-first').click(function () {
        moveLeft();
    });
    $('#works-next-first').click(function () {
        moveRight();
    });
});


jQuery(document).ready(function ($) {
  let slideWi = $('.active').next().outerWidth(true);
    function moveLeft() {
      $('.slider-second ul').animate({
          left: + slideWi
      }, 700, function () {
          $('.slider-second ul li:last-child').prependTo('.slider-second ul');
          $('.slider-second ul').css('left', '');
      });
  };
    function moveRight() {
        $('.slider-second ul').animate({
            left: - slideWi
        }, 700, function () {
            $('.slider-second ul li:first-child').appendTo('.slider-second ul');
            $('.slider-second ul').css('left', '');
        });
    };
    $('#works-prev-second').click(function () {
        moveLeft();
    });
    $('#works-next-second').click(function () {
        moveRight();
    });
});


jQuery(document).ready(function ($) {
  let slideWi = $('.active').next().outerWidth(true);
    function moveLeft() {
      $('.slider-third ul').animate({
          left: + slideWi
      }, 700, function () {
          $('.slider-third ul li:last-child').prependTo('.slider-third ul');
          $('.slider-third ul').css('left', '');
      });
  };
    function moveRight() {
        $('.slider-third ul').animate({
            left: - slideWi
        }, 700, function () {
            $('.slider-third ul li:first-child').appendTo('.slider-third ul');
            $('.slider-third ul').css('left', '');
        });
    };
    $('#works-prev-third').click(function () {
        moveLeft();
    });

    $('#works-next-third').click(function () {
        moveRight();
    });
});






// $(document).ready(function () {
//   // let headerTechnologyArrow = false;
//     var cur_width = $(window).width();
//     if (cur_width <= 1000) {
//       $('#slider > .slider-item').find('.active').next().css({
//         "transform": "translate(-352px, 75px)"
//       });
//     } else if (cur_width >= 1000) {
//     }
// })



// $("#slider > .slider-item").change(function () {
//   $(document).ready(function () {
//     // let headerTechnologyArrow = false;
//       var cur_width = $(window).width();
//       if (cur_width <= 1000) {
//         $('#slider > .slider-item').resize({
//         })
//         $('#slider > .slider-item').find('.active').next().css({
//           "transform": "translate(-352px, 75px)"
//         });
//       } else if (cur_width >= 1000) {
//     }
//   })
// });


// function sliderTransform() {
//   $(document).ready(function () {
//     // let headerTechnologyArrow = false;
//       var cur_width = $(window).width();
//       if (cur_width <= 1000) {
//         $('#slider > .slider-item').resize({
//         })
//         $('#slider > .slider-item').find('.active').next().css({
//           "transform": "translate(-352px, 75px)"
//         });
//       } else if (cur_width >= 1000) {
//     }
//   })
// }