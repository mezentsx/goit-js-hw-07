const counterValue = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

increment.addEventListener('click', onIncrementBtnClick);
decrement.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

function onDecrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}