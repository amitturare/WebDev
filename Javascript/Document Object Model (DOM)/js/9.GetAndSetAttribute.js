// HTML tags has attributes, with JS we can get those attributes and set those attributes

// getAttribute()
// setAttribute('what type of attribute', 'attribute name')

const first = document.querySelector('.first')
const classValue = first.getAttribute('class') // Tells us what class the element has
console.log(classValue); 
const idValue = first.getAttribute('id') // Tells us what ID the element has
console.log(idValue);

const link = document.querySelector('#link')
const showLink = link.getAttribute('href') // Tells us what is href is set to
console.log(showLink);

console.log('===============================');
// Try to set attribute to the last item

const last = first.nextElementSibling
last.setAttribute('class', 'last') 
last.textContent = 'I now have a class of last'

