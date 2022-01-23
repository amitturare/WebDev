// global name space / hard to navigate

/*
Steps for export and import
Step 1: add export keyword to the variable you want to export
Step 2: Add 'import {<variable name>} from './<file name>.js'
Step 3: In the HTML file where script src is written add 'type="module"'

Now you will be able to access the variables from any other js file
*/

// Import
import { random, people } from './3.TempFor2.js';
console.log(random);

// Select the container and the btn
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// Setup btn
btn.addEventListener('click', () => {
    showPeople();
});

// Setup the functionality
const showPeople = () => {
    container.innerHTML = people
        .map((person) => {
            const { name, job } = person;
            return `<p>${name} <strong>${job}</strong></p>`;
        })
        .join('');
};
