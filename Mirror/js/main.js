// добавляем и убираем активные состояние у меню навигации
$(".nav ul li a").click(function (e) {
  $(".nav ul li a").removeClass("nav__links-active");
  $(this).addClass("nav__links-active");
});

jQuery(document).ready(function ($) {
  var contentSections = $(".cd-section"),
    navigationItems = $("#cd-vertical-nav a");

  updateNavigation();
  $(window).on("scroll", function () {
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on("click", function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });
  //smooth scroll to second section
  $(".cd-scroll-down").on("click", function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  //open-close navigation on touch devices
  $(".touch .cd-nav-trigger").on("click", function () {
    $(".touch #cd-vertical-nav").toggleClass("open");
  });
  //close navigation on touch devices when selectin an elemnt from the list
  $(".touch #cd-vertical-nav a").on("click", function () {
    $(".touch #cd-vertical-nav").removeClass("open");
	});

	const a1 = 'a1'
	const a2 = 'a2'

	const aaa = a1 + ' 111 ' + a2 + ' 222'
	const bbb = `${a1} 111 ${a2} 222`

  function updateNavigation() {
    contentSections.each(function () {
      $this = $(this);
      var activeSection =
        $('#cd-vertical-nav a[href="#' + $this.attr("id") + '"]').data(
          "number"
        ) - 1;
      if (
        $this.offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $this.offset().top + $this.height() - $(window).height() / 2 >
          $(window).scrollTop()
      ) {
        navigationItems.eq(activeSection).addClass("is-selected");
      } else {
        navigationItems.eq(activeSection).removeClass("is-selected");
      }
    });
  }

  function smoothScroll(target) {
    $("body,html").animate({ scrollTop: target.offset().top }, 600);
  }
});

/*fixed Header */
$(function () {
  let nav = $(".header");
  let windowWidth = $(window).innerWidth();
  let content = $(".main");
  let contentH = content.innerHeight();
  let scrollPos = $(window).scrollTop();
  // let NavToggle = $("#NavToggle");

  // checkScroll(scrollPos, contentH);

  $(window).on("scroll resize", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > contentH - 80) {
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  });
});




// перемещаю номер телефона и корзинку на высоту равную блоку навигации
let widthNav = $(".nav").height();
$(".header__phone").css({
  top: widthNav,
});

let widthHeader = $(".logo__wrap").height();




// BURGER

// $(".header-burder-open").on("click", function () {
// 	$(".header__buy-icon").css({
// 		top: widthNav,
// 	});
// });

// $(".header-burder-close").on("click", function () {


$(".header-burder-open").on("click", function () {
	$(".nav").fadeIn();
	$(this).fadeOut();
  $(".header-burder-close").fadeIn();

	$(".header__phone").fadeIn();
  $(".header__buy-icon").css({
    top: widthNav,
    });
	$('.logo__wrap h2').css({
		"color": "#3F3F3F",
	});
	$('.logo__wrap img').css({
		"display": "none",
	});
	$('.burger-logo').css({
		"display": "block",
	});
	$('.header').css({
		"background": "#282828",
	});
	// $('.header-burder').css({
	// 	marginRight: 30,
	// });
});


$(".header-burder-close").on("click", function () {
	$(".nav").fadeOut();
	$(this).fadeOut();
	$(".header-burder-open").fadeIn();
  $(".header__phone").fadeOut();
  $(".header__buy-icon").css({
    top: 35,
    });
	$('.logo__wrap h2').css({
		"color": "#fff",
	});
	$('.logo__wrap img').css({
		"display": "block",
	});
	$('.burger-logo').css({
		"display": "none",
	});
		$('.header').css({
		"background": "#28282800",
  });
});



$(document).ready(function () {
  $(".header-wrap-burger").on("click", function () {
    var cur_width = $(window).width();
    if (cur_width >= 900) {
      navBig();
    } else if (cur_width <= 570) {
      navMin();
    }
  })
});

$('#question-name').focus(function(){
	$('.input-name').addClass('active');
	$('#question-name').attr("placeholder", "");
});
$('#question-phone').focus(function(){
	$('.input-phone').addClass('active');
	$('#question-phone').attr("placeholder", "");
});