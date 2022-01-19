// Object Destructuring

// const person = {
//     first: 'Peter',
//     last: 'Sanders',
//     city: 'Toronto',
//     siblings: {
//         sister: 'Jane',
//     },
// };

// Accessing using old style
// const firstName = person.first;
// const lastName = person.last;
// const sister = person.siblings.sister;
// console.log(firstName, lastName, sister);

// Accessing using ES6
// // You can even use some other variables by first assigning that different name
const {
    first: firstName,
    last,
    city,
    random,
    siblings: {sister: favSibling},
} = person;

console.log(firstName);
console.log(last);
console.log(city);
console.log(random); // random isn't a property inside the function, hence it will return undefined
console.log(favSibling);
