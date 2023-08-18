function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while (left <= right) {
        const mid = Math.floor((left + right) /2);

        if (arr[mid] === target) {
            return mid;     // found the target element at index "mid";
        } else if(arr[mid] < target) {
            left = mid + 1; // search the right half of the array
        } else {
            right = mid -1;     // search the left half of the array
        }
    }
    return -1;  // target element not found
}

// example usage
const sortedArray = [2,4,6,8,10,12,14,16,18,20];
const targetValue = 10;

const resultIndex = binarySearch(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`Target value ${targetValue} found at Index ${resultIndex}`);
} else {
    console.log(`Target value ${targetValue} not found in the array`);
}
