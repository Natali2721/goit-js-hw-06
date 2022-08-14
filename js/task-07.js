/* 
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
обновляя свойство font-size. В результате при перетаскивании ползунка будет 
меняться размер текста.
*/

const refs = {
    inputElem: document.querySelector('#font-size-control'),
    textElem: document.querySelector('#text'),
}

refs.inputElem.addEventListener('input', event => {
  //console.log(refs.inputElem.value);

    refs.textElem.style.fontSize = `${refs.inputElem.value}px`;
});
