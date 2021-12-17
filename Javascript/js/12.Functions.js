// Functions - decalre, invoke
// It helps to reduce the repetative work

// function <function name>() {
// logic here
// }  

// Below written code from 11 to 16 is function decalaration
function hello() {
    // logic
    console.log('Hello there, Bob');
    console.log('Hello there, John');
    console.log('Hello there, Susy');
}
// In order to use the fucntion, we have to invoke the fucntion
// Below written line of code is function invokation
hello()

console.log('=====================');

// params - when declare/define; placeholders, local vars
// arguments - when invoke/call/run; use vars/values, multiple params, undefined
function helloAgain(firstName) {
    console.log('Hello there, ' + firstName);
}
// greet Bob
helloAgain('Bob');
// greet Anna
helloAgain('Anna');
// greet Susy
helloAgain('Susy');

console.log('=====================');

// return
// default undefined, shortcuts, ignores after
function calculate(n) {
    // console.log('Value in cm is: ' + (n * 2.54) + ' cm');
    return (n * 2.54)
}

const w = calculate(100)
const h = calculate(80)

const dimensions = [w, h]
console.log(dimensions);

console.log('=====================');

// Function Expression, anonymous function
// expression - another way to define a function
// create a varaible, assign to function (not value), use var
// diff - hoisting, use - arrow func, libraries (gatsby which is based on REACT)
function addValues(n1, n2) {
    return n1+n2;
}
const first = addValues(3, 4);
const second = addValues(12, 34);

// function expression
const addition = function (n1, n2) {
    return n1+n2;
}

console.log([first, second, addition(5, 6)]);

console.log('=====================');

// arrow func
const mult = (n1, n2) => n1*n2;
console.log(mult(5,6));