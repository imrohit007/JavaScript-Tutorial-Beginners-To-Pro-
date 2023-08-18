// insertion sort

function insertionSort(arr) {
    for (let i=1; i<arr.length; i++) {
        let currentElement = arr[i];
        let j = i-1;

        while (j>=0 && arr[j] > currentElement){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = currentElement;
    }
    return arr;
}

//const unsortedArray = [7,3,5,2,1,8,4];
//const sortedArray = insertionSort(unsortedArray);
//console.log(sortedArray);

// merge sort

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

const unsortedArray = [7,3,5,2,1,8,4];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray);