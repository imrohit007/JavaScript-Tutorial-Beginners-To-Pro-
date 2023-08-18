// Linear search
function linearSearch(arr, target) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // returns the index of the target element
        }
    }
    return -1; // returns -1 if the target element is not found
}

const myArray = [10, 5, 3, 8, 2];
//const targetValue = 8;

//const result = linearSearch(myArray, targetValue);
//console.log(`index of ${targetValue}: ${result}`)


// binary search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length-1;

    while (left <= right) {
        const mid = Math.floor((left + right) /2 );

        if (arr[mid] === target) {
            return mid;  // returns the index of the target element
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }

    return -1; // returns -1 if the target element is not found
}

const sortedArray = [2,5,8,10,13,18,23,30];
const targetValue = 18;

const result = binarySearch(sortedArray, targetValue);
console.log(`index of ${targetValue}: ${result}`)

