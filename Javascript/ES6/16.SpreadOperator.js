// Spread Operator [...<string/array>]
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copies them not references them.

const random = 'random';
// Create an array of letters without iterating on the string
const letters = [...random];
console.log(letters);

const boys = ['John', 'Peter', 'Bob'];
const girls = ['Susan', 'Anna'];
const bestFriend = 'Arnold';

const friends = [...boys, bestFriend, ...girls]; // Splitting the iterables that  is arrays into single items
console.log(friends);

console.log('===== REFERENCING =====');
const referencingArr = friends; // This is not copying, if we change any element in referencingArr that will reflect in friends too
referencingArr[0] = 'Karina';
console.log('Before:');
console.log(friends);
console.log('After:');
console.log(referencingArr);

console.log('===== COPYING =====');
const copyingArr = [...friends]; // This just copies everything from the friends, observe that later when printing friends array doesn't change even after we change the first element of the copyingArr array
copyingArr[0] = 'Karina';
console.log('Before:');
console.log(friends);
console.log('After:');
console.log(copyingArr);
    