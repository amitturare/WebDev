// previousSibling
// nextSibling
// return whitespaces like when used allChildren

const first = document.querySelector('.first')
const second = first.nextSibling
console.log(second); // outputs the whitespace
console.log(second.nextSibling); // Outputs the elment with the tag

// To avoid whitespaces, you can also try using nextElementSibling or writing nextSibling twice
// console.log(first.nextSibling.nextSibling);
console.log(first.nextElementSibling); // avoids the white space and shows the item 2

// Style the item 2 with color red
first.nextElementSibling.style.color = 'red'

console.log('===========================');

const last = document.querySelector('#last')
const secondLast = last.previousElementSibling
secondLast.style.color = 'blue'
console.log(secondLast);