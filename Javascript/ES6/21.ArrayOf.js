// Array.from and Array.of - they are NOT ON THE PROTOTYPE
// Array.from
// Array.of

// of creates a new Array instance from a variable number of arguments.

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from); // outputs undefined - because .from is not on the prototype
// console.log(example.of); // outputs undefined - because .of is not on the prototype

const friends = Array.of('john', 2, true);
console.log(friends);
