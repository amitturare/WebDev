// currentTarget - always referes to the element to which the event handler has been attached to 
// target - identifies the specific element on which the event occured like a strong tag inside a button

const btns = document.querySelectorAll('.btn')

// Whenever we click on any of the button, the color should turn to green
btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        console.log(`currentTarget`, event.currentTarget);
        
        // this.style.color = 'blue'
        // OR
        // event.currentTarget.style.color = 'blue'


        // Lets try with target
        console.log(`target`, event.target);
        event.target.style.color = 'green' // try clicking on More Nested and see the difference 
    })
}) 