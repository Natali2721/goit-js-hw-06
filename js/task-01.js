/*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length); 

// for

for (let i = 0; i < itemsEl.length; i += 1){
    console.log('Category:', itemsEl[i].querySelector('h2').textContent);
    console.log('Elements:', itemsEl[i].querySelectorAll('li').length);
}

// forEach
console.warn('second var : forEach');

itemsEl.forEach((item) => {
    const title = item.querySelector('h2');
    const allElements = item.querySelectorAll('li');
    console.log('Category:', title.textContent);
    console.log('Elements:', allElements.length);
}
)

//
console.warn('third var : elem.children + for');

const itemListElem = document.querySelector('#categories');

for (let i = 0; i < itemListElem.children.length; i += 1){
    console.log('Category:', itemListElem.children[i].querySelector('h2').textContent);
    console.log('Elements:', itemListElem.children[i].querySelectorAll('li').length);
}



