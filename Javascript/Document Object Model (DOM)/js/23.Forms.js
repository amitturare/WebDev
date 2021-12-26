// submit event listener
// prevent default - it stops site to not scroll up or refresh the page when clicked on submit
// how to get a value

// Select the elements
const form = document.querySelector('#form')
const name = document.querySelector('#name')
const password = document.querySelector('#password')

// Submit event listener
form.addEventListener('submit', function(event) {
    console.log('form submitted'); // it shows just for a second and goes blank again, to stop this add preventDefault

    // Add preventDefault to the event
    event.preventDefault()

    // its important to grab the values
    console.log(name.value);
    console.log(password.value);
})