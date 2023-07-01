/*
function sayHello(){
    console.log("hello, world!");
}

sayHello();

let sayGoodbye = function() {
    console.log("Goodbye, world!")
}

sayGoodbye();

let addNumbers = function(num1,num2) {
    return num1 + num2;
};

console.log(addNumbers(3,4));

console.log(function(num1, num2){
    return num1 + num2;
}(3,4));

*/
/*
sayHello();

function sayHello(){
    console.log("Hello World!");
}

function sayName(name) {
    console.log("Hello " + name + "!");
}

sayName("Alice")

sayName("Bob")

*/
/*
function addNumbers(num1, num2) {
    return num1 +num2
}

let result = addNumbers(3,4);
console.log(result)

*/


(function() {
    console.log("This is an IIFE!");
  })();





















/*
let addNumbers = (num1, num2) => {
    return num1 + num2;
}

let result = addNumbers(3,4);

console.log(result)

*/
/*
function makeAdder(num1){
    return function(num2){
        return num1 +num2;
    }
}

let add3 = makeAdder(3);
let add5 = makeAdder(5);

console.log(add3(4));
console.log(add5(7));
*/