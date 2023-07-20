function multiply(a,b) {
    return a*b;
}

//const numbers = [1,2,3,4,5];
//const doubledNumbers = numbers.map(num => num *2);

//console.log(doubledNumbers);
//console.log(numbers);


function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplyBy(2);
console.log(double(5));

function addTwo(number) {
    return number + 2;
}

function multiplyByThree(number) {
    return number *3;
}

const addTwoAndMultiplyByThree = (number) => multiplyByThree(addTwo(number));

console.log(addTwoAndMultiplyByThree(4))

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

const numbers = [1,2,3,4,5];

const doubledNumbers = numbers.map(num => num*2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}!`);
    };
}

const greetJohn = greet("John");
greetJohn('Good morning');
greetJohn("hello");

const greetAlice = greet("Alice");
greetAlice("Good evening!!")