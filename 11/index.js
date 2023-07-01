/*
let car = {
    make: 'Toyota',
    model: "Toyota",
    year:2021,
    color:'red',
}


let person = new Object();
person.name = "John";
person.age = 32;


class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

let cat = new Animal("Mittens", "cat");

let car = {
    make: 'Toyota',
    model: 'Supra',
    year: 2021,
    color: 'red',
    start: function() {
        console.log("This car has started!");
    }
}

console.log(car.make);
car.start()

car.price = 25000;
car.color = "blue";

*/
/*
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.makeSound = function(){
    console.log("This animal makes a sound!");
}

function Cat(name){
    this.name = name;
}

Car.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

let mittens = new Cat("Mittens");
mittens.makeSound();

*/
/*
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }


    makeSound() {
        console.log("This animal makes a sound");
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "cat");
    }
}

let mittens = new Cat("Mittens");
mittens.makeSound();
*/
/*
class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount){
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance){
            console.log("Insufficient funds!");
        } else {
            this._balance -= amount;
        }
    }
}

let account = new BankAccount(1000);
console.log(account.balance);
account.deposit(500);
console.log(account.balance);
account.withdraw(2000);
console.log(account.balance);

*/
/*
class Shape {
  getArea() {
    throw new Error("getArea() method not implemented!");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());
*/

/*
class Animal {
    makeSound() {
        console.log("Generic Animal Sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark!")
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!!");
    }
}

let animal = new Animal();
let dog = new Dog();
let cat = new Cat();

animal.makeSound();
dog.makeSound();
cat.makeSound();

*/

class Shape {
    draw() {
        console.log("Drawing a Shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a Circle");
    }
}

class Square extends Shape {
    draw(){
        console.log("Drawing a Square")
    }
}

let shape = new Shape();
let circle = new Circle();
let square = new Square();

shape.draw();
circle.draw();
square.draw()