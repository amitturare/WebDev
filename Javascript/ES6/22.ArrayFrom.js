// Array.from and Array.of - they are not on the prototype of array object

// .from - return Array object from any object with a length property or an iterable object
// .from turns array-like/ish into array - string, nodeList, Set

const random = 'random';
// console.log(Array.from(random)); // turns it into a array of letters

// When working with arguments
function countTotal() {
    // console.log(arguments); // 'arguments' is a keyword // outputs a list of arguments, not an array
    let total = Array.from(arguments); // coverts the arguments into array, you can apply array iterators now
    total = total.reduce((acc, curr) => (acc += curr), 0);
    console.log(total); // its an array
}

countTotal(1, 2, 3, 4, 5);
