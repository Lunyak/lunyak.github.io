// Учимся прикреплять к кнопкам события
/*
function addErrorClass(elementId) {
   var element = document.getElementById(elementId);
   element.className = 'error';
}

function addErrorClassToAllInputs() {
   addErrorClass('firstname');
   addErrorClass('lastname');
   addErrorClass('adress');
}

var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', addErrorClassToAllInputs );


// нашел урок как раз для моих целей.
let buttonGo = document.querySelector('.go__btn');
let inputGo = document.querySelector('.out');
let inputValue = inputGo.value;

console.log(inputValue);


buttonGo.onclick = function () {
   console.log('work');
}
//Мой первый калькулятор

var operationButtons = document.getElementsByClassName('button__massive')
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function makeOperation(operationCode) {
   var number1 = Number(input1.value);
   var number2 = Number(input2.value);

   if (operationCode === '+') {
      var result = number1 + number2;
   } else if (operationCode === '-') {
      var result = number1 - number2;
   } else if (operationCode === '*') {
      var result = number1 * number2;
   } else if (operationCode === '/') {
      var result = number1 / number2;
   } else {
      window.alert('я хз что делать');
   }
   //window.alert(result);
   document.querySelector('.out2').innerHTML = result;
   //inputvalue.innerHTML = result;
   console.log(result)
}

function onOperationButtonClick(eventObject) {
   var clickedElement  = eventObject.currentTarget;
   var operation = clickedElement.innerHTML;
   makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
   var button = operationButtons[i];
   button.addEventListener('click', onOperationButtonClick);
}

// хочу прикрепить вывод значения к инпуту
// хватаюсь за элемент по ID  ----  добавляю свойство
//inerHTML - позволяет заменить содержимое out
// = означает присвоить
//document.getElementById('out2').innerHTML = 'второй ваариант текста';
// Так же можно находить элементы по селектору
// не забудь указать что это селектор поставив точку, а ID #
//document.querySelector('.out2').innerHTML = 'третий вариант текста';
//  как итог урока я хочу добавить в содеримоежлемента
//результат вычисления калькулятора, которое лежит в result
//document.querySelector('.out2').innerHTML = result;
//конструкция не работает т.к. переменная локальная и я не могу получить к
//ней доступ. теперь нужно понять как вывести локальную переменную
//в глобальное пользлывание
// у меня получилось document.querySelector('.out2').innerHTML = result;
// тперь нужно добавить это значение в параментр value


//вызывает событие по нажатию кнопки, все работает.




// практика видео №1 - работаем с inputon.

const button3 = document.querySelector('.button3');
const input3 = document.querySelector('.input3');

button3.onclick = () => {
   let num = +input3.value;
   if (num >= 16 && num < 60) {
      console.log('welcome');
   }
   else {
      console.log('good bay')
   }
}

// выводим в консоль значение бегунка input
document.querySelector('.button4').onclick = () => {
   console.log(document.querySelector('.input4').value);
}

document.querySelector('.input4').value
// следим за состоянием бугенка input.

document.querySelector('.input4').oninput = () => {
   console.log(document.querySelector('.input4').value);
   document.querySelector('span').innerHTML = document.querySelector('.input4').value;
}

// следение за нажатием chckbox.
document.querySelector('#btn__chek').onclick = () => {
   console.log(document.querySelector('#for').value);
   let myCheckBox = document.querySelector('#for');
   console.log(myCheckBox.checked);
   if (myCheckBox.checked) {
      console.log('нажат');
   }
   else {
      console.log('не нажат');
      }
}

document.querySelector('#btn__two').onclick = (event) => {
   event.preventDefault();
   let text = document.querySelector('#two');
   console.log(text.value);
   text.value = 'каляки маляки свои оставляешь, да?'
}


// изучаем циклы
let infinity = document.querySelectorAll('.for__one');
console.log(infinity);

for (let i = 0; i < infinity.length; i++) {
   console.log(infinity[i]);
   infinity[i].style.background = '#020202';
   infinity[i].onclick = two;
}

function two() {
   console.log('work');
}


document.querySelector('button').onclick = () => {
   let r = document.querySelectorAll('input[type="radio"]');
   console.log(r);
   for (let i = 0; i < r.length; i++) {
      if (r[i].checked) {
         console.log(r[i].value);
      }
   }
}

for (let i = 0; i <= 10; i++) {
   document.querySelector('#out').innerHTML += i +' ';
}

*/

// Вложенные функции
/*
let out = document.querySelector('.out3');



for (i = 0; i < 5; i++) {
   for (k = 1; k < 10; k++) {

      out.innerHTML += k
   }
   out.innerHTML += ' ';
}



// Таблица умножения

for (i = 1; i <= 9; i++) {
   for (let k = 2; k <= 9; k++) {
      out.innerHTML += `${i}*${k}=${k * i}<br>`
      //out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
   }
   out.innerHTML += '<hr>';
}



//Учим функции
let f1 = document.querySelector('.f-1');

function one () {
   console.log('work');
}

one();

f1.onclick = one;
*/

/*

const cards = document.querySelectorAll('.cards');

for (let i = 0; i < cards.length; i++) {
   const card = cards[i];
   card.addEventListener('mousemove', startRotate);
   card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
   const cardItem = this.querySelector('.card-item');
   const halfHeight = cardItem.offsetHeight / 2;
   cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 5 +'deg)';
}

function stopRotate(event) {
   const cardItem = this.querySelector('.card-item');
   cardItem.style.transform = 'rotate(0)';
}

// рабчая версия:

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
   const card = cards[i];
   card.addEventListener('mousemove', rotate);
   //card.addEventListener('mouseout', stopRotate);
}

function rotate (even) {
   const cardItem = this.querySelector('.card-item');
   const halfHeight = cardItem.offsetHeight / 2;
   cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 5 +'deg)';
}




*/

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
   const card = cards[i];
   card.addEventListener('mousemove', startRotate);
   card.addEventListener('mouseout', stopRotate);
}

function startRotate(even) {
   const cardItem = this.querySelector('.card-item');
   const halfHeight = cardItem.offsetHeight / 2;
   const halfWidth = cardItem.offsetWidth / 2;
   cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 +'deg)';
}

function stopRotate(even) {
   const cardItem = this.querySelector('.card-item');
   cardItem.style.transform = 'rotate(0)';
}
