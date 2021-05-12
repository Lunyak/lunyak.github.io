
let parent = document.querySelector('.test__inner');
let header = document.querySelector('.test__header');
let popup = parent.querySelector('.test__popup-good');
var containerTest = parent.querySelector('.test__contant-qustions');
let titlePopup = popup.querySelector('.test__popup-good-info-title');
let buttonNext = parent.querySelector('.test__btn');
let buttonPrev = parent.querySelector('.test__btn-prev');
let popupTitle = popup.querySelector('.test__popup-good-info-title');
let popupDesc = popup.querySelector('.test__popup-good-info-desc');
let step = 0;
let state;
let setAnswer = {};

window.onload = function() {
 $.ajax({
    url: 'ajax/data.json',
   success: function(data) {
    state = data.test;
    render();
    setCallbacks();
    disabledArrowLeft();
   }
 })
}



function setCallbacks() {
  buttonNext.addEventListener('click', nextStep )
  buttonPrev.addEventListener('click', prevStep )
}

function render() {
  renderDots();
  renderItems();
  renderTitle();
  toggleUserChange();
}

function renderItems() {
  
  state.forEach(function(stepState) {
    if (stepState.qustion === step) {
      let type = stepState.type;

      if (stepState.modify) {
        containerTest.setAttribute("data-modify", `${stepState.modify}`)
      } else {
        containerTest.setAttribute("data-modify", "")
      }

      if (type === 'radio') {
        containerTest.classList.remove('another')
        
        stepState.items.forEach(function(item) {
          renderInput(item);
        })

      } else if (type === 'checkbox') {
        containerTest.classList.add('another');
        stepState.items.forEach(function(item) {
          renderCheckbox(item);
        })
        toggleClassCheckbox();

      } else if (type === 'select') {
        stepState.items.forEach(function(item) {
          containerTest.classList.remove(`questions-table`)
          containerTest.classList.add('another')
          renderSelect(item);
        })
        activeButton();
      } else if (type === 'toggle') {
        containerTest.classList.add('another')
        renderToggle(stepState.items);

      } else if (type === 'number') {
        containerTest.classList.add('another')
        renderNumber(stepState.items);
      }
    }
  })
}

function renderInput(item) {
  containerTest.insertAdjacentHTML("afterBegin", `
  <label class="test__contant-qustions-radio ${item.isToggle ? 'active' : ''} ${item.modify ? item.modify : ''}" for="${item.id}" data-id="${item.id}">
    <input type="${item.type}" name="${item.name}" id="${item.id}">
    <span>${item.text}</span>
    ${item.discription ? `<p>${item.discription}</p>` : ''}
  </label>`)
}

function renderCheckbox(item) {
  containerTest.insertAdjacentHTML("afterBegin", `
  <label class="test__contant-qustions-radio ${item.isToggle ? 'active' : ''} ${item.modify ? item.modify : ''}" for="${item.id}" data-id="${item.id}">
    <input type="${item.type}" name="${item.name}" id="${item.id}">
    <span>${item.text}</span>
    ${item.discription ? `<p>${item.discription}</p>` : ''}
  </label>`)

 
}

function toggleClassCheckbox(item) {

  let setCheckbox = [].slice.call(containerTest.querySelectorAll('.test__contant-qustions-radio'))
  setCheckbox.forEach(element => {
    activeButton();
   
    element.addEventListener('change', function () {
      element.classList.toggle('active');
    })
  })
}

function renderSelect(item) {
  renderSelectParent(item);
  renderSelectOption(item);
  selectInit();
}

function renderToggle(item) {
  containerTest.insertAdjacentHTML("afterBegin", `<div class="test__contant-qustions-toggle-wrap"></div>`);
  renderToggleItem(item);
}

function renderNumber(item) {
  containerTest.insertAdjacentHTML("afterBegin", `
    <label class="test__contant-qustions-number" for="${item.id}">
      <div class="test__contant-qustions-number-error">В тесте могут принять участие люди не моложе 55 лет.</div>
      <input class="test__contant-qustions-number-input" name="${item.name}" min="55" max="110"" id="${item.id}" type=${item.type} value=${item.isToggle}>
      <span>${item.isToggle}</span>
      ${numberArrowLeft}${numberArrowRight}
    </label>`
  );

  let parent = document.querySelector('.test__contant-qustions');
  let input = parent.querySelector('input');
  let text = parent.querySelector('span');
  let arrowL = parent.querySelector('.test__number-left');
  let arrowR = parent.querySelector('.test__number-right');
  let inputVal = input.value;

  arrowL.addEventListener('click', function() {
    input.value--
    if (input.value < 55) {
      input.value = 55
      showError();
    } else {

    }
  });

  arrowR.addEventListener('click', function() {
    input.value++;
    if (input.value > 110) {
      input.value = 110
    } else if (input.value < 55) {
      input.value = 55;
      showError()
    }
  });

  activeButton();

  function changeNumber() {
    input.addEventListener('change', function () {
      if (input.value > 110) {
        input.value = 110
      } else if (input.value < 55) {
        input.value = 55;
        showError()
      }
    })
  }

  changeNumber();

  function showError() {
    let error = document.querySelector('.test__contant-qustions-number-error');
    error.classList.add('active');
    setTimeout(deletActive, 1000)
  }

  function deletActive() {
    let error2 = document.querySelector('.test__contant-qustions-number-error');

    error2.classList.remove('active')
  }
}

function renderToggleItem(data) {
  let parent = containerTest.querySelector('.test__contant-qustions-toggle-wrap');
  data.forEach(item => {
    parent.insertAdjacentHTML("afterBegin", `
      <label class="test__contant-qustions-toggle ${item.isToggle ? 'active' : ''}" for="${item.id}">
        <input class="test__contant-qustions-toggle-input" name="${item.name}" id="${item.id}" 
        type=${item.type} ${item.isToggle ? 'checked' : ''}>
        <span>${item.text}</span>
      </label>
        `
    );
  });
}

function renderSelectParent(item) {
  let answer;
  if (item.isToggle === 'Выберете из списка') {
    answer = 'search'
  }

  containerTest.insertAdjacentHTML("afterBegin", `
    <div class="test__contant-qustions-select-wrap ${answer ? '' : 'select'}">
      <input class="test__contant-qustions-select-input" type="text" placeholder="поиск" value="${item.isToggle}">
      ${iconSearch}${iconArrow}<ul class="test__contant-qustions-select"></ul></div>
    `
  );
}

function renderSelectOption(data) {
  let selectParent = document.querySelector('.test__contant-qustions-select');
  for (let i = 0; i < data.option.length; i++) {
    selectParent.insertAdjacentHTML("beforeend",  `<li class="test__contant-qustions-select-option" value=${i}>${data.option[i]}</li>`)
  }
}

function selectInit() {
  let parent = $('.test__contant-qustions-select-wrap');
  let option = $('.test__contant-qustions-select-option');
  let inputSearch = $('.test__contant-qustions-select-input');
  let dropMenu = $('.test__contant-qustions-select');

  parent.keyup(event, function() {
    
    let container, li, input_val;
    container = parent;
    input_val = $('.test__contant-qustions-select-input').val().toUpperCase();

    if (["ArrowDown", "ArrowUp", "Enter"].indexOf(event.key) != -1) {
        keyControl(event, container)
    } else {
      li = container.find("ul li");
      li.each(function (i, item) {
        if ($(this).text().toUpperCase().indexOf(input_val) > -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });

      container.find(option).removeClass("selected");
     
      setTimeout(function () {
          container.find("ul li:visible").first().addClass("selected");
      }, 100)
    }
  })

  function keyControl(e, container) {
  if (e.key == "ArrowDown") {

    if (container.find("ul li").hasClass("selected")) {
        if (container.find("ul li:visible").index(container.find("ul li.selected")) + 1 < container.find("ul li:visible").length) {
            container.find("ul li.selected").removeClass("selected").nextAll().not('[style*="display: none"]').first().addClass("selected");
        }
    } else {
        container.find("ul li:first-child").addClass("selected");
    }

    } else if (e.key == "ArrowUp") {

      if (container.find("ul li:visible").index(container.find("ul li.selected")) > 0) {
          container.find("ul li.selected").removeClass("selected").prevAll().not('[style*="display: none"]').first().addClass("selected");
      }
    } else if (e.key == "Enter") {
      container.find(inputSearch).val(container.find("ul li.selected").text()).blur();
      onSelect(container.find("ul li.selected").text())
    }

    container.find("ul li.selected")[0].scrollIntoView({
      behavior: "smooth",
    });
  }

  function onSelect(val) {
      return val
  }

  $(".test__contant-qustions-select-input").focus(function () {
      $(this).closest(parent).find("ul").addClass('active');
      let input_va = $('.test__contant-qustions-select-input');
      input_va.val('');
      activeButton()
      parent.addClass('search')
  });

  $(".test__contant-qustions-select-option").click(function () {
    let that = this;
    setTimeout(function () {
        $(that).closest(parent).find("ul").removeClass('active');
        parent.removeClass('search')
        parent.addClass('select')
    }, 100);
  });


  $(document).on('click', '.test__contant-qustions-select-wrap ul li', function () {
      $(this).closest(parent).find("input").val($(this).text()).blur();
      onSelect($(this).text())
  });

  $(option).hover(function () {
      $(this).closest(parent).find("ul li.selected").removeClass("selected");
      $(this).addClass("selected");
  });
}

function renderDots() {
  let parentDots = document.querySelector('.test__contant-paginations')

  if (state) {
    parentDots.insertAdjacentHTML("afterBegin", `<div class="test__contant-paginations-number">${step + 1}/${state.length}</div>`)
    for (let i = 0; i < state.length; i++) {
      if (step === i) {
        parentDots.insertAdjacentHTML("beforeend", `<div class="test__contant-paginations-dots-item active"></div>`)
      } else {
        parentDots.insertAdjacentHTML("beforeend", `<div class="test__contant-paginations-dots-item"></div>`)
      }
    } 
  }
}

function renderTitle() {
  let container = document.querySelector('.test__contant-title')

  for (let i = 0; i < state.length; i++) {
    if (step === i) {
      let title = state[i].title
      container.innerHTML = title;
    }
  }
}

function activeButton() {
  buttonNext.classList.toggle('active')
  buttonNext.classList.remove('disabled')
}

function disabledButton() {
  buttonNext.classList.toggle('active')
  buttonNext.classList.add('disabled')
}

function toggleUserChange() {
  let parent = document.querySelector('.test__contant-qustions');
  let toggle = document.querySelector('.test__contant-qustions-toggle-wrap');
  
  if (!parent.classList.contains('another')) {
    let children = [].slice.call(parent.children)
    children.forEach(item => {
      item.addEventListener('click', function () {
        for (let i = 0; i < children.length; i++) {
          children[i].classList.remove('active');
        }
        item.classList.add('active');
        activeButton();
      })
    })
  }

  if (toggle) {
    let toggleChild = [].slice.call(toggle.children);
    toggleChild.forEach(item => {
      item.addEventListener('click', function () {
        for (let i = 0; i < toggleChild.length; i++) {
          toggleChild[i].classList.remove('active')
        }
        item.classList.add('active');
        activeButton();
      })
    })
  }
}

function nextStep() {
  if (step < state.length - 1) {
    mutateState();
    clearContent();
    step += 1
    disabledButton();
    render()
    setCallbacks();
    disabledArrowLeft();
  } else {
    submitState();
    mutateSetAnswer();
    styleHeader();
    visiblePopup();
    chengStyleTest();
  }
}

function prevStep() {
  if (step < 1) {
    step = 1;
  }

  if (parent.classList.contains('text__inner--answer')) {
    clearContent();
    step = 0;
    activeButton();
    disabledArrowLeft();
    disabledButton();
    buttonNext.style.display = 'block';
    parent.classList.remove('text__inner--answer');
    hidePopup();
    styleHeader();
    getNewState();
    buttonPrev.querySelector('span').innerHTML = 'К прошлому вопросу'
    
  } else {
    clearContent();
    step--
    activeButton();
    render();
    setCallbacks();
    disabledArrowLeft();
  }
}

function findUserAnswerRadio() {
  let parent = [].slice.call(document.querySelectorAll('.test__contant-qustions-radio'))

  for (let k = 0; k < parent.length; k++) {
    let element = parent[k];

    if (element.classList.contains('active')) {
      userCurrectAnswer = element.getAttribute('data-id')
    }
  }
  
  return userCurrectAnswer;
}

function findUserAnswerCheckbox(item) {
  let parent = [].slice.call(document.querySelectorAll('.test__contant-qustions-radio'));

  for (let k = 0; k < parent.length; k++) {
    let element = parent[k];

    if (element.classList.contains('active')) {
      if (element.getAttribute('data-id') === item.id) {
        return true
      } else {
        false
      }
    }
  }
  
}

function clearContent() {
  let pagination = document.querySelector('.test__contant-paginations');
  let contant = document.querySelector('.test__contant-qustions');
  let title = document.querySelector('.test__contant-title')
  pagination.innerHTML = '';
  contant.innerHTML = '';
  title.innerHTML = '';
}

function mutateState() {
  for (let i = 0; i < state.length; i++) {
    let stepData = state[i];

    // console.log(stepData);
    if (step === i) {
      
      // console.log(state);
      if (stepData.type === 'radio') {
        let items = stepData.items;
        items.forEach(item => {
          if (item.id === findUserAnswerRadio()) {
            item.isToggle = true;
          } else {
            item.isToggle = false;
          }
        })
      } else if (stepData.type === 'checkbox') {
        let items = stepData.items;
        items.forEach(item => {
          if (findUserAnswerCheckbox(item)) {
            item.isToggle = true;
          } else {
            item.isToggle = false;
          }
        })

  
      } else if (stepData.type === 'select') { 
        let items = stepData.items;
        items.forEach(item => {
          item.isToggle = findUserAnswerSelect();
        })
      } else if (stepData.type === 'toggle') {
        let items = stepData.items;
        items.forEach(item => {
          if (item.text === findUserAnswerToggle()) {
            item.isToggle = true
          }
        })
      } else if (stepData.type === 'number') {
        let items = stepData.items;
        items.isToggle = findUserAnswerNumber();
      }
    } else {
      // return null
    }
  }
 
}

function findUserAnswerSelect() {
  let parent = [].slice.call(document.querySelectorAll('.test__contant-qustions-select-option'));
  for (let i = 0; i < parent.length; i++) {
    let element = parent[i];
    if (element.classList.contains('selected')) {
      return element.textContent;
    }
  }
}

function findUserAnswerToggle() {
  let items = [].slice.call(document.querySelectorAll('.test__contant-qustions-toggle'));
  for (let i = 0; i < items.length; i++) {
    let element = items[i];
    if (element.classList.contains('active')) {
      return element.innerText;
    }
  }
}

function findUserAnswerNumber() {
  let input = document.querySelector('.test__contant-qustions-number-input');
  return input.value;
}

function disabledArrowLeft() {
  if (step < 1) {
    buttonPrev.style.display = "none";
  } else {
    buttonPrev.style.display = "flex";
  }
  buttonPrev.addEventListener('click', function() {
  })
}

function submitState() {
  $.ajax({
    type: 'GET',
    url: 'ajax/test.json',
    data: setAnswer,
    success: function(data) {
      console.log(setAnswer);
      if (data.answer === 1) {
        renderOneAnswer();
      } else if (data.answer === 2) {
        renderTwoAnswer();
      } else if (data.answer === 3) {
        renderThreeAnswer();
      }
    }
  });
}

function styleHeader() {
  header.classList.toggle('header--answer')
}

function renderOneAnswer() {
  popupTitle.innerHTML = 'Риск: умеренный';
  popupDesc.innerHTML = 'Продолжайте вести здоровый образ жизни, следить за своим здоровьем и регулярно проходить плановые осмотры.';
}

function chengStyleTest() {
  clearContent();
  clearOther();
  parent.classList.add('text__inner--answer');
  buttonPrev.querySelector('span').innerHTML = 'Начать заново'
}

function renderTwoAnswer() {
  clearContent();
  clearOther();
  parent.classList.add('text__inner--answer');
  titlePopup.innerHTML = 'Риск: средний'
  popupDesc.innerHTML = 'Вам рекомендовано обратиться к врачу, так как есть высокие факторы риска, которые могут привести к хронической сердечной недостаточности.'
}

function renderThreeAnswer() {
  clearContent();
  clearOther();
  parent.classList.add('text__inner--answer');
  titlePopup.innerHTML = 'Риск: высокий'
  popupDesc.innerHTML = 'Вам следует незамедлительно обратиться к врачу, так как есть высокая вероятность наличия хронической сердечной недостаточности'
}

function clearOther() {
  buttonNext.style.display = 'none'
}

function mutateSetAnswer() {
 
  state.forEach(question => {
    if (question.type === 'radio') {
      let items = question.items;
      items.forEach(item => {
        if (item.isToggle = true) {
          setAnswer[question.qustion] = `${item.text}` ;
        }
      })
     
    } else if (question.type === 'checkbox') {
      let items = question.items;
      let answerChexbox = '';
      items.forEach(item => {
        if (item.isToggle === true) {
          answerChexbox = answerChexbox + `${item.text}, `
        }
        setAnswer[question.qustion] = ` ${answerChexbox}` ;
      })
    } else if (question.type === 'select') {
      let items = question.items;
      items.forEach(item => {
        setAnswer[question.qustion] = `${item.isToggle}` ;
      })
    } else if (question.type === 'toggle') {
      let items = question.items;
      items.forEach(item => {
        if (item.isToggle = true) {
          setAnswer[question.qustion] = `${item.text}` ;
        }
      })
    } else if (question.type === 'number') {
      let items = question.items;
      setAnswer[question.qustion] = `${items.isToggle}` ;
    }
  })
}

function visiblePopup() {
  let popup = parent.querySelector('.test__popup-good');
  popup.style.display = 'flex'
}

function hidePopup() {
  let popup = parent.querySelector('.test__popup-good');
  popup.style.display = 'none'
}

function getNewState() {
  $.ajax({
      url: 'ajax/data.json',
    success: function(data) {
      state = data.test;
      render();
      setCallbacks();
      disabledArrowLeft();
    }
  })
}

let iconSearch = `
<svg class="test__search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.5 15C12.0899 15 15 12.0899 15 8.5C15 4.91015 12.0899 2 8.5 2C4.91015 2 2 4.91015 2 8.5C2 12.0899 4.91015 15 8.5 15Z" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 18L13 13" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
let iconArrow = `
  <svg class="test__search-icon-arrow" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8934 2.3943L9.44678 9.78861L2.00012 2.3943" stroke="#3C3C3C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
let numberArrowLeft = `
  <svg class="test__number-left" width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.36756 16.8409L1.99957 9.36824L9.4201 1.94772" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

`
let numberArrowRight = `
  <svg class="test__number-right" width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.47228 1.94764L9.84027 9.42033L2.41975 16.8409" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
