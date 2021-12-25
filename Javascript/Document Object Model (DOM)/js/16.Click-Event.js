// select element
// addEventListener('what event', 'callback function, can be anonymous')
// what event, what to do

// Select button and listen the click events on it to do soemthign
const btn = document.querySelector('.btn')

// btn.addEventListener('click', function() {
//     document.querySelector('h2').classList.add('red') // Here h2 tag is selected and on it red class is added
// })

// Another way: 
// function changeColor() {
//     document.querySelector('h2').classList.add('red')
// }
// btn.addEventListener('click', changeColor);

// Make the btn like when u press it, h2 should get the class and when u click it again, h2 shouldn't have the class
function changeColors() {
    let heading = document.querySelector('h2')
    let hasClass = heading.classList.contains('red')

    if (hasClass) {
        heading.classList.remove('red');
    } else {
        heading.classList.add('red');
    }
}
btn.addEventListener('click', changeColors) // Never invoke the call back function, keep it as reference