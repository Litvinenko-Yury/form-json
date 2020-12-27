'use strict';


document.addEventListener('DOMContentLoaded', () => {
  const radioWrapper = document.querySelector('#radio'),
    labelInput = radioWrapper.querySelectorAll('.field-radio__input'),
    select = document.querySelector('#select');

  calcTotal(); // старт функции после загрузки страницы

  /*функция, считает TOTAL: sum*/
  function calcTotal() {
    labelInput.forEach((item, i) => {
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
    document.querySelector('#sum').textContent = `$${a}`;
  }

  /*функция, устанавливает на страницу значение Selected plan: #*/
  function setInfoText(a) {
    document.querySelector('#num').textContent = `${a}`;
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


