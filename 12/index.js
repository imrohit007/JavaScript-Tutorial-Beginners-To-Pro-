// let numbers = [1,2,3,4,5];

let emptyArray = [];

/*
let names = [
    ['Alice', 'Bob'],
    ['Charlie', 'David']
]
*/

let names = ['Alice', 'Bob', 'Charlie'];
console.log(names[0]);

/*
let numbers = [1,2,3];
numbers[1] = 4;
console.log(numbers)
*/

/*

let numbers = [1,2,3,4,5];
console.log(numbers.length);

*/
/*
let numbers = [1,2,3];
numbers.push(4);
console.log(numbers)

numbers.unshift(0);
console.log(numbers)

*/
/*
let numbers = [1,2,3,4,5];
numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers)

*/
/*
let numbers = [1,2,3];
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
*/
/*
let numbers = [1,2,3];
numbers.forEach(function(number) {
    console.log(number)
})
*/
/*
let numbers = [1,2,3];
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers)

let matrix = [
    [1,2],
    [3,4],
];

console.log(matrix[0][1]);

let cube = [
    [
        [1,2],
        [3,4],
    ],
    [
        [5,6],
        [7,8],
    ],
];

console.log(cube[0][1][0]);

let fruits = ['apple', 'orange', 'banana', 'kiwi'];
fruits.sort();
console.log(fruits)
*/
let numbers = [1,2,3,4,5];
console.log(numbers.indexOf(3));
console.log(numbers.includes(6))

let slicedNumbers = numbers.slice(1,4);
console.log(slicedNumbers)

numbers.splice(2,1, 'three');
console.log(numbers)