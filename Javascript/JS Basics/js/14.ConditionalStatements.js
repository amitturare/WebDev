// Conditional Statements 
// >, <, >=, <=, ==, ===, !=, !===
// = used for assigining values
// == checks value only
// === checks value and type 

// Syntax - if (condition) {if true apply this}
if (true) {
    console.log('Hello All');
}

if (2 > 1) {
    console.log('Hello All');
}

const condition = 5 > 5
if (condition) {
    console.log('first number is greater than second');
} else {
    console.log('second number is greater than first');
}

console.log('====================');

// else if
const n1 = 6;
const n2 = 6
const result = n1 >= n2
if (n1 > n2) {
    console.log('first number is greater than second');
} else if (result) {
    console.log('first number is equal to the second number');
} else {
    console.log('second number is greater than first');
}

console.log('====================');

// == checks value only
// === checks value and type 
const num1 = 6;
const num2 = '6';

console.log(num1 == num2); // returns true as the value is same
console.log(num1 === num2); // returns false, it needs value and type both to be same

console.log('====================');

// Logical Operators
// || - or, && - and
// in || if one of the condition is correct, it comes out to be true
// in && if one of the condition is incorrect, it comes out to be false

const firstName = 'bob'
const age = 24

if (firstName === 'bob' || age === 29) {
    console.log('Hey there user');
} else {
    console.log('wrong values');
}