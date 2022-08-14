/* 
Напиши скрипт который, при наборе текста в инпуте input#name-input 
(событие input), подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка "Anonymous".
*/

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputRefChange);

function onInputRefChange(event) {

    nameRef.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;

}

//var2

function onInputRefChangeW(event) {
    nameRef.textContent = event.currentTarget.value;

    if (nameRef.textContent.length === 0) {
        nameRef.textContent = 'Anonymous';
    }
}