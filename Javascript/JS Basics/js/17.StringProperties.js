// String properties and methods
// wrapper String Object, don't memorize methods

let text = ' Peter Jordan'; // even spaces are counted
let length = text.length;
console.log(length);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0)); // outputs a space, as it is at 0th index
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('e')); // gives -1 if e is actually not in the text 
console.log(text);
console.log(text.trim()); // removes the unnecessary spaces from beginning and end
console.log(text.startsWith(' Peter')); // returns a boolean
console.log(text.trim().toLowerCase().startsWith('peter')); // returns a boolean
console.log(text.includes('P')); // returns a boolean
console.log(text.slice(0, 2));
console.log(text.slice(-3, -1)); // starts from behind

// const person = {
//   name: 'peter', // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name); // dot notation to access the property name of person
// person.greeting();
