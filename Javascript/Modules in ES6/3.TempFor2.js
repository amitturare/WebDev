/*
Steps for export and import
Step 1: add export keyword to the variable you want to export
Step 2: Add 'import {<variable name>} from './<file name>.js'
Step 3: In the HTML file where script src is written add 'type="module"'

Now you will be able to access the variables from any other js file
*/

export const random = 'Text from another JS file'; // the export keyword will make it global to other files, but to access it we will need to import it

export const people = [
    { name: 'Peter', job: 'Developer' },
    { name: 'Susan', job: 'Designer' },
    { name: 'Anna', job: 'Boss' },
];
