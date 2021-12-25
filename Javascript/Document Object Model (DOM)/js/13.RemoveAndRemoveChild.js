// remove
// removeChild

// Select the result id
const result = document.querySelector('#result')
// result.remove() // this remove the whole div having id result

// Try to remove the second heading only
const heading = result.querySelector('#first') 
result.removeChild(heading);
