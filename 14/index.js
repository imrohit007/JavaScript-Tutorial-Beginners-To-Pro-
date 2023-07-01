/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            resolve('Promise Resolved');
        } else {
            reject('Promise rejected!')
        }
    }, 2000);
});

myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error);
})


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000)
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = data.toUpperCase();
            resolve(processedData);
        }, 2000)
    });
}

fetchData().then((result) => {
    console.log(result);
    return processData(result);
})
.then((processedData) => {
    console.log(processedData)
})
.catch((error) => {
    console.error(error);
})
*/
/*
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved!!');
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved!!');
    }, 3000);
});

Promise.all([promise1, promise2])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.error(error);
})

*/
/*
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!!');
        }, 2000);
    });
}


async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error)
    }
}

getData()
*/

/*
function getData(callback) {
    setTimeout(() => {
        const data = 'Data retrieved!';
        callback(data);
    }, 2000);
}

// converting to promise-based function
function getDataPromise() {
    return new Promise((resolve) => {
        getData((data) => {
            resolve(data);
        })
    })
}

async function getDataAsync() {
    try {
        const data = await getDataPromise();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

*/

async function processItems(items) {
    for (const item of items) {
        try {
            const processedItem = await processItem(item);
            console.log(processedItem)
        } catch (error) {
            console.error(`Error processing item: ${item}`, error);
        }
        
    }
}

async function processItem(item) {
    
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    const processedItem = item * 2;
    return processedItem;
  }

// Usage
const data = [1,2,3,4,5];
processItems(data);

