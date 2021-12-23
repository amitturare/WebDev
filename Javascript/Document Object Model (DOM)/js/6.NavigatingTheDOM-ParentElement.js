// parentElement

const heading = document.querySelector('h2')

console.log(heading.parentElement); // Ouputs its parent element that is div with class second

console.log(heading.parentElement.parentElement); // Ouputs parent element of the div with class second 

console.log(heading.parentElement.parentElement.parentElement); // Ouputs parent element of the div with id result

console.log(heading.parentElement.parentElement.parentElement.parentElement); // Ouputs parent element of the body

// Style the parent element of the heading
heading.parentElement.style.color = 'red'