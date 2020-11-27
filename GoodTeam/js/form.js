
// создаю кастомный Select

$('.checkselect-filter').click(function () {
  $(this).attr('tabindex', 2).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.checkselect-filter .dropdown-menu li').click(function () {
  $(this).parents('.checkselect-filter').find('span').text($(this).text());
  $(this).parents('.checkselect-filter').find('input').attr('value', $(this).attr('id'));
});

// Стилизую выпадающее меню Select

$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
});

// открываем окно пользовательского соглашения

$(".contract").on("click", function () {
  $(".personal").show(500);
  $('body').css({'overflow' : 'hidden'});

});

$(".personal__close").on("click", function () {
  $(".personal").hide(500);
  $('body').css({'overflow' : 'auto'});
});




let selectContent = '';
// благодяря этой переменной мы будем проводить валидацию форму - был ли произведен выбор вакансии

document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
  this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      selectContent = this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
    }
  })
}

window.addEventListener('click', function (e) {
  const select = document.querySelector('.custom-select');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});















const form = document.querySelector('form');
const profession = document.querySelector('.custom-select__trigger span').textContent;
const username = document.querySelector('.username');
const date = document.querySelector('.form-date');
const gender = document.querySelector('.gender');
const phone = document.querySelector('.form-phone');
const email = document.querySelector('.form-email');


console.log(phone);


form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // const profession = ();
  const usernameValue = username.value;
  console.log(usernameValue)
  const dateValue = date.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  // проверка поля Профессия

  if (selectContent === '') {
    setErrorFor(profession, 'выберите профессию');
  } else {
    setSuccessFor(profession);
  }

  // проверка поля ФИО

  if (usernameValue === '') {
    setErrorFor(username, 'Это поле не может быть пустым');
  } else if (!isName(usernameValue)) {
    setErrorFor(username, 'Введите корректные данные');
    console.log('некоректные данные');
  } else {
    console.log('прошли данные');
    setSuccessFor(username);
  }

  // проверка поля Дата рождения

  if (dateValue === '') {
    setErrorFor(date, 'Укажите дату рождения');
  } else if (!validDate(dateValue)) {
    setErrorFor(date, 'введите формат дд.мм.гггг ');
    console.log(dateValue);
  } else {
    setSuccessFor(date);
  }

  // проверка поля Пол
  
  if (!validateGender(gender)) {
    setErrorFor(gender, 'укажите пол');
  } else {
    setSuccessFor(gender);
  }

  // проверка Номера телефона

  if (phoneValue === '') {
    setErrorFor(phone, 'укажите телефон');
    
  } else {
    setSuccessFor(phone);
  }

  // проверка поля Email

  if (emailValue === '') {
    setErrorFor(email, 'введите email');
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, 'поле заполнено не корректно');
    console.log(email);
  } else {
    setSuccessFor(email);
  }
}



// отрисовываем ошибки 

function setErrorFor(input, message) {
  if (input === 'вакансия') {
    const formControl = document.querySelector('.custom-select-wrapper').parentElement;
    const small = document.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  } else {
    const formControl = input.parentElement;
    const small = input.parentElement.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }
}



// ------------- ВАЛИДАЦИЯ ---------------- //

// валидация Select

function setSuccessFor(input) {
  if (input == profession) {
    const formControl = document.querySelector('.custom-select-wrapper').parentElement;
    formControl.className = 'form-control success';
  } else {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
}

// валидация ФИО

function isName(username) {
  console.log('пришло из проверки' + username);
  return /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/.test(username);
}



// валидация Даты

function validDate(date) { // date в формате 31.12.2014
  console.log(date);
  var d_arr = date.split('.');
  var d = new Date(d_arr[2] + '/' + d_arr[1] + '/' + d_arr[0] + ''); // дата в формате 2014/12/31
  if (d_arr[2] != d.getFullYear() || d_arr[1] != (d.getMonth() + 1) || d_arr[0] != d.getDate()) {
    return false; // неккоректная дата
  };
  return true;
}

// валидация Gender

validateGender = function(gender) {
  if ( gender.querySelector('input[name="gender"]:checked')) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  var regular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  console.log('прошла');
  return regular.test(String(email).toLowerCase());
}


// $(".form-phone").mask("+7(999)999-99-99");
// $("#form-phone").mask("+7(999) 999-9999");

//1 пример

//2 пример
// $("#date").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
// $("#index").mask("999999", {placeholder: " " });
//3
// $("#phone3").mask("8(999) 999-9999", {
  // completed: function(){ alert("Вы ввели номер: " + this.val()); }
// });
//4
// $("#number").mask("0.9?9");
//5
// $.mask.definitions['~']='[+-]';
// $("#number2").mask("~9.99");
// $.mask.definitions['h']='[A-Fa-f0-9]';
// $("#color").mask("#hhhhhh");




$(function() {
  // $.mask.definitions['~'] = "[+-]";
  $(".form-date").mask("99.99.9999",{placeholder:"28.07.2002" });
  $(".form-phone").mask("+7(999) 999-9999");
  // $("#phoneExt").mask("(999) 999-9999? x99999");
  // $("#iphone").mask("+33 999 999 999");
  // $("#tin").mask("99-9999999");
  // $("#ssn").mask("999-99-9999");
  // $("#product").mask("a*-999-a999", { placeholder: " " });
  // $("#eyescript").mask("~9.99 ~9.99 999");
  // $("#po").mask("PO: aaa-999-***");
  // $("#pct").mask("99%");
  // $("#phoneAutoclearFalse").mask("(999) 999-9999", { autoclear: false, completed:function(){alert("completed autoclear!");} });
  // $("#phoneExtAutoclearFalse").mask("(999) 999-9999? x99999", { autoclear: false });

  // $("input").blur(function() {
  //     $("#info").html("Unmasked value: " + $(this).mask());
  // }).dblclick(function() {
  //     $(this).unmask();
  // });
});