

// добавляем и убираем активные состояние у меню навигации
$(".nav ul li a").click(function(e) {
  $(".nav ul li a").removeClass('nav__links-active');
  $(this).addClass('nav__links-active');
})

// добавляем и убираем активные состояние у pagination
$(".pagination ul li").click(function (e) {
  e.preventDefault();
  $(".pagination ul li").removeClass("pagination-current");
  $(this).addClass("pagination-current");
});

// создаем надпись над кнопкой при фокусе
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




// открываем боковую панель  фильтрами
$('#catalog-filter').on('click', function(){
	$('.catalog__sidebar').addClass("translate");
});
// закрываем боковую панель  фильтрами
$('.catalog__sidebar-close').on('click', function(){
	$('.catalog__sidebar').removeClass("translate");
});






$('.checkselect-number').click(function () {
	$(this).attr('tabindex', 1).focus();
	$(this).toggleClass('active');
	$(this).find('.dropdown-menu').slideToggle(300);
	$(this).find('.arrow-select').toggleClass('active');
});

$('.checkselect-number .dropdown-menu li').click(function () {
	$(this).parents('.checkselect-number').find('span').text($(this).text());
	$(this).parents('.checkselect-number').find('input').attr('value', $(this).attr('id'));
});




$('.checkselect-category').click(function () {
	$(this).attr('tabindex', 1).focus();
	$(this).toggleClass('active');
	$(this).find('.dropdown-menu').slideToggle(300);
	$(this).find('.arrow-select').toggleClass('active');
	$(this).find('.checkselect-category-text').css({
		opacity: 1
	});
});

$('.checkselect-category .dropdown-menu li').click(function () {
	$(this).parents('.checkselect-category').find('span').text($(this).text());
	$(this).parents('.checkselect-category').find('input').attr('value', $(this).attr('id'));
});



// закрываем при клике на не раблчую область боковую панель
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $("#catalog-sidebar"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.removeClass("translate"); // скрываем его
	}
});

// закрываем при клике на не раблчую область select category
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".checkselect-category"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".checkselect-category").removeClass('active');
			$('.checkselect-category').find('.dropdown-menu').css({"display": "none"});
			$('.checkselect-category').find('.arrow-select').removeClass('active');
		}
	});
});



// закрываем при клике на не раблчую область select number
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".checkselect-number"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$(".checkselect-number").removeClass('active');
			$('#dropdown-menu-number').css({"display": "none"});
			$(this).find('.arrow-select').removeClass('active');
		}
	});
});