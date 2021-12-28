const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    document.querySelector('main').style.backgroundColor = hexColor;
    color.textContent = hexColor
    color.style.color = hexColor
})

// Setup a function to generate random numbers till 15
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}