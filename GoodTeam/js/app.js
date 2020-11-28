


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

