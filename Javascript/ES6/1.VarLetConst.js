// var, let , const


// VAR - lets you define, update and redefine a variable
// Defining a variable
var number = 100;
// console.log(number);

// Updating
number = 200;
// console.log(number);

// Redefining
var number = 'orange';
// console.log(number);


// LET - doesn't let you redefine a variable
// Defining a variable
let amount = 100;
// console.log(amount);

// Updating
amount = 200;
// console.log(amount);

// Redefining
// let amount = 500; // Gives an error saying amount has already been declared


// CONST - doesn't let you update and redefine a variable
// Defining a variable
const result = 100;

// Updating 
// result = 200; // Gives an error saying assignment to constant variable

// const doesn't let you mutate primitive data types (strings, floats, ints) but you can mutate reference data types (arr or objects)
const person = {
    name: 'Peter'
};
// Update the name
person.name = 'Amit';
console.log(person);