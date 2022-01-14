/* 
HOISTING
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.
*/
// function and var declarations are hoisted
// safer to access only after initialized

display(); // This still works even after invoking first and then writing its function later, this is because Javascript hoists the functions, means it takes it top of its scope

// Step 1 creating a function
function display() {
    console.log('Hello All');
}
// Step 2 invoking the function
// display(); // This is our common practice, creating the function first and then running it
// But what if we invoke first and then create the function, try writing display() above the function code!?

// THIS DOESN'T WORK WITH VARIABLES
// console.log(firstName); // Gives error
// displayName(); // Gives error
const firstName = 'Amit';
let lastName = 'Turare';
var random = 'random';

function displayName() {
    console.log(`${firstName} ${lastName}`);
}
displayName(); // This works, but then as we have used variables inside the function, if you try to invoke the function above the variables, it will given an error. Try it!
