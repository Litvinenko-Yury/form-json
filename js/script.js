'use strict';

const radioWrapper = document.querySelector('#radio'),
  labelInput = radioWrapper.querySelectorAll('.field-radio__input'),
  select = document.querySelector('#select');

/*функция, считает TOTAL: sum*/
function calcTotal() {
  labelInput.forEach(item => {
    if (item.checked) {
      let sum = item.value * select.value;
      setTotalSum(sum);
    }
  });
}

/*функция, устанавливает на страницу значение TOTAL: sum*/
function setTotalSum(a) {
  document.querySelector('#sum').textContent = `$${a}`;
}

/*функция, устанавливает на страницу значение Selected plan: #*/
function setPlanText(a) {

}


/*обработчик на все radioWrapper*/
radioWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('field-radio__input')) {
    calcTotal();
  }
});

/*обработчик на select*/
select.addEventListener('click', () => {
  calcTotal();
});





/**/
