// Implicit Type Conversion

const name = 'amit'
const lastName = 'arora'
const fullName = name + ' ' + lastName
console.log(fullName);

const n = 4
const n2 = 10
const ans = n + n2
console.log(ans);

// What if subtract a string from a string
const value = name - lastName;
console.log(value); // outputs - NaN (Not a number)

console.log("================");

let n3 = '10'
let n4 = '23'
const ans2 = n4 - n3
console.log(ans2); // gives outputs as expected, coz it changes the type of the varaibles to int and do the operation
console.log(n3 + n4); // gives output 1023, coz it follows the rules of string concatenation here
