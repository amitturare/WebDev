// variable - most basic building block
// you can store, access and modify the values of the variable
// Declare, Assignment Operator, Assign Value
// assigning values later, and modify existing

// to start with variables -> let <variable name> = <value>
let name;
console.log(name); // ouputs undefined in the console

let a = 'Hi';
console.log(a); // ouputs Hi

let address, zip, state; // this will just create variables
address = 'Pune'; // this is called as assigning values later
zip = 123456;
state = 'MH';
console.log(address, zip, state);

console.log('==================');

// You can modify the existing values by reassigining
a = 'Hello'
console.log(a);

console.log('==================');

// VARIABLE NAMING RULES
// can contain digits, letters, underscore, $
// should start with letter, $ or _
// no keyword can be used 
// can't start with a number
// variables are case sensitive
// use camelCase, for e.g. firstName, lastName or else use underscore, for e.g. first_name, last_name

// Three type of variables ->
// LET vs CONST vs VAR
// using var
var value = 'some value';

// using let
let firstName = 'Amit';

// using const (constant) - can't reassign
const lastName = 'Turare';

// lastName = 'GG'; // ouputs error in the console
console.log(value);
console.log(firstName);
console.log(lastName);

console.log('==================');

// Quotation Marks 
// "" or '' both works the same
const x = 'Amit';
const y = "Turare";
console.log(x);
console.log(y);

console.log('==================');


