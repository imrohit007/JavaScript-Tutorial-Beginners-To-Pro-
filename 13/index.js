/*
let x = 10;

function myFunction() {
    console.log(x)
}

myFunction();
*/
/*
function myFunction() {
    let y =20;
    console.log(y);
}

myFunction();
console.log(y)
*/

function outerFunction() {
    let x = 10;
    function innerFunction() {
        console.log(x);
    }
    return innerFunction;
}

let closure = outerFunction();
closure()

function counter() {
    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}
let counter1 = counter();
counter1();
counter1();

let counter2 = counter();
counter2();