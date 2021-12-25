// createElement('element')
// createTextNode('text content)
// element.appendChild(childElement)

// We can also insert our dynamic element before 
// insertBefore('element', 'location')

// We can also replace child
// replaceChild('new', 'old')

// Select the div having id result
const result = document.querySelector('#result')
// Select the heading having class red
const first = document.querySelector('.red')

// Create empty element 
const bodyDiv = document.createElement('div')
// Create text node
const text = document.createTextNode('a simple body div')

// Place text unside the bodyDiv
bodyDiv.appendChild(text) // adds text element inside bodyDiv
// document.body.appendChild(bodyDiv) // adds bodyDiv inside body and after it
// Try using insertBefore
document.body.insertBefore(bodyDiv, result) // adds bodyDiv before the  result div

// Create a heading
const heading = document.createElement('h2')
const headingText = document.createTextNode('Dynamic Heading 2')
// Appen headingText to heading
heading.appendChild(headingText)
// Now add class heading
heading.classList.add('blue')
// Append heading inside the result
// result.appendChild(heading)
// Try using insertBefore 
result.insertBefore(heading, first)

// Create a new heading
const smallHeading = document.createElement('h6')
const smallHeadingText = document.createTextNode(`I'm a small heading`)
// Add class red to it
smallHeading.classList.add('red')
// Add the text to the heading
smallHeading.appendChild(smallHeadingText)
document.body.replaceChild(smallHeading, bodyDiv) // Replaces bodyDiv with smallheading

console.log(result.children);