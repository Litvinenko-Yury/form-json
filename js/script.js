'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form'),
    radioWrapper = form.querySelector('#radio'),
    inputs = radioWrapper.querySelectorAll('.field-radio__input'),
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
