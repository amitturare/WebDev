// for of - loops through the values of an iterable object
// String, Array, Map, Set, etc - Not OBJECT
// unlike forEach, here we can use break and continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'Peter Smith Pepper IV';
let shortName = '';

for (const letter of longName) {
    // iterates over each index of the array or string
    if (letter === ' ') {
        continue; // skips the blank space and continues to iterate over the string
    } else {
        shortName += letter;
    }
}
console.log(shortName);


for (const fruit of fruits) {
    if (fruit === 'banana') {
        // break; // doesn't iterate over and after the banana
        continue; // skips banana and continues to iterate over the array
    }
    console.log(fruit);
}