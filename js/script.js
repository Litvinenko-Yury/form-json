'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');


  /*==============*/
  /**Класс (т.е. функция-конструктор) добавлеет верстку на страницу (нужное количество чек-боксов и их содержимое)*/
  class FieldRadio {
    constructor(text1, text2, value, parentSelector) {
      this.text1 = text1;
      this.text2 = text2;
      this.value = value;
      this.parent = document.querySelector(parentSelector); // родитель, в конец которогу будем вставлять верстку
    }

    render() {
      // метод для формирования верстки и добавления на страницу
      const element = document.createElement('li');
      element.classList.add('field-radio__input-wrap');

      element.innerHTML = `
      <label class="field-radio__label">
      <input class="field-radio__input" type="radio" name="licensePlan$" value="${this.value}">
      <div class="field-radio__name-text">
        <span class="field-radio__name-text-inner">${this.text1}</span>
        <span class="field-radio__name-text-inner--last">${this.text2}</span>
      </div>
    </label>`;

      this.parent.append(element); // вставить element в конец роителя
    }
  }


  //доб. экземпляр класса на страницу
  new FieldRadio(
    'LICENSE PLAN #1',
    '$13 per license',
    13,
    '.field-radio'
  ).render(); //создание экземпляра класса FieldRadio (т.е. объекта) с передачей аргументов, и вызов метода

  //доб. экземпляр класса на страницу
  new FieldRadio(
    'LICENSE PLAN #2',
    '$22 per license',
    22,
    '.field-radio'
  ).render();

  //доб. экземпляр класса на страницу
  new FieldRadio(
    'LICENSE PLAN #3',
    '$34 per license',
    34,
    '.field-radio'
  ).render();

  /*==============*/
  /**установить атрибут checked нужному input */
  const inputs = form.querySelectorAll('.field-radio__input'); // найти все input в form
  function setChecked() {
    const fieldInput = form.querySelectorAll('.field-radio__input');
    fieldInput[fieldInput.length - 1].setAttribute('checked', 'true');
  }
  setChecked();


  /**========================== */
  const radioWrapper = form.querySelector('#radio'),
    select = form.querySelector('#select'),
    sumTotalText = form.querySelector('#sum'),
    numText = form.querySelector('#num');

  calcTotal(); // старт функции после загрузки страницы

  /*функция, считает TOTAL: sum*/
  function calcTotal() {
    inputs.forEach((item, i) => {
      if (item.checked) {
        let sum = item.value * select.value,
          num = i + 1;

        setTotalSum(sum);
        setInfoText((num));
      }
    });
  }

  /*функция, устанавливает на страницу значение TOTAL: sum*/
  function setTotalSum(a) {
    sumTotalText.textContent = `$${a}`;
  }

  /*функция, устанавливает на страницу значение Selected plan: #*/
  function setInfoText(a) {
    numText.textContent = `${a}`;
  }

  /*=====================*/
  //обработчики
  /*=====================*/
  radioWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('field-radio__input')) {
      calcTotal();
    }
  });

  select.addEventListener('click', () => {
    calcTotal();
  });
});
