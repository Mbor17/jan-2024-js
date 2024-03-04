// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let foo=(a,b)=> (a+b)*2;
// console.log(foo(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle=r=>(Math.PI*r*r);
// console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinder=(r,h)=> (2*Math.PI*r*(h+r));
// console.log(cylinder(2,4));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let ms=(arr)=>{
//     for (let array of arr) {
//         console.log(array);
//     }
// }
// ms([1,2,3,4]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let foo=(text)=>
//     document.write(`<p>${text}</p>`);
// foo('hi');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let msg=(text)=> {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// msg('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let msg=(text)=> {
//     for (let i = 0; i < 3; i++) {
//        let textElement = text[i];
//         document.write(`<ul>
//         <li>${text}</li>
//     </ul>`)
//     }
// }
// msg('hello');
//...............................................
// let msg=(text,quantity)=> {
//         for (let i = 0; i<quantity; i++) {
//             document.write(`<ul><li>${text}</li></ul>`);
//         }
// }
// msg('hello',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let foo=(arr)=> {
//     document.write(`<ul>`)
//        for (const item of arr) {
//      document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo([11,22,'hello',true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let objects=[
//     {id:23, name:'olya', age:32},
//     {id:22, name:'ivan', age:22},
//     {id:35, name:'anna', age:25},
//     {id:37, name:'kolya', age:23}
// ];
// let asd=(objects)=>{
//     for (const element of objects) {
//      document.write(`<div>${element.id} ${element.name} ${element.age}</div>`);
//     }
//
// }
//  asd(objects);


// - створити функцію яка повертає найменьше число з масиву

// let foo=(numbers)=> {
//     let min=numbers[0];
//     for (let number of numbers) {
//         if (min > number){
//             min = number
//         }
//     }
//     return min;
// }
// console.log(foo([33, 45, 32, 56, 12, 27, 234]));

// let min=(arr)=>{
//     let  result=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (result>arr[i]) {
//             result = arr[i];
//         }
//     }
//     return result;
// }
// console.log(min([33, 45, 32, 56, 12, 27, 234]));



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let sum=(arr)=> {
//       let basket=0;
//        for (const num of arr) {
//          basket=basket+num;
//        }
//     return basket;
// }
// console.log(sum([1,2,10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap=(arr,index1,index2)=>{
//     let v1=arr[index1];
//     let v2=arr[index2];
//     arr[index1]=v2;
//     arr[index2]=v1;
//     return arr;
// }
// console.log(swap([11,22,33,44],0,1));
//

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (let item of currencyValues) {
        if (item.currency===exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));