// Reference V/S Value
// Primitive Data Types - String, Number, Symbol, Boolean, Undefined, Null
// Object Data Types - Arrays, Functions, Objects
// typeof

// when assigning primitive data types value to a variable any changes are made directly to that value, without affecting the original value

// when assigining non-primitive data type value to a variable is done by reference so any changes will affect all the references  

const number = 1;
let number2 = number;
console.log(`First number: ${number}`);
console.log(`Second number: ${number2}`);

number2 = 18 // when written this, this is not changing the value 
console.log(`First number: ${number}`);
console.log(`Second number: ${number2}`);


let person = {name: 'bob'}
let person2 = person
console.log(`First person: ${person.name}`);
console.log(`Second person: ${person2.name}`);

person2.name = 'susy' // when written this, this is changing name of person and person 2 both
console.log(`First person: ${person.name}`);
console.log(`Second person: ${person2.name}`);