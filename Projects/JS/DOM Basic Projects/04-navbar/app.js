// Select the toggle button 
const toggleBtn = document.querySelector('.nav-toggle')

// Select the unordered list
const list = document.querySelector('.links')

// Add functionality to the button
toggleBtn.addEventListener('click', function() {
    // if (!list.classList.contains('show-links')) {
    //     list.classList.add('show-links')
    // } else {
    //     list.classList.remove('show-links');
    // }
    list.classList.toggle('show-links') // toggle can replace those above 5 lines
})  