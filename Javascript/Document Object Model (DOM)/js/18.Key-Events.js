// keypress - when key is pressed
// keydown - when key is down
// keyup when key is released

// Access the element
const nameInput = document.getElementById('name')
// Add addEventListener
// nameInput.addEventListener('keypress', function() {
//     console.log(`You have pressed a key`);
// })

// nameInput.addEventListener('keydown', function () { // this fires when key is actually down and pressed
//     console.log(`You have pressed a key`);
// });

nameInput.addEventListener('keyup', function () { // it happens when key comes up after pressed state
    // this is used when we need to takethe written value out for use 
    console.log(nameInput.value)
});
