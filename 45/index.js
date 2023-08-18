function coinChangeGreedy(amount, denominations) {
    denominations.sort((a,b) => b-a); // sort denominations in descending order
    let coinsUsed = [];

    for (let denomination of denominations) {
        while(amount >= denomination) {
            coinsUsed.push(denomination);
            amount -= denomination;
        }
    }
    return coinsUsed;
}

const amount = 43;
const denominations = [1,5,10,25];
console.log(coinChangeGreedy(amount, denominations));