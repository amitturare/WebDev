// Event object argument e,evt
// This gives info about triggered event
// event.typ
// event.currentTarget
// this keyword - doesn't work with arrow function
// preventDefault() - prevents default behaviour

// Select the heading and the button
const heading = document.querySelector('h1')
const btn = document.querySelector('.btn')

heading.addEventListener('click', function(event) {
    // console.log(event); // Gives a giant pointEvent with all the properties inside it
    console.log(event.currentTarget); // tells us on which the click event is set, here it is heading1
    console.log(this); // same as event.currentTarget
});
btn.addEventListener('click', function (event) {
  // console.log(event); // Gives a giant pointEvent with all the properties inside it
    console.log(event.currentTarget); // tells us on which the click event is set, here it is btn
    event.currentTarget.classList.add('blue')
    console.log(event.type); // tells the type of the event, here it is a click event
});

// Whenever we click on the link it refreshes the site and takes us to the top of the site, try to make it not scroll up or refresh
// Select the link
const link = document.querySelector('#link')

function something(event) {
    event.preventDefault();
}
link.addEventListener('click', something)