/*
function exampleFunction() {
    var varVariable = "This is a var variable";
    let letVariable = "This is a let variable";
    const constVariable = "This is a const variable";

    if (true) {
        var varVariable = "Updated var variable";
        let letVariable = "Updated let variable";
        const constVariable = "Updated const variable";
        console.log(varVariable);
        console.log(letVariable);
        console.log(constVariable);
    }

    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}
exampleFunction()

*/
/*
console.log(varVariable); // output: undefined
console.log(letVariable); //error
console.log(constVariable); //error

var varVariable ="This is a var variable";
let letVariable = "This is a let variable";
const constVariable = "This is a const variable"

*/
/*
function exampleFunction() {
    for (let i=0; i<5; i++) {
        console.log(i)
    }
    // console.log(i) // error

    const pi = 3.14;
    //pi = 3.12159 //error

    console.log(pi)
}

exampleFunction()
*/
// Traditional function expression

/*
const multiply1 = function(a,b) {
    return a*b;
}

// Arrow function
const multiply = (a,b) => a*b;

*/
/*
const person = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000)
    },
};

person.greet();
*/
/*
const name="John"
const age=25;
const occupation = "Developer"

const message = `
    Hello there!
    My name is ${name}.
    I'm a ${occupation}.
    Nice to meet you!
    `;
console.log(message)

*/
/*
for (let i = 0; i<5; i++) {
    const squared = i*i;
    console.log(squared)
}
*/

const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map((num) => num*num);

console.log(squaredNumbers)

const name='sarah';
const age=18;
const greeting = `hello, ${name}! you are ${age} years old!!`;

console.log(greeting)