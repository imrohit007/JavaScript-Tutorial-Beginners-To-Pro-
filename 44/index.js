function fibonacci( n, cache = {} ){
    if (n in cache) return cache[n];
    if (n <= 1) return n;

    const result = fibonacci(n-1, cache) + fibonacci(n-2, cache);
    cache[n] = result;
    return result;
}

console.log(fibonacci(10));

// knapsack

function KnapsackProblem(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1}, () => Array(capacity + 1).fill(0));

    for (let i=1; i<=n; i++) {
        for (let j=1; j<= capacity; j++) {
            if(weights[i-1] <= j) {
                dp[i][j] = Math.max(values[i-1] + dp[i-1][j - weights[i-1]], dp[i-1][j]);
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[n][capacity];
}

const weights = [2,3,4,5];
const values = [3,7,2,9];
const capacity = 5;
console.log(KnapsackProblem(weights, values, capacity));

// LCS

function londestCommonSubsequences(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({length: m+1}, () => Array(n+1).fill(0));

    for (let i =1; i<=m; i++){
        for( let j=1; j<= n; j++){
            if(str1[i-1] === str2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    let lcs = "";
    let i=m, j=n;
    while (i>0 && j>0) {
        if (str1[i-1] === str2[j-1]) {
            lcs = str1[i-1] + lcs;
            i--;
            j--;
        } else {
            if(dp[i-1][j] > dp[i][j-1]) {
                i--;
            } else{
                j--;
            }
        }
    } 
     return lcs;
}

const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
console.log(londestCommonSubsequences(str1, str2));