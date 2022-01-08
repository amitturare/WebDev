// Objects Basics

/*
Objects are collection of keys (properties) value paris. 
Property values can be strings, numbers, booleans, arrays and function however if the property value is a function, it's called a method
*/

// object literal syntax,{}
// dot notation - to access any property of the object

const person = {
    name: 'Amit',
    age: 19,
    married: false,
    siblings: 1,
    greet: function (name) {
        console.log(`Hello, my name is ${name}`);
    },
    // Shorthand
    sayHello(name) {
        console.log(`Hello, my name is ${name}`);
    },
};

// Access the name property of person
console.log(person.name);

// Assign the name property to some variable
const name = person.name;
console.log(name);

// You can change the values
person.age = 60;

// Add a property city to the object
person.city = 'Pune';

// Delete property
delete person.siblings;
// To make sure if u have deleted the property
const deletedProperty = delete person.siblings;
console.log(deletedProperty); // Outputs True

// Display the whole object
console.log(person);
