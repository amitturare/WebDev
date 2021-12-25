// This allows to select dynamic elements - these are the elements which we create using JS
// event propagation - this determines in which order the elements receive the event
// event bubbling - fires the target first and then parent till root if specified -- default
// even capturing - first calls the parents then child and then later after few more childs (if there are any) target gets fired 

// Select container and list items
const container = document.querySelector('.container')
const list = document.querySelector('.list-items')

// Setup callback function
function showBubbling(e) {
    console.log('current target', e.currentTarget);
    console.log('target', e.target);
    if (e.target.classList.contains('link')) {
        console.log(`You clicked on a link`);
    }
}

// You can stop event bubbling as it is by default
function stopPropagation(e) {
    console.log('you clicked on a list');
    e.stopPropagation();
}

// Setup event listener
// list.addEventListener('click', showBubbling)
// container.addEventListener('click', showBubbling)
// Observe that if list-items and container are the current target then actual link is the target

// list.addEventListener('click', stopPropagation);
// Now observe the propagation has stopped and its only target is 

// For event capturing
list.addEventListener('click', showBubbling, {capture: true})
container.addEventListener('click', showBubbling, {capture: true})