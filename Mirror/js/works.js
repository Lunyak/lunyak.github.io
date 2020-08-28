$(document).ready(function () {
  $(".works__slider").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    draggable: false,
    infinite: false,
  });
});

// слайдер для фотографий зеркал
$(document).ready(function () {
  $(".works__slider-img").slick({
    slidesToShow: 2,
    focusOnSelect: false,
    dots: false,
    arrows: true,
    // infinite: false,
    draggable: false,
    variableWidth: true,
    speed: 700,
    // centerPadding: '5px 5px',
    initialSlide: 0,
  });
});

$(".btn-slider-next").on("click", function () {
  $(".works__slider > .slick-next.slick-arrow").click();
});
$(".btn-slider-prev").on("click", function () {
  $(".works__slider > .slick-prev.slick-arrow").click();
});



$(".btn-arrow-right").on("click", function () {
  $(".works__slider-img > .slick-next.slick-arrow").click();
});
$(".btn-arrow-left").on("click", function () {
  $(".works__slider-img > .slick-prev.slick-arrow").click();
});




// $(".btn-slider-next").on("click", function () {
//   $(".slick-slide").click("slick-current");
// });

// $(".btn-arrow-left").on("click", function () {
//   $(".works__slider-img > .slick-prev.slick-arrow").click();
// });







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





