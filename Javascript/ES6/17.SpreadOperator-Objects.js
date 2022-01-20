// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copies them
// Spread Operator for objects came in ES8 - ES2018

const person = {
    name: 'Peter',
    job: 'Developer',
};

// We need to copy the above object and not refer to it.
// You can also add other properties or overwrite the existing properties by just putting a coma followed with the property name
const newPerson = {...person, city: 'Chicago', name: 'Susan'};

// Verify that we have copied the person object by logging both the objects
console.log(person); // This won't have the city property.
console.log(newPerson); 
