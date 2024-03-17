// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str='hello world';
// console.log(str);
// console.log(str.length);
//
// let str1='lorem ipsum';
// console.log(str1);
// console.log(str1.length);
//
// let str2='javascript is cool';
// console.log(str2);
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str='hello world';
// console.log(str.toUpperCase());
//
// let str1='lorem ipsum';
// console.log(str1.toUpperCase());
//
// let str2='javascript is cool';
// console.log(str2.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str='HELLO WORLD';
// console.log(str.toLowerCase());
// let str1='LOREM IPSUM';
// console.log(str1.toLowerCase());
// let str2='JAVASCRIPT IS COOL';
// console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// console.log(str.indexOf('d'));//1
// console.log(str.indexOf('g'));//12
// console.log(str.substring(1,13));
// //or
// console.log(str);
// console.log(str.substring(str.indexOf('d'),str.lastIndexOf(' ')))
//or
// console.log(str.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(value =>
//     value.toString()
// ));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
// let sortNums =  (nums, direction) => {
//     switch (direction) {
//         case 'ascending':
//             nums = nums.sort((a, b) => a - b);
//             break;
//         case 'descending':
//             nums = nums.sort((a, b) => b - a);
//             break;
//         default:
//             console.error()
//     }
//     return nums;
// }
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]

//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let monthDuration=coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
// console.log(monthDuration);
// let filter=coursesAndDurationArray.filter(courses=>courses.monthDuration>=5);
// console.log(filter);
// let map=coursesAndDurationArray.map((item,index)=>({id:index+1,title:item.title,monthDuration:item.monthDuration}));
// console.log(map)

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
]
// - знайти піковий туз
// let find=cards.find(card=>card. cardSuit==='spade'&&card.value==='ace');
// console.log(find)
// - всі шістки
// let six=cards.filter(card=>card.value==='6');
// console.log(six)
// - всі червоні карти
// let red=cards.filter(card=>card.color==='red');
// console.log(red)
// - всі буби
// let diamond=cards.filter(card=>card.cardSuit==='diamond');
// console.log(diamond)
// - всі трефи від 9 та більше
// let filter=cards.filter(card=>card.cardSuit==='clubs'&&['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
// console.log(filter)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


//
// const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
// const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
//
//
// let cardsArr = []
// for (let cardSuit of cardSuits) {
//     let redSuits = ['diamond', 'heart'];
//     let blackSuits = ['spade', 'clubs'];
//
//     let color = '';
//     if (redSuits.includes(cardSuit)) color = 'red';
//     if (blackSuits.includes(cardSuit)) color = 'black';
//
//     for (const value of values) {
//         cardsArr.push({cardSuit, value, color});
//     }
// }
// console.log(cardsArr);


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce = cards.reduce((acc, card)=>{
//
//     if(card.cardSuit === 'spade'){
//         acc.spades.push(card)
//     }
//     else if(card.cardSuit === 'clubs'){
//         acc.clubs.push(card)
//     }
//     else if(card.cardSuit === 'heart'){
//         acc.hearts.push(card)
//     }
//     else if(card.cardSuit === 'diamond'){
//         acc.diamonds.push(card)
//     }
//     return acc;
// }, {spades: [], clubs: [], hearts: [], diamonds: []});
// console.log(reduce)

// let reduce =cards.reduce((acc, card)=>{
//     acc[card.cardSuit].push(card);
//     return acc;
// },{spade:[],clubs:[],heart:[], diamond:[] })
// console.log(reduce)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

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

// //
// console.log(coursesArray.filter((i) => i.modules.includes('docker')));