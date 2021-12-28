let count = 0;

// Select the buttons and value
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.classList.contains('decrease')) {
            count--;
        } else if (e.currentTarget.classList.contains('increase')) {
            count++;
        } else if (e.currentTarget.classList.contains('reset')) {
            count = 0;
        }
        value.textContent = count

        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = ''
        }
    })
});