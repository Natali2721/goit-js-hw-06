/* Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать 
и уменьшать его значение на единицу.

Создай переменную counterValue в которой будет храниться текущее значение счетчика 
и инициализируй её значением 0.

Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
счтетчика.

Обновляй интерфейс новым значением переменной counterValue.
*/
//var Repeta
/*
const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};

const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

//console.log(counterValueRef);
//console.log(decrementBtnRef);
//console.log(incrementBtnRef);

decrementBtnRef.addEventListener('click', function () {
    
    counter.decrement();
    counterValueRef.textContent = counter.counterValue;
});

incrementBtnRef.addEventListener('click', function () {

    counter.increment();
    counterValueRef.textContent = counter.counterValue;
});
*/
/*
// my var1
const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () => { counterValue += 1 };
const decrement = () => { counterValue -= 1 };

decrementBtnRef.addEventListener('click', function () {
    
    decrement();
    counterValueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', function () {

    increment();
    counterValueRef.textContent = counterValue;
});
*/
// my var2


const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);