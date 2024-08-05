const colors = ["rgb(256, 96, 46)", "red", "rgba(13,162,204)", "rgb(110,184,25)"];

const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    // Get a random number between 0 and 3
    const randomNumber = getRandomNumber()  
    document.querySelector('main').style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber];
})

// Setup a function to produce a randomNumber
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
