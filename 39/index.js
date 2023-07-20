// bubble sort

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i=0; i< n-1; i++) {
            if(arr[i] > arr[i+1]) {
                // swap elements if they are in the wrong order
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// example usage
const unsortedArray = [5,2,9,1,5,6];
console.log("Unsorted Array: ", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array: ", sortedArray);

// selection sort

function selectionSort(arr) {
    const n = arr.length;

    for (let i=0; i< n-1; i++) {
        let minIndex = i;

        // find the index of the minimum element in the remaining unsorted part
        for(let j = i+1; j<n; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // swap the minmum element with the first element in the unsorted part

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const arr = [5,2,9,1,5,6];
console.log("Original array: ", arr);

const sortedArr = selectionSort(arr);
console.log("Sorted Array: ", sortedArr);