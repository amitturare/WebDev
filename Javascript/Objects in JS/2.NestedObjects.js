// Nested Objects
// set variable as property value
// dot notation vs bracket notation

// You can also set a variable as a property value, first define and assign some value to some variable
const age = 60;
let random = 'random-value';
random = 'age'

const person = {
    name: 'Amit',
    age: age, // Assign the variable to this property
    married: false,
    siblings: 1,
    greet: function (name) {
        console.log(`Hello, my name is ${name}`);
    },
    // Shorthand
    sayHello(name) {
        console.log(`Hello, my name is ${name}`);
    },
    job: {
        title: 'developer',
        company: {
            name: 'SomeStartup',
            location: 'London',
        },
    },
    'random-value': 'random', // Any property with dash in middle is considered a string and to access this, bracket notation is used.
};

// Access the name of the company
console.log(person.job.company.name);

// Access the age of the person
console.log(person.age);

// Accessing the properties using bracket notation
console.log(person['random-value']);
console.log(person['name']); // OR console.log(person.name);

console.log(person[random]); // LOOK UP process
