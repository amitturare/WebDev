const gas = [20, 40, 100, 30]
const food = [10, 40, 50]

// Make a function which iterates over the array and finds the total for you
function totalSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum > 100) {
        console.log(`Spent a lot mate!`);
    } else {
        console.log(`You are good dw :)`);
    }

    return sum
}

const gasTotal = totalSum(gas)
const foodTotal = totalSum(food)
const randomTotal = totalSum([200, 4000, 500, 1])

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
});


