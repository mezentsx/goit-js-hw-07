const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputWrite);
function onInputWrite(e) {
    if(e.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};
