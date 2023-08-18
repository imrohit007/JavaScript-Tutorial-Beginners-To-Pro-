function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];

    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

//const unsortedArray = [7,2,1,6,8,5,3,4];
//const sortedArray = quickSort(unsortedArray);

//console.log(sortedArray)


//---------

// heap sort

function heapify(arr,n, i) {
    let largest = i;
    const left = 2*i+1;
    const right = 2*i+2;

    if (left <n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest= right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    for (let i = Math.floor(n/2) -1; i>=0; i--) {
        heapify(arr, n, i);
    }

    for (let i=n-1; i>0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

const unsortedArray = [7,2,1,6,8,5,3,4];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray);