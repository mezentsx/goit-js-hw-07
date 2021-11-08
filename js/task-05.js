const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputWrite);
function onInputWrite(e) {
    if (e.currentTarget.value) {
        output.textContent = e.currentTarget.value;
    } else {
        output.textContent = 'незнакомец';
    }
}
