// CSS

const random = document.querySelector('.random')
console.log(random.style); // Shows all the styles we can apply to random

// random.style.backgroundColor = 'blue'
// random.style.color = 'white'
// random.style.fontSize = '3rem'
// random.style.textTransform = 'capitalize'

// Writing above lines takes a lot of time, try using classList to add the class having all the styles to the element
random.classList.add('title')
