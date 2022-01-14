// IIFE Immediately-Invoked Function Expression
// older approach
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps

const num1 = 30;
const num2 = 50;

function add() {
    console.log(`The result is: ${num1 + num2}`);
}
add();

// To use IIFE, add parenthesis to whole function block and at the end just parenthesis to invoke it
// (function () {
//     console.log(`Hello All`);
// }) ();

// You can even repeat the variables used under the function again and again with IIFE as they are made inside the function scope only
(function () { // function 1 == function 2
    const num3 = 40;
    const num4 = 50;
    console.log(`The result is: ${num3 + num4}`);
})();

(function () { // function 2 == function 1
    const num3 = 45;
    const num4 = 50;
    console.log(`The result is: ${num3 + num4}`);
})();

// console.log(num3); // Gives error as num3 is a local variable and it can't be used outside of its block

// To use IIFE with arguments
(function (num3, num4) {
    // function 2 == function 1
    console.log(`The result is: ${num3 + num4}`);
})(500, 800);

// You can also return or assign to a variable
const result = (function (num3, num4) {
    // function 2 == function 1
    return `The result is: ${num3 + num4}`;
})(500, 900);
console.log(result);