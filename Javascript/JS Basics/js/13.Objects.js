// Objects in JS are collection of properties (properties are also referred as keys) 
// objects - key/value pairs methods
// if a porperty or key is a function, it is called as method inside the object
// to access, dot notation is used

const person = { // this is how objects are created in JS
    name: 'Anna',
    lastName: 'Peters',
    age: 19,
    education: false,
    married: true,
    siblings: ['john', 'susan', 'peter'],
    greeting: function sayHello() { // this is called a method
        console.log('Hello my name is Anna');
    }
}

console.log(person.name); // this is the dot notation, outputting Anna 
console.log(person.age);
console.log(person.siblings[2]);
person.greeting() // this is how method is run which is under the object

// You can also assign the property values to any variable
const age = person.age;
console.log(age);

// You can also change the values of the property
person.name = 'Amit'
console.log(person); // name is changed to Amit