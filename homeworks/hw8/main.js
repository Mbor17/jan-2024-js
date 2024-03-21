// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname , email, phone) {
//     return{
//         id,
//         name,
//         surname ,
//         email,
//         phone
//     }
// }
//
// console.log(User(2, 'dima', 'kokos', 'asd@ukr.net', +380456783456));

function User(id, name, surname , email, phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone
}
// let user= new User(2, 'dima', 'kokos', 'asd@ukr.net', +380456783456);
// console.log(user)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users=[
    new User(1,'Olya','Rojko','zxc@ukr.net',+380965678943),
    new User(2,'Juliya','Rotko','potr@ukr.net',+380965678456),
    new User(3,'Roman','Juk','juk@ukr.net',+380968978456),
    new User(4,'Andrij','Tyrjuk','tuk@ukr.net',+380968932456),
    new User(5,'Petro','Ivantciv','iva@ukr.net',+380968452456),
    new User(6,'Anna','Wowk','wow@ukr.net',+380968411456),
    new User(7,'Vika','Gorn','gorn@ukr.net',+380962211456),
    new User(8,'Taras','Bink','bink@ukr.net',+380962233456),
    new User(9,'Luda','Shum','shum@ukr.net',+380964433456),
    new User(10,'Ivan','Duma','duma@ukr.net',+380994233456),
]

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter= users.filter(value => !(value.id % 2));
console.log(filter);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((a, b)=>a.id-b.id);
console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order
//     }
// }
// console.log(new Client(2, 'Juliya', 'Rotko', 'potr@ukr.net', +380965678456,
//     ['juce','water']));
//.........or....................................................................................................
class Client extends User{
  constructor(id, name, surname , email, phone, order) {
      super(id, name, surname , email, phone);
      this.order=order
  }
}
console.log(new Client(2, 'Juliya', 'Rotko', 'potr@ukr.net', +380965678456,
    ['juce','water']));
//.........or....................................................................................................
// function Client(id, name, surname , email, phone, order){
//     User.call(this,id, name, surname , email, phone),
//         this.order=order
// }
//
// console.log(new Client(2, 'Juliya', 'Rotko', 'potr@ukr.net', +380965678456,
//     ['juce','water']));
// створити пустий масив, наповнити його 10 об'єктами Client
let clients=[
    new Client(1,'Olya','Rojko','zxc@ukr.net',+380965678943,['juce','water','milk','cola','fanta']),
    new Client(2,'Juliya','Rotko','potr@ukr.net',+380965678456,['juce','water']),
    new Client(3,'Roman','Juk','juk@ukr.net',+380968978456,['juce','water','milk']),
    new Client(4,'Andrij','Tyrjuk','tuk@ukr.net',+380968932456,['water','milk']),
    new Client(5,'Petro','Ivantciv','iva@ukr.net',+380968452456,['juce','pepsi','milk','cola']),
    new Client(6,'Anna','Wowk','wow@ukr.net',+380968411456,['milk','cola']),
    new Client(7,'Vika','Gorn','gorn@ukr.net',+380962211456,['fanta','water','milk','cola']),
    new Client(8,'Taras','Bink','bink@ukr.net',+380962233456,['sprite','water','milk']),
    new Client(9,'Luda','Shum','shum@ukr.net',+380964433456,['juce','water']),
    new Client(10,'Ivan','Duma','duma@ukr.net',+380994233456,['borjomi','water','milk']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = clients.sort((a, b) => a.order.length-b.order.length);
console.log(sort1)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, maker, year, maxspeed, engine) {
//     this.model=model;
//     this.maker=maker;
//     this.year=year;
//     this.maxspeed=maxspeed;
//     this.engine=engine;
//     this.drive =function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info=function () {
//         // console.log(`Model:${this.model},Maker:${this.maker},Year:${this.year},Maxspeed:${this.maxspeed},Engine:${this.engine}`)
//         for (let key in this) {
//             if (typeof this[key]=== "function") {
//                 continue;
//
//             }
//             console.log(key.toUpperCase()+':',this[key])
//         }
//     }
// this.increaseMaxSpeedf=function (newSpeed) {
// this.maxspeed+=newSpeed;
// }
// this.changeYear=function (newValue){
//     this.year=newValue;
// }
// this.addDriver=function (driver){
//     this.driver=driver;
// }
// }
// let car=new Car('A8','Audi',2024,305,630);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeedf(20);
// car.info();
// car.changeYear(2029)
// car.info();
// function Driver(name,year) {
//     this.name=name;
//     this.year=year;
// }
// let driver1=new Driver('Vova',35);
// car.addDriver(driver1);
// car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, maker, year, maxspeed, engine) {
        this.model=model;
        this.maker=maker;
        this.year=year;
        this.maxspeed=maxspeed;
        this.engine=engine;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    info(){
        for (let key in this) {
            console.log(key.toUpperCase()+':',this[key])
        }
    }
    increaseMaxSpeedf(newSpeed){
        this.maxspeed+=newSpeed;
    }
    changeYear(newValue){
        this.year=newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let car=new Car('A8','Audi',2024,305,630);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeedf(20);
car.info();
car.changeYear(2029)
car.info();
function Driver(name,year) {
    this.name=name;
    this.year=year;
}
let driver1=new Driver('Vova',35);
car.addDriver(driver1);
car.info()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name,age,foot) {
//         this.name = name;
//         this.age = age;
//         this.foot=foot
//     }
//
// }
// console.log('Tamara', 17, 45)

//....................................................................................................................
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Person{
    constructor(name,age,foot) {
        super(name, age);
        this.foot = foot;
    }
}


let Cinderellas = [
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46),
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince{
//     constructor(name,age,shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe=shoe
//     }
// }
//............................................................................................
class Prince extends Person {
    constructor(name, age, boot) {
        super(name, age);
        this.boot = boot;
    }
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Cinderella1 (arr) {
        for (const cinderella of arr) {
            if (cinderella.foot === this.boot) {
                return cinderella;
            }
        }
    }

//
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
    Cinderella2 (arr) {
        return arr.find((cinderella) => cinderella.foot === this.boot)
    }
}
let prince = new Prince('Igor', 17, 40);
console.log(prince.Cinderella1(Cinderellas));

console.log(prince.Cinderella2(Cinderellas));
