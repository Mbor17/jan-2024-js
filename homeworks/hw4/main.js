// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    return a * b;
}

console.log(area(3, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * r ** 2;
}

console.log(circle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

console.log(cylinder(3, 7));
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr=[1,2,3,4];
function foo(arr) {
    for (let number of arr) {
        console.log(number);
    }
}

foo([1, 2, 3, 4]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function book(text) {
    document.write(`<p>${text}</p> `);
}

book('My favourite book');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function uli(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}

uli('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function uli1(text1, num) {
    for (let i = 0; i < num; i++) {
        document.write(`<ul>
    <li>${text1}</li>
</ul>`)
    }
}

uli1('hi', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function elements(arr1) {
    for (let item of arr1) {
        document.write(`<div>${item},</div>`)
    }
}
elements([3,5,'hello',true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function people(obj) {
    for (let objElement of obj) {
        document.write(`<div>${objElement.id},${objElement.name},${objElement.age}</div>`)
    }

}
 people([
    {id:'1',name:'name1',age:10},
    {id:'2',name:'name2',age:14},
    {id:'3',name:'name3',age:16},
    {id:'4',name:'name4',age:18}
])


// - створити функцію яка повертає найменьше число з масиву
let asd=[4,2,6,8,10];
function nb1(numbers) {
    let min=numbers[0];
    for (let number of numbers) {
        if (number<min){
            min=number
        }
    }
return min
}
console.log(nb1(asd));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let qwe=[3,4,7];
function sum(arr) {
    let res=0;
    for (let numeral of arr) {
        res=numeral+res;
    }
return res
}

console.log(sum(qwe));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let v1=arr[index1];
    let v2=arr[index2];
    arr[index1]=v2;
    arr[index2]=v1;
  return arr;
}

console.log(swap([11,22,33,44],0,1))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange=(10000,
    [
        {currency:'USD',value:40},
        {currency:'EUR',value:42}
    ],
    'USD');
let x=exch(10000,40);
// let y=exch(10000,42);
function exch(sumUAH,currencyValues){
      return sumUAH/currencyValues;
}

console.log(x);
// console.log(y);