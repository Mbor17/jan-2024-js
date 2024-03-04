// let obj={
//     imya:'kokos',
//     greeting:function (msg) {
//         console.log(msg+ ' my name is ' +obj.imya);
//     }
// }
//
// obj.greeting('hi');
//
// let obj2={
//     imya:'abrikos',
//     greeting:function (msg) {
//         console.log(msg+ ' my name is ' +this.imya);
//     }
// }
//
// obj2.greeting('hi');

// function asd() {
//     console.log(this);//window
//
// }
// asd();

// function declaration-це не змінна, а функція - для неї дії хостінг- її можна винести наверх
asd()
function asd() {
    
}

//function expresion-це змінна- хостінг не працює
// let foobar=function () {
//     console.log('asasa')
// };
// foobar();

// arrow function
// let foobar = ()=> {
//     console.log('asasa');
//     console.log(this);
// };
// foobar();

//
// let obj3={
//     imya:'max',
//     greeting: ()=>{
//         console.log(' my name is '+ obj3.imya);//this=window
//
//     },
//     sayHi:function () {
//         //this===obj3
//         let arrFn=()=>{
//             console.log(' hi, my name is '+this.imya);
//         }
//         arrFn()
//     }
// }
// // obj3.greeting();
// obj3.sayHi();

//  const foo=()=> console.log('asdfg');
// foo()

// const fo=(a,b)=>{
//     return a+b;
// }
// fo()

// const fo=( a,b)=>a+b;
// console.log(fo(10,20));


// const fo=( a,b)=>{
//     console.log('hello');
//    return  a+b;
// }
// console.log(fo(10,20));

// const bar= a =>a.toUpperCase();
// console.log(bar('asd'));

const bar= a =>a+10;
console.log(bar(100));

