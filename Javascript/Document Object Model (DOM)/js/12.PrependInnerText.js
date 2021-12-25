// prepend - as append adds the element at the end, prepend adds the element at the start
// innerText - replaces the process of creating textNode and then appending it to a element

// Create a new element
const heading = document.createElement('h2')
heading.innerText = 'Dynamic Heading h2'

// Add the elementat the start
document.body.prepend(heading)


