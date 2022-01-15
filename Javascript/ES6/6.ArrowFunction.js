/* 
Key Features of Arrow Functions:
- No name and no function keyword
- Always expression
- Assign to variable
*/
// no function keyword
// 'this

// OLD Style
// FUNCTION 1
// function sayHi() {
//     console.log('Hey everyone!');
// }
// sayHi();

// FUNCTION 2
// const hello = function (name) {
//     console.log(`Hello ${name}`);
// };
// hello('peter');

// FUNCTION 3
// function triple(value1, value2) {
//     return value1  * value2 * 3;
// }
// const ans = triple(1, 2);
// console.log(ans);

// Arrow Functions
// FUNCTION 1 - if there is only one liner expression, you can omit return and curly brackets
const sayHi = () => console.log('Hey everyone!');
sayHi();

// FUNCTION 2 - passing parameter
const double = (value) => value * 2; // when working with one parameter, you can ommit the parenthesis
const num = double(4);
console.log(num);

// FUNCTION 3 - more than 1 parameter
const multiply = (n1, n2) => {
    // if there are is expression more than one line, add curly brackets and return the result at the end
    const result = n1 * n2;
    return result;
};
const ans = multiply(4, 5);
console.log(ans);

// FUNCTION 4 - to return object (factory function)
const object = () => ({ name: 'peter', lastName: 'sanders', age: 20 });
const ans2 = object();
console.log(ans2);

// FUNCTION 5 - using anonymous function (arrow functions as callback functions)
const numbers = [1, 2, 3, 4, 5, 6];
// get the numbers which are greater than 2
const numbersGreaterThanTwo = numbers.filter((num) => num > 2);
console.log(numbersGreaterThanTwo);

// FUNCTION 6 - using arrow function as callback function for eventListener
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => console.log(`You have clicked a button!`));