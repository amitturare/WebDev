// find - gets specific item.
// findIndex - get's index of the item
// every - returns boolean if every item in the array satisfies the criteria
// some - returns boolean if at least one item satisfies the criteria

const people = [
    { id: 1, name: 'Susan' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Anna' },
];
const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// OLD Style
// const anna = people.filter((person) => person.name === 'Anna'); // filter returns an array
// console.log(anna);
// console.log(anna[0]);
// console.log(anna[0].name);
// console.log(anna[0].id);

// Using find instead
const anna = people.find((person) => person.name === 'Anna'); // find returns the specific item
console.log(anna);
console.log(anna.name);
console.log(anna.id);

// findIndex
// What if you want to remove the item with an id of 3 from the people array
const person = people.findIndex((item) => item.id === 3); // Outputs index number 2
const newPeople = people.slice(0, 2);
console.log(newPeople);

// every
// Check no grade should be equal to C
const allGoodGrades = grades.every((item) => item !== 'C'); // false because there is one C
console.log(allGoodGrades);

// some
// Check if there is at least one C
const oneBadGrade = grades.some(item => item === 'C')
console.log(oneBadGrade);