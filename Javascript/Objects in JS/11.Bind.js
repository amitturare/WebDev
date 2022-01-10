// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign now and use later, arguments - list of items

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
    console.log(
        `Hello, I'm ${this.name} and I'm ${this.age} years old. I live in ${city}, ${country}`
    );
}

// BIND
const greetJohn = greet.bind(john, 'San Diego', 'US');
greetJohn();

const greetSusan = greet.bind(susan, 'Toronto', 'CA');
greetSusan();

const greetSomeone = greet.bind({ name: 'peter', age: 18 }, 'San Diego', 'US');
greetSomeone();
