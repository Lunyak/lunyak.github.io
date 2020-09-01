
$(".order-item-more").click(function() {
  $('.order-product-drop-discription').fadeIn();
  $('.order-item-more').fadeOut();
})

$('.close-drop-discription').on('click', function(){
  $('.order-product-drop-discription').fadeOut();
  $('.order-item-more').fadeIn();
});






// кнопки формы Имя
$('#order-input-name').focus(function(){
	$('.order-name label').addClass('active');
	$('#order-input-name').attr("placeholder", "");
});
// кнопки формы mail
$('#order-input-mail').focus(function(){
	$('.order-mail label').addClass('active');
	$('#order-input-mail').attr("placeholder", "");
});
// кнопки формы phone
$('#order-input-phone').focus(function(){
	$('.order-phone label').addClass('active');
	$('#order-input-phone').attr("placeholder", "");
});
// кнопки формы city
$('#order-input-city').focus(function(){
	$('.order-city label').addClass('active');
	$('#order-input-city').attr("placeholder", "");
});
// кнопки формы street
$('#order-input-street').focus(function(){
	$('.order-street label').addClass('active');
	$('#order-input-street').attr("placeholder", "");
});
// кнопки формы house
$('#order-input-house').focus(function(){
	$('.order-house label').addClass('active');
	$('#order-input-house').attr("placeholder", "");
});
// кнопки формы flat
$('#order-input-flat').focus(function(){
	$('.order-flat label').addClass('active');
	$('#order-input-flat').attr("placeholder", "");
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
$('#remove-delet').on('click', function(){
  $(".order-product-popup").css("display", "flex").show().fadeOut();
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
	// $('.logo__wrap').css({
	// 	"margin-right": "0",
	// });
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
	// $('.logo__wrap').css({
	// 	"margin-right": "30px",
	// });
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