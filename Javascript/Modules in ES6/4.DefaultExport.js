// Import
import { random, people } from './3.TempFor2.js'; // When working with named export, names need to match 
console.log(random);

// Import the function 
import showPeople from './5.TempFor4.js' // names doesn't need to match

// Import the getElement
import get from './6.TempFor5.js';

// Select the container and the btn
const container = get('.container');
const btn = get('.btn');
// const btn1 = get('.btn1'); // will throw an error which we set

// Setup btn
btn.addEventListener('click', () => {
    container.innerHTML = showPeople(people);
});


