// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copies them
// Spread Operator for Function Arguments

const numbers = [23, 45, 66, 88, 2345];

console.log(Math.max(numbers)); // Outputs NaN
// You can't directly pass numbers array in Math.max or any other function

// We need to split them into single items, which is possible using spread operator
console.log(Math.max(...numbers));

console.log('============================================');

const peter = ['Peter', 'Sanders'];

const sayHello = (name, lastName) => {
    console.log(`Hello ${name} ${lastName}`);
};

// sayHello(peter[0], peter[1]); // This works, but a faster way will be by splitting them into single items
sayHello(...peter);
