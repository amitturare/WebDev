// These are some powerfui array methods
// forEach, map, filter, find, reduce

// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls CALLBACK against each item in a array. Reference item in the CALLBACK parameter

// const numbers = [0, 1, 2, 3, 4]

// To show all the numbers
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

console.log('==========================');
console.log('FOREACH');
// this doesn't return any new array

const people = [
    {name: 'bob', age: 20, position: 'developer', id: 1, salary: 200},
    {name: 'peter', age: 25, position: 'designer', id: 2, salary: 300},
    {name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500},
    {name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500}
];

function showPerson(person) { // this is an CALLBACK function
    console.log(person.position.toUpperCase());
}

people.forEach(showPerson); 

// you can also add a anonymous function (with or without arrow function)
people.forEach(function(item){
    console.log(item.position.toUpperCase());
})
// ----------------------------------------------

console.log('==========================');
console.log('MAP');
// this does return new array
// doesn't change size of original array
// uses values from original array when making new one

const ages = people.map(function(person) {
    // console.log(person);
    return person.age + 20
})
console.log(ages);
// ----------------------------------------------
const newPeople = people.map(function(person) {
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20
    }
})
console.log(newPeople);
// ----------------------------------------------
const names = people.map(function(person) {
    return `<h1>${person.name}</h1>`
})
document.body.innerHTML = names.join('') // displays on the page
console.log(names);
// ----------------------------------------------

console.log('==========================');
console.log('FILTER');
// this does return new array
// can manipulate the size of new array
// returns based on condition

const youngPeople = people.filter(function(person) {
    return person.age <= 25
})
console.log(youngPeople);
// ----------------------------------------------
const developers = people.filter(function(person) {
    return person.position === 'developer'
})
console.log(developers);
const developer = people.filter(function(person) {
    return person.position === 'senior developer'
})
console.log(developer);
// ----------------------------------------------

console.log('==========================');
console.log('FIND'); // it is great for unique values
// returns single instance - (in this case object)
// returns first mathc, if no match undefined
// great for getting unique values
const name = ['bob', 'peter', 'susy']
console.log(name.find(function(n) {
    return n === 'bob'
}));
// ----------------------------------------------
const person = people.find(function(person) {
    return person.id === 3
})
console.log(person.name); // here u can access with dot notation in FIND
const person2 = people.filter(function(person) {
    return person.id === 3
})
console.log(person2); // here u can't use dot notation directly and always get a whole array in FILTER
console.log(person2[0].name);
// ----------------------------------------------

console.log('==========================');
console.log('REDUCE');
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const total = people.reduce(function(acc, currItem) {
    console.log(`total ${acc}`);
    console.log(`current money total ${currItem.salary}`);
    acc += currItem.salary

    return acc // always return acc 
}, 0) // it is a initial value // this will now return a number only
console.log(total);