// Blue Print
// Constructor Functions
// new - creates new object, points to it, and omit return
// functions name when starts with capital letter means they are special it doesnt matter if its capital or not

function Person (firstName, lastName) { // -> Constructor Function
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function() {
        console.log(`My full name is ${this.firstName} ${this.lastName} amd I love JS`);
    }
}

const john = new Person('john', 'anderson'); // new keyword helps to create a new object 
console.log(john);

// function createPerson(firstName, lastName) { // -> Factory Function
//     // -> factory function
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         fullName: function () {
//             console.log(
//                 `My full name is ${this.firstName} ${this.lastName} amd I love JS`
//             );
//         },
//     };
// } 

// All objects in Javascript have access to constructor property that returns a constructor function that created it. 
// built in constructor function
// arrays and functions are objects in Javascript 

console.log(john.constructor); // Outputs the constructor function which is used to make an object john
// Look Up Constructor
const susy = new john.constructor('susy', 'adams')
susy.fullName();

// Blank Constructor Function 
const bob = {};
console.log(bob.constructor); // Outputs a blank constructor function that is object
const list = [];
console.log(list.constructor); // Outputs a blank constructor function that is array
const randomFunction = function () {};
console.log(randomFunction.constructor); // Outputs a blank constructor function that is function

