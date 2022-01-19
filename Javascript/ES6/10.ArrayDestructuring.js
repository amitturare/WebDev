// Destructuring - a faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['susan', 'peter', 'bob', 'anna', 'kelly'];

// Accessing the values using old style
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

// Using ES6
const [friend1, friend2, friend3, friend4, friend5, friend6] = friends;
console.log(friend1);
console.log(friend2);
console.log(friend3);
console.log(friend4);
console.log(friend5);
console.log(friend6);

// What if you want to get friends which are on odd indexes, to skip indexes just add a comma in middle
const [f1, , f3, , f5] = friends;
console.log(f1, f3, f5);

// What if you want to get friends which are on even indexes
const [, f2 ,, f4] = friends;
console.log(f2, f4);

