let str = 'hello okten';
console.log(typeof str);
for (const strElement of str) {
    console.log(strElement)
}
console.log(str[0]);
console.log(str.startsWith('he'));
console.log(str.endsWith('en'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('o',5));
console.log(str.lastIndexOf('o'));
console.log(str.includes('h'));
console.log(str.replace('h','#'));
console.log(str.replaceAll('o','#'));
console.log(str.charAt(7));
console.log(str.split(' '));


let arr=[];
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr.unshift('%%%'));
console.log(arr.shift('%%%'));
console.log(arr.push('element'));
console.log(arr.push('symbol'));
console.log(arr.pop('symbol'));
console.log(arr);
console.log(arr.join(';'));
let array=[1,2,3,4];
let arr1=['qwe','asd'];
let concat=array.concat(arr1);
console.log(concat);
console.log(concat.reverse());
console.log(concat.slice(3, 5));
console.log(concat.splice(1));
console.log(concat.splice(1,3,'wrt','kkk'));
console.log(concat.includes(3));


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
    {name: 'olya', age: 31, status: false}
]
users.forEach(function (value, index, array){
    console.log(value,index);
})
users.forEach(value => console.log(value));
console.log(users.filter(value => !value.status));
console.log(users.map(function (value, index) {
    return {
        name: value.name,
        age: value.age,
        status: value.status,
        id: index + 1
    }
}));
console.log(users.map((value, index) => {
    return {...value, id: index + 1}
}));

users.sort((a,b)=>{
    console.log(a.name>b.name)
})

console.log(users.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
    return 0

}));



