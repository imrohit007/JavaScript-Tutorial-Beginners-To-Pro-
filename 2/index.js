// This is a single line comment

/* 
This is a multiline comment
It can span multiple lines
*/

let firstName = 'John'
let lastName = 'Doe'
let age = 30

if (age>=18) {
    console.log( firstName + " "+ lastName + " is an adult" )
} else {
    console.log( firstName + " " + lastName + " is a minor" )
}

//5

function calculateSum(num1, num2) {
    let sum = num1 + num2
    return sum
}

//6

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}

//7

let num1 = 10
let num2 = 5

// Arithmetic operators
let sum = num1 + num2
let difference = num1 - num2 

// Comparison operators
let isEqual = num1 === num2 
let isGreater = num1 > num2 

// Logical operators
let isTrue = true
let isFalse = false 
let andResult = isTrue && isFalse 
let orResult = isTrue || isFalse

// Assignment operators
let result = 0
result += sum 
result *= difference

console.log(result)     // 75

//8

function calculateSum(num1, num2) {
    let sum = num1 + num2 
    return sum
}

console.log(calculateSum(6,10))