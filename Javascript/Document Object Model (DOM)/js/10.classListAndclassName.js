// className - allows us to check for the className and change or add className
// classList

// Access all the three IDs
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// Check the name of the class first element has
const classValue = first.className 
// console.log(classValue); // outputs colors

// Add class name to the second elemnt
second.className = 'colors' 
// console.log(second.className); // outputs colors

// Add both the classes colors and text to the third element
third.className = 'colors text'
// OR
third.classList.add('colors', 'text')
// console.log(third.className); // outputs colors text
// console.log(third.classList); // outputs DOMTokenList['colors', 'text']

// Remove class colors from the third element
third.classList.remove('colors')
// console.log(third.classList); // outputs DOMTokenList['text']

// We can also check if some class element has or not
let result = third.classList.contains('text') // ouputs boolean
if (result) {
    console.log('text class exists');
} else {
    console.log("text class doesn't exist");
}


