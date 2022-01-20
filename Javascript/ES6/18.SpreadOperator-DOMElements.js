// Spread Operator ...
// Allows an iterable to spread/expand individually inside receiver
// Split into single items and copies them
// Spread Operator for DOM Elements

// Select all h1s and result
const headings = document.querySelectorAll('h1'); // nodeLists
const result = document.querySelector('#result');

// When headings is a nodeList
// const ans = headings.map(item => console.log(item)) // Gives error because array iterators doesn't work on nodeLists

// Convert the heading into an array and try again
const ans = [...headings].map((item) => `${item.textContent}`).join(' ');

result.innerHTML = ans;