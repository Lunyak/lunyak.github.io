


// открываем окно пользовательского соглашения

$(".contract").on("click", function () {
  $(".personal").show(500);
  $('body').css({
    'overflow': 'hidden'
  });
});

// закрываю окно пользовательского соглашения
$(".personal__close").on("click", function () {
  $(".personal").hide(500);
  $('body').css({
    'overflow': 'auto'
  });
});
// подключаю маску для даты рождения
$(function () {
  $(".form-date").mask("99.99.9999", {
    placeholder: "28.07.2002"
  });
  $(".form-phone").mask("+7(999) 999-9999");
});