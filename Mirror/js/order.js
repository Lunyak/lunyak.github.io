
$(".order-item-more").click(function() {
  $('.order-product-drop-discription').fadeIn();
  $('.order-item-more').fadeOut();
})

$('.close-drop-discription').on('click', function(){
  $('.order-product-drop-discription').fadeOut();
  $('.order-item-more').fadeIn();
});



$('#catalog-btn-basket').on('click', function(){
  $(".order-popup-formalized").css("display", "flex").hide().fadeIn();
});

$('.close-popup').on('click', function(){
  $(".order-popup-formalized").css("display", "flex").show().fadeOut();
});

$('.order-product-popup-close').on('click', function(){
  $(".order-product-popup").css("display", "flex").show().fadeOut();
});
$('.order-item-close img').on('click', function(){
  $(".order-product-popup").css("display", "flex").hide().fadeIn();
});

// перемещаю номер телефона и корзинку на высоту равную блоку навигации
let widthNav = $(".nav").height();
console.log(widthNav);
$(".header__phone").css({
  top: widthNav,
});



// BURGER




$(".header-burder-open").on("click", function () {
	$(".nav").fadeIn();
	$(this).fadeOut();
	$(".header-burder-close").fadeIn();
	$(".header__buy-icon").css({
		top: widthNav,
	});
	$(".header__phone").fadeIn();
	$('.logo__wrap').css({
		"margin-right": "0",
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
});


$(".header-burder-close").on("click", function () {
	$(".nav").fadeOut();
	$(this).fadeOut();
	$(".header-burder-open").fadeIn();
	$(".header__phone").fadeOut();
	$(".header__buy-icon").css({
		top: 32,
	});
	$('.logo__wrap').css({
		"margin-right": "30px",
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
		"background": "#282828",
	});
});