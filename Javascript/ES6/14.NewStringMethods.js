// New String Methods
// startsWith(), endsWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-AMIT-TURARE';

console.log('======== startsWith() ========');
// startsWith() - is case sensitive
console.log(person.startsWith('e')); // false
console.log(person.startsWith('p')); // false
console.log(person.startsWith('P')); // false
console.log(employee.startsWith('EMP', 6)); // It is checking whether EMP is starting from the 6th position or not --> true

console.log('======== endsWith() ========');
// endsWith() - is case sensitive
console.log(person.endsWith('ith')); // true
console.log(manager.endsWith('TuRARE')); // false
console.log(manager.endsWith('MAN', 9)); // It is checking whether first 9 characters are ending with MAN or not --> true

console.log('======== includes() ========');
// includes() - is case sensitive
console.log(employee.includes('EMP')); // true
console.log(employee.includes('Peter')); // false

console.log('======== repeat() ========');
// repeat()
const multiplyPeople = (person, amount = 5) => person.repeat(amount);
console.log(multiplyPeople(person + " "));
