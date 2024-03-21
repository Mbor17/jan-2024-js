//метод стрінга
// let str='hello okten';
// console.log(str);
// console.log(str[0]);
// for (let strElement of str) {
//     console.log(strElement)
// }
// console.log(typeof str)
let s = new String('hello');
console.log(typeof s);
// let st=str.concat('!!!');
// console.log(st);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('he'));
// console.log(str.endsWith('en'));
// console.log(str.substring(1, 8));
// console.log(str.indexOf('o'));
// console.log(str.lastIndexOf('o'));
// console.log(str.indexOf('e', 2));
// console.log(str.includes('h'));.
// console.log(str.charAt(8));
// console.log(str.replace('l', '$'));
// console.log(str.replaceAll('l', '$'));
// console.log(str.replaceAll('hel', '$'));
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
// console.log(Array.isArray(arr))
// // arr[arr.length]='ffffff';
// // console.log(arr);
// arr.push('new symbol');
// console.log(arr);
// console.log(arr.push('new symbol 1'));
// console.log(arr.push('new symbol 2'));
// console.log(arr.push('new symbol 3'));
// console.log(arr.push('new symbol 4'));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.unshift("###");
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
//
// console.log(arr.join(';'));
//
// nums = [11, 22, 33];
// let concat = nums.concat(arr);
// console.log(concat);
// console.log(nums);
// console.log(arr);
//
// console.log(nums.reverse());
//
// console.log(concat);
// let slice = concat.slice(2, 5);
// console.log(slice);
// console.log(concat);
// let splice = concat.splice(0);
// console.log(splice===concat);
// let splice = concat.splice(1);
// console.log(splice);
// let splice = concat.splice(1,2);
// console.log(splice);
// console.log(concat);
// let splice = concat.splice(1, 2, 'asd', 'qwe', 12);
// console.log(splice);
// console.log(concat);
// console.log(concat.indexOf(33));
// // console.log(concat.splice(concat.indexOf(33),1));
// console.log(concat.splice(2, 1));
// console.log(concat);
// console.log(concat.includes(22));

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

// users.forEach(function (value, index, array) {
//     console.log(value,index)
//     // console.log(array)
// })

// users.forEach(function (value) {
//     console.log(value)
// })
// users.forEach(value => console.log(value))

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

// let map=   users.map((user,index)=>{//не можна таке!!!
//     user.id=index+1;
//     return user
// });
// console.log(map);
// console.log(users);

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let map=coursesAndDurationArray.map((item,index)=>({id:index+1,title:item.title,monthDuration:item.monthDuration}));
// console.log(map)

// console.log(users.find(value => value.name === 'max'));
// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));

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





