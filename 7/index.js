// for loop
/*
for (let i=0; i<5; i++) {
    console.log(i)
}
*/

// while loop
/*
let i=0;
while(i<5){
    console.log(i);
    i++;
}
*/

// do while loop
/*
let i=0;
do {
    console.log(i);
    i++;
} while( i<5);
*/
/*
const numbers =[2,4,6,-1,8,10];

for (let i=0; i< numbers.length; i++){
    if (numbers[i] < 0) {
        console.log("Negative number found");
        break;
    }
    console.log(numbers[i])
}
*/

// continue statements
const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0) {
        continue;
    }
    console.log(numbers[i]);
}

const colors1 = ['red', 'green', 'blue'];
const colors2 = ['light', 'dark'];

for (let i = 0; i<colors1.length; i++){
    for (let j = 0; j<colors2.length; j++){
        console.log(colors2[j] + " " + colors1[i]);
    }
}

(function() {
  console.log("This is an IIFE!");
})();