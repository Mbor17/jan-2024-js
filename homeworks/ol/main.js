//метод стрінга
// let str='hello okten';
// console.log(str);//стрінга- це масив символів
// console.log(str[0]);
// for (let strElement of str) {
//     console.log(strElement)
// }
// console.log(typeof str)
// let s = new String('hello');//конструктор- ячейка- тип буде обджект
// console.log(typeof s);
// let st=str.concat('!!!');//функція, що повертає оновлене значення
// console.log(st);
// console.log(str.toUpperCase());//верх регістр
// console.log(str.toLowerCase());//нижній регістр
// console.log(str.startsWith('he'));//початок стрінги- true or false
// console.log(str.endsWith('en'));//кінець
// console.log(str.substring(1, 8));//має 2 значення і обрізає ( по 2 значенню не включно)
// console.log(str.indexOf('o'));//тільки перше входження покаже індекс
// console.log(str.lastIndexOf('o'));
// console.log(str.indexOf('e', 2));//після якого індексу ми хочемо знайти цю букву- покаже індекс букви
// console.log(str.includes('h'));//true......
// console.log(str.charAt(8));//покаже букву під цим номером
// console.log(str.replace('l', '$'));
// console.log(str.replaceAll('l', '$'));
// console.log(str.replaceAll('hel', '$'));//можна секвенцію символів на символ і навпаки
// console.log(str.replaceAll('h', 'hhhhh'));
// console.log(str.split(' '));
//
//
// let string = ' dirty string   ';
// console.log(string);
// console.log(string.split(' ').filter(i=>i.length).join(' '))

//..............................................................................................................................//
//методи /функції масивів
// let arr = [];
// console.log(typeof arr);
// console.log(typeof {});
// console.log(Array.isArray(arr))//true
// // arr[arr.length]='ffffff';
// // console.log(arr);
// arr.push('new symbol');
// console.log(arr)//додаємо в кінець масиву-змінюємо сам масив -його вміст, а не повертаємо оновлений- змінюється довжина масиву
// console.log(arr.push('new symbol 1'));
// console.log(arr.push('new symbol 2'));
// console.log(arr.push('new symbol 3'));
// console.log(arr.push('new symbol 4'));
// console.log(arr);
// console.log(arr.pop());//цей видалений елемент можна кудись передати - його повернуло
// console.log(arr);
// arr.unshift("###");//додати на початок
// console.log(arr);
// console.log(arr.shift());//видалити з початку
// console.log(arr);
//
// console.log(arr.join(';'));//з'єднання в рамках одного масиву
//
// nums = [11, 22, 33];
// let concat = nums.concat(arr);//об'єднуємо 2 масиви- до якого приєднуємо вписуємо 1-шим - після конкат вписуємо котрий приєднуємо
// console.log(concat);
// console.log(nums);//первинні масиви залишились незмінними
// console.log(arr);
//
// console.log(nums.reverse());//несе велике навантаження, краще робити цикл в зворотньому напрямку
//
// console.log(concat);//беремо масив конкат, що має 7 елементів
// let slice = concat.slice(2, 5);
// console.log(slice);//обрізає 1-ший включно по 2-гий не включно
// console.log(concat);//первинний масив є незмінним
// let splice = concat.splice(0);//після слова сплайс може бути кілька значень в дужках( 1, чи 2 , чи кілька)
// console.log(splice===concat);//копія ...
// let splice = concat.splice(1);//таки видалимо перший елемент
// console.log(splice);
// let splice = concat.splice(1,2);//з першого включно два елементи
// console.log(splice);
// console.log(concat);
// let splice = concat.splice(1, 2, 'asd', 'qwe', 12);//з першого включно два елементи( кількість видалених елементів прописуємо 2-гим символом) і вставили значення, прописані після 2-го
// console.log(splice);//даний метод слугує для видалення
// console.log(concat);
// console.log(concat.indexOf(33));//поверне під яким індексом знаходиться той чи ін елемент//2 -індекс в масиві
// // console.log(concat.splice(concat.indexOf(33),1));//цей індекс, наприклад, можна вирізати
// console.log(concat.splice(2, 1));//це одначає- починаючи з 2-го індекса -33 вирізаємо 1 елемент ( це 33)
// console.log(concat);
// console.log(concat.includes(22));//true or false  належить

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter((i) => i.modules.includes('sass')));
//...................................................................................................................................//
//Функції масивів з колбеками
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'Olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (value, index, array) {//для кожного -це функція- потребує аргументів , ця функція, яку ми підставляємо як аргумент нічого не повертає
//     console.log(value,index)
//     // console.log(array)
// })

// users.forEach(function (value) {
//     console.log(value)
// })
// users.forEach(value => console.log(value))//натискаємо ctrl пробіл - і це стрілочна ф-ція )- гарний запис

// let filter = users.filter(function (value){
//     return value.age>30
// });
// console.log(filter)

// console.log(users.filter(value => value.age > 30));
// console.log(users);

// let map = users.map(function (value, index){
//     let newUser={
//         name:value.name,
//         age:value.age,
//         status:value.status,
//         id:index+1
//     }
//     return newUser
// });
// console.log(map);

// let map = users.map(function (value, index){
//     return{...value, id:index+1}
//
// });
// console.log(map);

// let map = users.map((value, index)=> {
//     return {...value, id: index + 1}
// });
//
// console.log(map);

// console.log(users.find(value => value.name === 'max'));//повертає лише 1-ше входження
// console.log(users.every(value => value.status));//перевіряє кожен елемент
// console.log(users.some(value => value.status));//перевіряє, якщо хоч в одного елемента масиву відповідний статус повертає true

// let sort = users.sort((a, b) => {
//     return a.age-b.age}
//
// );
// console.log(sort)

// console.log(users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1
//     }
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name === b.name) {
//         return 0
//     }
// }));

// users.reduce((previousValue, currentValue) =>{
//     console.log(previousValue, currentValue)
// },[])

// let reduce = users.reduce((acc, user) =>{
//     if(user.status){
//         acc.st.push(user)
//     }else{
//         acc.sf.push(user)
//     }
//    return acc
// },{st: [], sf: []});
// console.log(reduce);//зменшувач
//
// console.log(users);





