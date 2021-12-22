// Total 7 types of data types
// Primitive - string, number, boolean, null, undefined, symbol
// object - arrays, functions, objects

//typeof - operator (typeof variable) or (typeof value)

// string
const text = 'something'
// number
const n = 345
// boolean
let value1 = true
let value2 = false
// null
const ans = null;
//undefined
let name;
// symbol (ES6) 
// will learn later


console.log(typeof text);
console.log(typeof n);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof ans); // should output null but returns object, its a bug
console.log(typeof name);

console.log('========================');

console.log(typeof 'hello all');