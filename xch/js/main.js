

let nav = document.querySelector('.nav');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  nav.classList.toggle('active')
})

let form = document.querySelector('.online__form');
let email = document.querySelector('.online__form-email');
let date = document.querySelector('.online__form-date');
let politics = document.querySelector('.online__form-politics');
let buttonOnline  = document.querySelector('.online__form-btn');



function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}

buttonOnline.addEventListener('click', function(e) {
  e.preventDefault();
  if (email.value.length == 0 && !form.classList.contains('active')) {
    form.classList.toggle('active');
    
  } else if (email.value.length !== 0 && validateEmail(email.value) ) {
    form.submit();
    form.classList.toggle('active');
  }
})

let btnShowMore = document.querySelector('.more-info__btn');
  btnShowMore.addEventListener('click', function(e) {
  e.preventDefault();
})

let btnShowAbout = document.querySelector('.about__btn');
  btnShowAbout.addEventListener('click', function(e) {
  e.preventDefault();
})

let linkPoliticks = document.querySelector('.online__form-politics-link')
  linkPoliticks.addEventListener('click', function(e) {
  e.preventDefault();
})

let btnShowOnline = document.querySelector('.online__btn')
  btnShowOnline.addEventListener('click', function(e) {
  e.preventDefault();
})

// $("#online__form").submit(function(e) {

//   e.preventDefault(); // avoid to execute the actual submit of the form.

//  var form = $(this);
//  var url = form.attr('action');
 
//  $.ajax({
//         type: "POST",
//         url: url,
//         data: form.serialize(), // serializes the form's elements.
//         success: function(data)
//         {
//           alert(data); // show response from the php script.
//         }
//       });
// });



let acordions = document.querySelectorAll('.acordion__item-head');
let buttons = document.querySelectorAll('.acordion__btn');
let items = [].slice.call(document.querySelectorAll('.acordion__item-head'));

items.forEach(function(item) {
	item.addEventListener('click', function() {
   item.parentElement.classList.toggle('active');
 })
})

var container = document.querySelector('.about__wrapper') // div в котором будет карточка
var path = container.getAttribute('data-ajax') // div в котором будет карточка
var nextQuest = document.querySelector('.about__btn') // button при нажатии на который будет след вопрос подгружаться
// var currentQuestion = 1; // индекс текущего вопроса
// При клике на кнопку nextQuest, будет идти запрос на json
nextQuest.addEventListener('click', function() {
 $.ajax({
    url: path,
   success: function(data) {
    render(data)
   }
 })
})

function render(data) {
  container.insertAdjacentHTML('beforeend', data);
}

var containerMore = document.querySelector('.more-info__wrapper') // div в котором будет карточка
var pathMore = containerMore.getAttribute('data-ajax') // div в котором будет карточка
var nextQuestMore = document.querySelector('.more-info__btn') // button при нажатии на который будет след вопрос подгружаться

nextQuestMore.addEventListener('click', function() {
 $.ajax({
    url: pathMore,
   success: function(data) {
    renderMore(data)
   }
 })
})

function renderMore(data) {
  containerMore.insertAdjacentHTML('beforeend', data);
}

var containerOnline = document.querySelector('.online__video-wrapper') // div в котором будет карточка
var pathOnline = containerOnline.getAttribute('data-ajax') // div в котором будет карточка
var btnMoreOnline = document.querySelector('.online__btn') // button при нажатии на который будет след вопрос подгружаться

btnMoreOnline.addEventListener('click', function() {
 $.ajax({
    url: pathOnline,
   success: function(data) {
    renderOnline(data);
   }
 })
})

function renderOnline(data) {
  containerOnline.insertAdjacentHTML('beforeend', data);
}

