// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h2')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    console.log('You have clicked the button');
})
btn.addEventListener('mousedown', function() {
    console.log('You mouse DOWN on the button');
})
btn.addEventListener('mouseup', function() {
    console.log('You mouse UP on the button');
})

// Therefore, down > up > click

heading.addEventListener('mouseenter', function() { // When u hover over the element callback function will be called
    heading.classList.add('blue')
})
heading.addEventListener('mouseleave', function () { // When u r done hovering over the element callback function will be called
    heading.classList.remove('blue');
});