// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items

const john = {
    name: 'john',
    age: 24,
};
const susan = {
    name: 'susan',
    age: 21,
};

function greet(city, country) {
    console.log(this); // points back to the global object that is window
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`);
}

// QUESTION: How do we apply the greet function on john and susan as they don't have the any methods?

// Ans is use apply
greet.apply(john, ['san diego', 'us']); // san diego and US are the arguments which are in a array as we have used apply
greet.apply(susan, ['san diego', 'us']);

greet.call(john, 'san diego', 'us'); // Arguments are list items in call
greet.call(susan, 'san diego', 'us');