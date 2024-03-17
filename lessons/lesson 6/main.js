// let s1='asdf';//prum
// let s2=newString('asddffff');//ref
// s1.toUpperCase();//ref
// let s1='asdqwe';
// console.log(s1[3]);
// for (const s1Element of s1) {
//     console.log(s1Element)
// }

// let str1 ='okten hello';
// console.log(str1.toUpperCase());
// let toUpperCase=str1.toUpperCase();
// console.log(toUpperCase,str1);
// console.log(toUpperCase.toLowerCase());
// console.log(str1.startsWith('okt'));
// console.log(str1.startsWith('ten',2));
// console.log(str1.endsWith('llo'));
// console.log(str1.substring(1,str1.length-1));
// console.log(str1.indexOf('k'));//1-е входження ( зліва направо)
// //
// console.log(str1.indexOf('o',1));//1-е входження ( зліва направо)
// console.log(str1.charAt(0));

// let sss='=+38067456734=';
// console.log(sss.substring(sss.indexOf('=')+1,sss.lastIndexOf('=')));

// let sss='===+38067456734===';
// console.log(sss.replaceAll('=', '!'));
// console.log(sss.replaceAll('=', ' '));
// console.log(sss.replaceAll('=', ''));

// let ObjStr='vasya 31 male';
// let split = ObjStr.split(' ');
// console.log(split);
// // let Obj={
// //     name:split[0],
// //     age:split[1],
// //     gender:split[2]
// // }
// console.log(Obj);

//
// let ObjStr='vasya 31 male';
// function adapter(ObjStr){
//
//     let split = ObjStr.split(' ');
//     return {
//         name:split[0],
//         age:split[1],
//         gender:split[2]
//     }
//
//     //.........................................................
//     // return{
//     //     name:ObjStr[0],
//     //     age:ObjStr[1],
//     //     gender:ObjStr[2]
//     // }
// }
// //
// console.log(adapter(ObjStr));
// let ObjStr2='kokos 36 male'
// console.log(adapter(ObjStr2));

// let arr=[];
// console.log(Array.isArray(arr),typeof (arr));
// // arr[arr.length]='asd';
// // arr[arr.length]='qwe';
// arr.push('asd');
// arr.push('qwe');
// arr.unshift('xxx')
// console.log(arr);
// let pop=arr.pop();
// console.log(pop);
// console.log(arr);
// let shift=arr.shift();
// console.log(shift)
// console.log(arr);

// let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// // // numbers.splice(2);
// // console.log(numbers);
// // // numbers.splice(2,1);//delete
// // // numbers.splice(2,5);
// // numbers.splice(2,1,'asd');//replase
// // console.log(numbers);
// //
// let nums=[111,222,333];
// let newArr = numbers.concat(nums);
// console.log(newArr);
// console.log('asd'.includes('s'));
// console.log(newArr.join('.'));
// console.log(newArr.reverse())

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
// function asd(unit){
//     console.log(unit);
// }
// users.forEach(asd)
//.......................................

// users.forEach(function asd(unit){
//     console.log(unit);
// })
//...........................................
// users.forEach((unit)=>{
//     console.log(unit);
// })

//...................................
//////////////////////////////////////////

// users.forEach(item=>{
//     console.log(item);
// })
/////////////////////////////////////////////
// console.log(users.filter(user => user.age > 30));

// console.log(users.filter(user => !user.status&&user.age>30));

// let map= users.map((user)=>({imya:user.name, vik:user.age}));
// console.log(map)


 let map=   users.map((user,index)=>({imya:user.name, vik:user.age,status:user.status,id:index}));
console.log(map)

// let map=   users.map((user,index)=>{//не можна таке!!!
//     user.id=index+1;
//     return user
// });
// console.log(map);
// console.log(users);


//     let sort=  users.sort((firstObj,neighbor)=>{
//     return firstObj.age-neighbor.age
// })
// console.log(sort);

// console.log(users.sort((a, b) => a.name.localeCompare(b.name)));
// console.log(users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())));

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'Olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// // let asd=[
// //     [...true],
// //     [...false]
// // ]
//  let reduce=  users.reduce((accomulator, user) =>{
//     if(user.status){
//         accomulator[0].push(user);
//     }else {
//         accomulator[1].push(user);
//     }
//     return accomulator;
// },[[],[]] )
// console.log(reduce);
