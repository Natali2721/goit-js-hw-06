/*

В HTML есть пустой список ul#ingredients.

В JavaScript есть массив строк.

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все < li > за одну операцию в список ul#ingredients.

*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// oldschool
console.warn('first var: "for" is commented');
/*
const listEl = document.querySelector('#ingredients');

const items = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredients[i];

  items.push(itemEl);
}

//console.log(items);

listEl.append(...items);
*/

//new

console.warn('second var: "map" is commented');

/*
const listEl = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;

  return itemEl;
});

//console.log(items);

listEl.append(...items);
*/

// function
console.warn('third var: "function+map" is used')

const listElem = document.querySelector('#ingredients');

const makeIngridientsList = (ingredients) => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const ingredientsList = makeIngridientsList(ingredients);

listElem.append(...ingredientsList);

