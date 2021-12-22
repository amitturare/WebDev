console.log('GETTING ELEMENT BY ID'); // IDs are unique always
// getElementById('element-ID') - helps to access the element by using its ID

// Accessing the element without storing it in the variable
document.getElementById('btn').style.backgroundColor = 'blue'
document.getElementById('btn').style.color = 'white'

// Store the element in the variable to access it anytime u want
const h1 = document.getElementById('title'); // by this we have access to our node Objeect
console.log(h1);
h1.style.color = 'red'
h1.style.backgroundColor = 'yellow'

console.log('==========================================');
console.log('GETTING ELEMENTS BY TAG NAME');
// getElementsByTagName('tagName') - helps to access the element by using their HTML tag names
// and returns a node-object (single element) or a node-list (array like object) 

// Access all the h2 tags using tag names
const headings = document.getElementsByTagName('h2')
console.log(headings); // returns a node-list (arraylike object) 
// To style the first h2, then 
headings[0].style.color = 'red' 
// console.log(`Number of h2 tags: ${headings.length}`); // outputs 2

// Acess all the items using tag names
const items = document.getElementsByTagName('li')
// Style the list item having text orange 
items[1].style.color = 'orange'
// Try to display all the elements using forEach
// items.forEach(function(item) { // Since this is not a array, ARRAY ITERATORS WON'T work here
//     console.log(item);
// });
// You can change the node-list into arrays to use the array ITERATORS
const arr = [...items]
arr.forEach(function(item) {
    console.log(item);
})
console.log(items); // Node List - HTML collection
console.log(arr); // Array

console.log('==========================================');
console.log('GETTING ELEMENTS BY CLASS NAME');
// getElementsByClassName('className') - helps to access the element by using their class names
// and returns a node-object (single element) or a node-list (array like object) 

// Access all the items which has class name special
const specialItems = document.getElementsByClassName('special')
console.log(specialItems); // returns a node list having elements with class name 'special'
// Apply blue color to trousers
specialItems[1].style.color = 'blue'