/*
const values = [1,2,3,4,5];

let found =false;

for (let i=0; i<values.length; i++){
    if (values[i] === 3){
        found= true;
        break;
    }
}
console.log(found)
*/

const dataset = [
    {name: 'Rohit', age:23},
    {name: 'Kaushal', age: null},
    {name: 'Nikhil', age:24},
];

for (let i =0; i<dataset.length; i++){
    const { name, age} = dataset[i];
    if(!age){
        console.log(`Skipping ${name} because age is not provided`);
        continue;
    }
    console.log(`${name} is ${age} years old`);
}