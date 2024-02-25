// let dog={
//   id: 1,
//   name: 'kokos',
//   breed: 'spaniel',
//   age: 3
// }
// console.log(dog);
// console.log(dog.name);

// let dogMas=[1,2,3];
// console.log(dogMas.length);

let dogMas1=[
    {id: 1, name: 'kokos', breed: 'spaniel', age: 3},
    {id: 1, name: 'ananas', breed: 'staff', age: 4},
    {id: 1, name: 'kit', breed: 'pes', age: 2},
];
 // console.log(dogMas1,length);
 // console.log(dogMas1);
 // console.log(dogMas[0]);
 // console.log(dogMas[0].id);
 // console.log(dogMas[0].name);
 // console.log(dogMas[0].age);
 // console.log(dogMas[0].breed);
//////////////////////////////////////////////////////
// let dog1 = dogMas[0];
// console.log(dog1);
// console.log(dog1.id);
// console.log(dog1.name);
// console.log(dog1.age);
// console.log(dog1.breed);
//
// let dogMas2=[
//     {id: 11, name: 'banana', breed: 'taxa', age: 5},
//     {id: 12, name: 'avokado', breed: 'pug', age: 6},
//     {id: 13, name: 'popil', breed: 'pes', age: 1},
// ];
// let cats1=[
//     {id: 111, name: 'carapka', breed: 'gemini', age: 5},
//     {id: 122, name: 'baton', breed: 'pers', age: 6},
// ];
//
// let pets=[
//    dogMas1,
//    dogMas2,
//     cats1
// ]
// // console.log(pets.length);
// // console.log(pets);
// // console.log(pets[0][0]);
// // console.log(pets[0][1]);
// // console.log(pets[0][2]);
// // console.log(pets[0][2].breed);
//
// console.log(pets.length);
// console.log(pets[2]);
// console.log(pets[2][0]);
// console.log(pets[2][0].name);
// console.log(pets[1].length);

// let devs=[
//     {name:'vasia',skills:['html','js','java']},
//     {name:'petya',skills:['html','js','noda']},
//     {name:'anna',skills:['html','js']}
// ]
// console.log(devs);
// console.log(devs[0]);//vasiya
// console.log(devs[0].skills);
// console.log(devs[0].skills[0]);
// console.log(devs[0].skills[1]);
// console.log(devs[0].skills[123]);

// let obj={};
// console.log(obj);
//
// obj.name='vasya';
// obj['name'];
//
// console.log(obj);
// obj.name='asdfg';
// console.log(obj);
//
// delete obj.name;
// console.log(obj);

//
// let p=0;
// let p2=p;
// console.log(p2);//0
//
// p2=p2+100;
// console.log(p2);//p2+100
//
// let obj1={id:1};
// let obj2=obj1;
// console.log(obj2);
// obj2.name='asdffg';
// console.log(obj2);
// console.log(obj1);
//
// console.log(typeof {});
// console.log(typeof []);

//&&||(or)
// console.log(true && true);//true
// console.log(true && false);//false
// console.log(false && false);//false
// console.log(true || false);//true
// console.log(true || true);//true
//
// console.log(true && true || false);//true
// console.log(true && false || false);//false

// let age=+prompt();
// let age=91;
// if (age>0 && age<=18) {
//     document.write('<h2>hello yang user</h2>');
// }else if (age>18 && age<=35){
//     document.write('<h2>hello adult user</h2>');
// }else if (age>35 && age<=60) {
//     document.write('<h2>hello old user</h2>');
// } else {
//     document.write('<h2>hello ???</h2>');
// }

// let user={ name:'vasya',age:18};
// if (user.age>0 && user.age<=18) {
//     document.write('<h2>hello yang user</h2>');
//     if (){
//
//     }else {}
// }else if (user.age>18 && user.age<=35){
//     document.write('<h2>hello adult user</h2>');
// }else if (user.age>35 && user.age<=60) {
//     document.write('<h2>hello old user</h2>');
// } else {
//     document.write('<h2>hello ???</h2>');
// }


let user={ name:'vasya',age:18};
switch (user.age){
    case 18:
        console.log('yang man');
        break;
    case 35:
        console.log('adult man');
        break;
    case 65:
        console.log('old man');
        break;
    default:
        console.log('adsfdfkghj')
}


