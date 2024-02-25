// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr=['hello','owu','com', 'ua', 1, books=[book1={ name:'mowgli',page:150},book2={ name:'white fang',page:180}], 2.7, 16, true, false];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[5][0]);
// console.log(arr[5][1]);
// console.log(arr[5][0].name);
// console.log(arr[5][0].page);
// console.log(arr[5][1].name);
// console.log(arr[5][1].page);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let bookOne = {title: 'Robinson Crusoe', pageCount: 300, genre: 'novel'};
// console.log(bookOne);
// let bookTwo = {title: 'Golgotha', pageCount: 550, genre: 'story'};
// console.log(bookTwo);
// let bookThree = {title: 'Greek mythology', pageCount: 450, genre: 'myph'};
// console.log(bookThree);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let bookOne = {title: 'Robinson Crusoe', pageCount: 300, genre: 'novel', autors:[{name:'Daniel',age:45},{name:'Yuriy',age:55},{name:'Oles',age:34}] };
// console.log(bookOne);
// let bookTwo = {title: 'Golgotha', pageCount: 550, genre: 'story',autors:[{name:'Daniel',age:45},{name:'Yuriy',age:55},{name:'Oles',age:34}]};
// console.log(bookTwo);
// let bookThree = {title: 'Sobor', pageCount: 500, genre: 'novel',autors:[{name:'Daniel',age:45},{name:'Yuriy',age:55},{name:'Oles',age:34}]};
// console.log(bookThree);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

// let users=[
//     {name:'vasya',username:'kokos',password:'34Qy'},
//     {name:'vova',username:'ananas',password:'4%hgD'},
//     {name:'anna',username:'banan',password:'ASD23'},
//     {name:'olena',username:'bot',password:'2FnH'},
//     {name:'oksana',username:'botter',password:'rt&64'},
//     {name:'gena',username:'juk',password:'12345'},
//     {name:'oleg',username:'buk',password:'56GP!'},
//     {name:'petro',username:'duma',password:'#rt%6'},
//     {name:'olya',username:'flower',password:'!45@T'},
//     {name:'kolya',username:'gepard',password:'UI8*Y'},
// ]
// console.log(users);
// console.log(users.length);
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x=-3;
// if (x !=0){
//     document.write('<h2>вірно</h2>');
// }else {
//     document.write('<h2>невірно</h2>');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time=54;
// if (time>0 && time<=15) {
//     document.write('<h2>перша чверть</h2>');
// }else if (time>15 && time<=30){
//     document.write('<h2>друга чверть</h2>');
// }else if (time>30 && time<=45) {
//     document.write('<h2>третя чверть</h2>');
// } else if (time>55 && time<=59){
//     document.write('<h2>четверта частина</h2>');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day=prompt('');
// if (day>0 && day<=10) {
//     document.write('<h2>перша декада</h2>');
// }else if (day>10 && day<=20){
//     document.write('<h2>друга декада</h2>');
// }else if (day>20 && day<=30) {
//     document.write('<h2>третя декада</h2>');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let weekday = {name: 'first', day: 7};
// switch (weekday.day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let x= Math.max(5,5);
// console.log(x);
// let y=Math.max(5,3);
// console.log(y);

// let x=prompt('');
// let y=prompt('');
// if (x>=y){
//     console.log(x);
// }else if(x<=y){
//     console.log(y)
// }
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x='';
// if (x||'default'){
//     console.log(false);
// }else {
//     console.log(true)
// }
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
//     вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>=5){
    console.log('super')
}else{
    console.log('-')
}
if (coursesAndDurationArray[1].monthDuration>=5){
    console.log('super')
}else{
    console.log('-')
}
if (coursesAndDurationArray[2].monthDuration>=5){
    console.log('super')
}else{
    console.log('-')
}
if (coursesAndDurationArray[3].monthDuration>=5){
    console.log('super')
}else{
    console.log('-')
}
if (coursesAndDurationArray[4].monthDuration>=5){
    console.log('super')
}else{
    console.log('-')
}
if (coursesAndDurationArray[5].monthDuration>=5){
    console.log('super')
}else{
    console.log('-')
}


