// Destructuring Swap Variables

let n1 = 4;
let n2 = 8;

// Old Style
// console.log(`Before interchanging, n1 = ${n1} and n2 = ${n2}`);

// let temp = n1;
// n1 = n2;
// n2 = temp;

// console.log(`After interchanging, n1 = ${n1} and n2 = ${n2}`);

// Using ES6
console.log(`Before interchanging, n1 = ${n1} and n2 = ${n2}`);

// First create a array and then assign it to the array which is interchanged
[n1, n2] = [n2, n1]

console.log(`After interchanging, n1 = ${n1} and n2 = ${n2}`);
