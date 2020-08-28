

// добавляем и убираем активные состояние у меню навигации
$(".nav ul li a").click(function(e) {
  $(".nav ul li a").removeClass('nav__links-active');
  $(this).addClass('nav__links-active');
})

// добавляем и убираем активные состояние у меню навигации
$(".pagination ul li").click(function (e) {
  e.preventDefault();
  $(".pagination ul li").removeClass("pagination-current");
  $(this).addClass("pagination-current");
});


$('#catalog__sidebar-lenght-start').focus(function(){
	$('.catalog__sidebar-lenght-start label').addClass('active-input');
	$('#catalog__sidebar-lenght-start').attr("placeholder", "");
});

$('#catalog__sidebar-price-start').focus(function(){
	$('.catalog__sidebar-price-start label').addClass('active-input');
	$('#catalog__sidebar-price-start').attr("placeholder", "");
});

$('#catalog__sidebar-price-end').focus(function(){
	$('.catalog__sidebar-price-end label').addClass('active-input');
	$('#catalog__sidebar-price-end').attr("placeholder", "");
});

$('#catalog__sidebar-lenght-end').focus(function(){
	$('.catalog__sidebar-lenght-end label').addClass('active-input');
	$('#catalog__sidebar-lenght-end').attr("placeholder", "");
});

$('#catalog__sidebar-width-start').focus(function(){
	$('.catalog__sidebar-width-start label').addClass('active-input');
	$('#catalog__sidebar-width-start').attr("placeholder", "");
});

$('#catalog__sidebar-width-end').focus(function(){
	$('.catalog__sidebar-width-end label').addClass('active-input');
	$('#catalog__sidebar-width-end').attr("placeholder", "");
});



$('.catalog__sidebar-close').on('click', function(){
	$('.catalog__sidebar').fadeOut();
});
$('.catalog__form-filter-btn').on('click', function(){
	$('.catalog__sidebar').fadeIn();
});



$('.catalog__form-filter-btn').on('click', function(){
	$('body').css({
		"overflow": "hidden",
	});
});
$('.catalog__sidebar-close').on('click', function(){
	$('body').css({
		"overflow": "auto",
	});
});

