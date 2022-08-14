/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
стиль при клике на button.change-color и выводит значение цвета в 
span.color.
Для генерации случайного цвета используй функцию getRandomHexColor.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyElem: document.querySelector('body'),
  btnElem: document.querySelector('.change-color'),
  descriptionElem: document.querySelector('.color'),
};

refs.btnElem.addEventListener('click', event => {

  const color = getRandomHexColor();
  console.log(color);

  refs.descriptionElem.textContent = color;
  refs.bodyElem.style.background = color;
});