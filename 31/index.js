let x = 10;
if (x === 10) {
    console.log("x is equal to 10")
} 
/*
let num = 10;
num.toUpperCase();

*/

//console.log(message);

function divide(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Error:  Both inputs must be numbers");
        return;
    }

    if  (b === 0) {
        console.log("Error: Division by zero is not allowed!");
        return;
    }

    return a/b;
}

console.log(divide(10,2));
console.log(divide(10,0));
console.log(divide('10', 2))


try {
    let result = 10/0;
    console.log('Result', result);
} catch(error) {
    console.log('Error occurred:', error.message);
}