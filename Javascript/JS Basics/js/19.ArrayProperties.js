// Array Properties and Methods

let names = ['john', 'bob', 'barry', 'monica', 'olga', 'ben'];

// LENGTH
console.log(`Length: ${names.length}`); // to get the length of the array
console.log(`Last item: ${names[names.length - 1]}`); // to access the element of the array

// CONCATENATION
let lastNames = ['pepper', 'onion', 'banana']
const allNames = names.concat(lastNames);
console.log(`After Concatenation: ${allNames} and its length is: ${allNames.length}`);

// REVERSE
console.log(`Reversed array: ${allNames.reverse()}`);

// UNSHIFT --> adds the element to the START of the array
allNames.unshift('susy')
allNames.unshift('anna')
console.log(allNames);

// SHIFT --> removes the element from  the START of the array
allNames.shift()
allNames.shift()
allNames.shift()
allNames.shift()
console.log(allNames);

// PUSH --> adds the element to the END of the array
allNames.push('susy')
console.log(allNames);

// POP --> removes the element from the END of the array
allNames.pop()
console.log(allNames);

// SPLICE --> mutates original array
const specificNames = allNames.splice(2, 3) // will pick from 3 elements from 2nd index including it
console.log(specificNames);
