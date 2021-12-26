// allows select dynamic elements
// event propagation - it is the order in which the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
let heading = document.querySelector('.heading')

// Add elements dynamically and set a click event on it 
btn.addEventListener('click', function() {
    const element = document.createElement('h1')
    element.classList.add('heading')
    element.textContent = `i'm inside the container`
    container.appendChild(element)
})


// Setup callback function
function sayHello() {
    console.log(`Hello there!`);
}
// heading.addEventListener('click', sayHello)
// Observe that when clicking on heading it gives error, it is happeneing coz it is not bubbling up

container.addEventListener('click', function(e) {
    console.log(`currentTarget`, e.currentTarget);
    console.log(`target`, e.target);
    if (e.target.classList.contains('heading')) {
        console.log('hello there');
    }
})