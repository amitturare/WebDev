// Array.from and Array.of - they are not on the prototype of array object

// .from - return Array object from any object with a length property or an iterable object
// .from turns array-like/ish into array, that is string, nodeList, Set

// Working with DOM elements
const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

let newText = Array.from(p); // Turned the nodeList into array

// Check the type of the newText
// console.log(newText); // Its an array

newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');
result.innerHTML = newText;

// Short Hand (Always remember the second argument during Array.from is the map method)
second.innerHTML = Array.from(
    document.querySelectorAll('p'),
    (item) => `<span>${item.textContent}</span>`
).join(' ');
