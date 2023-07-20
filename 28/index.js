class Singleton {
    constructor() {
        //....
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);


//-----------------

class Car {
    constructor(model,year) {
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

class CarFactory {
    createCar(model, year) {
        return new Car(model, year);
    }
}

const carFactory = new CarFactory();
const car1 = carFactory.createCar("Tesla", 2022);
const car2 = carFactory.createCar("BMW", 2023);

console.log(car1.getInfo());
console.log(car2.getInfo());

//-------------

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log(`Received data: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Hello, observers!!");

//----------------------


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Animal sound!");
    }
  
    clone() {
        const clonedObject = Object.create(Object.getPrototypeOf(this));
        clonedObject.name = this.name; 
        return clonedObject;
    }
}

const cat = new Animal("Cat");
const cloneCat = cat.clone();

console.log(cloneCat.name);
cloneCat.makeSound();
  

//------------------

const counterModule = (function () {
    let counter = 0;

    function increment() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function getCount() {
        return counter;
    }

    return {
        increment,
        decrement,
        getCount
    };
})();

counterModule.increment();
counterModule.increment();
counterModule.decrement();

console.log(counterModule.getCount());

//------------------------

class Coffee {
    getCost() {
        return 10;
    }

    getDescription() {
        return "Plain Coffee";
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee

    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return this.coffee.getCost() + 2;
    }

    getDescription() {
        return `${this.coffee.getDescription()}, milk`;
    }
}

const coffee = new Coffee();
const coffeeWithMilk = new MilkDecorator(coffee);

console.log(coffeeWithMilk.getCost());
console.log(coffeeWithMilk.getDescription());