// How to target list items without using any methods?

// childNodes - returns all childNodes including whitespaces which is treated as a text node
// children
// firstChild
// lastChild

const items = document.querySelector('#result')

const allChildren = items.childNodes // retunrs white spaces too
console.log(allChildren); 

const children = items.children // doesn't return white spaces
console.log(children);

const first = items.firstChild // returns the first child and it includes white spaces too which we don't want
console.log(first);

const last = items.lastChild // returns the last child and it includes white spaces too which we don't want
console.log(last);