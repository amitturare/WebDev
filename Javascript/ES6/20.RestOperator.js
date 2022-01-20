// Rest Operator ... (same syntax as spread operator)
// Instead of splitting this gathers --> opposite of spread operator
// gathers/collects the items

// When destructuring always remember, rest operator should be the LAST ONE

// arrays
const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
// const [first] = fruit; // Gets the first element of the array
// console.log(first);

const [one, ...fruits] = fruit; // Gets the rest of the items after the one // one points to apple and fruits points to all the other elements of the array
console.log(one);
console.log(fruits);

// Rest Operator also works with OBJECTS
const person = { name: 'Peter', lastName: 'Smith', job: 'Developer' };
const { job, ...rest } = person; // Get the job property of the object person
console.log(job); // outputs job
console.log(rest); // outputs all the other properties which are remaining

console.log('=======================================================');

// We can also use REST operator to collect the parameters
const getAverage = (name, ...scores) => {
    // With rest operator over here we can gather all the elements
    // console.log(name);
    // console.log(scores);
    let total = 0;
    for (const score of scores) {
        total += score;
    }
    console.log(`Hey ${name}, your avg score is ${total / scores.length}`);
};
getAverage(person.name, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // You can add as many arguments as possible and add it into scores parameter
