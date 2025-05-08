let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-text')
  .innerHTML = calculation;

function updateCalculation(num) {
  calculation += num;
  console.log(calculation);
  document.querySelector('.js-text')
    .innerHTML = calculation;

  localStorage.setItem('calculation', calculation);
}