// Select modal-btn, modal-overlay and close-btn
const modalBtn = document.querySelector('.modal-btn')
const overlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

// Configure modalBtn
modalBtn.addEventListener('click', function() {
    overlay.classList.add('open-modal');
})

// Configure closeBtn
closeBtn.addEventListener('click', function() {
    overlay.classList.remove('open-modal');
})

