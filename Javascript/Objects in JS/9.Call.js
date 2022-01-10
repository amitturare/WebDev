// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items

const john = {
    name: 'john',
    age: 24,
    greet: function() {
        console.log(this); // points back to the object john
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const susan = {
    name: 'susan',
    age: 21,
}

john.greet();

// QUESTION: How do we apply the method of john on susan object without adding that method under susan object?

// susan.greet() // This will fail as it outputs error

function greet() {
    console.log(this); // points back to the global object that is window
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
}
// greet(); // This will fail as it is pointing to window and we don't want that

// const secondGreet = john.greet
// secondGreet(); // ouputs same as greet(); 

// call will solve this
greet.call(susan) // this calls greet function that is a method of john object on susan object
john.greet.call(susan) // Works same like greet.call(susan)
greet.call({name: 'peter', age: 30});