/*
Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в 
div#boxes.

Размеры самого первого <div> - 30px на 30px.

Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
тем самым удаляя все созданные элементы.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBoxesElem: document.querySelector('#boxes'),
  inputElem: document.querySelector('input'),
  btnCreateElem: document.querySelector('button[data-create]'),
  btnDestroyElem: document.querySelector('button[data-destroy]'),
};

//console.log(refs.inputElem);
//console.log(refs.btnCreateElem);
//console.log(refs.btnDestroyElem);



function createBoxes(amount) {
  const divs = [];
  amount = refs.inputElem.value;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    console.log(color);
    const boxEl = document.createElement('div');
    console.log(boxEl);
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = color;
    
    divs.push(boxEl);
  }

  refs.divBoxesElem.append(... divs);
}

function destroyBoxes() {
  refs.divBoxesElem.innerHTML = '';
}

refs.btnCreateElem.addEventListener('click', createBoxes);
refs.btnDestroyElem.addEventListener('click', destroyBoxes);

