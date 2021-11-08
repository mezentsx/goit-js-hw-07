const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('change', onInputChange);

function onInputChange(e) {
    span.style = `font-size: ${e.currentTarget.value}px`;
}