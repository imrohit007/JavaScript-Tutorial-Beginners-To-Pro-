// Declaring a variable using var
var myVar = "Hello World";

// Declaring a variable using let
let myLet = "Hello World";

// Declaring a variable using const
const myConst = "Hello World";

// Declaring a number
let myNum = 24;

// Using Arithmetic operators
let sum = 2+2;
console.log(sum)

let difference = 10-5;
console.log(difference)

let product = 2*4;
console.log(product)

let quotient = 10/2;
console.log(quotient)

let remainder = 11%3;
console.log(remainder)

// Using the Math object
let randomNumber = Math.random()
console.log(randomNumber)

let roundedNumber = Math.round(3.14159)
console.log(roundedNumber)

// Declaring a string
let myString = "Hello World"

// Concatenating strings
let firstName = "Bug"
let lastName = "Ninza"

let fullName = firstName + " " + lastName;
console.log(fullName)

// Using template literals
let gretting = `Hello, ${fullName}`
console.log(gretting)

// Declaring a boolean
let myBoolean = true;

//Using comparison operators
let x = 5;
let y = 10;
let z = 5;

console.log(x<y);
console.log(x>y);
console.log(x <= z);
console.log(x >= z);
console.log( x === z);
console.log(x !== y);

// Using logical operators

let a = true;
let b = false;
console.log( a && b);
console.log(a || b);
console.log(!a);

// Declaring null and undefined
let myNull = null;
let myUndefined = undefined;

// Checking for null and undefined
console.log(myNull);
console.log(myUndefined);
console.log(typeof myNull);
console.log( typeof myUndefined);
console.log(myNull == myUndefined);
console.log(myNull === myUndefined);

// Type coercion examples
console.log(5 + "5");
console.log(5 - "5");
console.log(true + 1);
console.log("foo" + []);
console.log("foo" + {});