// function factoryFunctionUser(id, name) {
//     return {
//         id,
//         name,
//         greeting() {
//             console.log(this.name);
//         }
//     }
// }
//
// let user = factoryFunctionUser(1, 'vasya');
// console.log(user);
//
// function foo(userFromFactoryFunction) {
//     // .....
// }
// //
// foo(factoryFunctionUser(11, 'asdasd'));


// function User(id, name) {
//     this.id = id;
//     this.name = name;
//     this.greeting = function (msg) {
//         console.log(msg + ' ' + this.name);
//     };
// }
//
// let u1 = new User(111, 'vasya');
// // console.log(u1);
// // let users = [
// //     new User(),
// //     new User(),
// //     new User(),
// //     new User(),
// //     new User(),
// //     new User()
// // ];
// function Friend(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }
//
// let friend = new Friend('kokos', 'abrikosov');
//
//
// u1.greeting.call(friend, 'hello','','asdas','qweqwe');
// u1.greeting.apply(friend, ['hi','qweqew','qweqweqwe']);
// u1.greeting('asdas');
// console.log(u1);
//
// let greetingFnCopy = u1.greeting.bind(friend);
// greetingFnCopy('pryvit');


// console.log({});
// let user = {
//     id:100500,
//     name: 'asdqwe',
// }
//
// let user2 = Object.create(user);
// console.log(user2);
// console.log(user2.id);
// console.log(user2.name);
// user2.id = 111;
// console.log(user2.id);


// class User {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//
//     // method
//     greeting(msg) {
//         console.log(msg + ' ' + this.name);
//     }
//
// }
//
// let user = new User(111, 'asdjgsjhdg');
// console.log(user);
// user.greeting('hi');
//
//
// class Dev extends User {
//     constructor(id, name, skills) {
//         super(id, name);
//         this.skills = skills;
//     }
// }
//
// let dev = new Dev(123, 'abriokos', ['js']);
// console.log(dev);


function User(id,name) {
    this.id = id;
    this.name = name;

}

function Dev(id, name, skills) {
    User.apply(this, arguments);
    this.skills = skills;
}

console.log(new Dev(123123, 'asdasd', ['js']));

function Senior(id, name, skills, exp) {
    Dev.apply(this, arguments);
    this.exp = exp;
}


let date = new Date();
console.log(date);
console.log(date.getMonth());


class CustomDate extends Date {
    getMonth() {
        return super.getMonth() + 1;
    }
}
//
console.log(new CustomDate());
console.log(new CustomDate().getMonth());