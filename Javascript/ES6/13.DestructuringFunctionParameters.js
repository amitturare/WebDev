// Destructuring
// As function arguments

const bob = {
    first: 'Bob',
    last: 'Sanders',
    city: 'Chicago',
    siblings: {
        sister: 'Jane',
    },
};

// Using ES6
function printPerson({ first, last, city }) { // Destructure right away
    // const {first, last, city} = person;
    console.log(first, last, city);
}

printPerson(bob);

