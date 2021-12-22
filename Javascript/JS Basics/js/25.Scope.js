// GLOBAL SCOPE vs LOCAL SCOPE
// any variable outside code block {} is said to be in GLOBAL SCOPE
// can be access anywhere in the program
// Be careful of name collision and modify by mistake
console.log('=============================');
console.log(`GLOBAL SCOPE`);

let name = 'bob' // this is a global variable, you can modify it anywhere 
name = 'peter'

function calculate() {
    // some code...
    console.log(name);
    name = 'orange'
    
    function inner() {
        name = 'inner name value'
        console.log(`this is from inner function ${name}`);
    }
    inner()
}
calculate()

if (true) {
    console.log(name);
    name = 'pants'
}
console.log(`my name is ${name}`);


console.log('=============================');
console.log(`LOCAL SCOPE`);
// Variables which are inside the code block {} are LOCAL SCOPE
// you cannot access from outside code blocks
// if - NOT VAR

let firstName = 'bob' // this is a global variable, you can modify it anywhere 

function calculateAgain() {
    let name = 'john' // this is a local variable, it doesnt modify value which is outside the code block
    const age = 25 // local variable
    
    // To make a variable global inside code block, don't write const, let or var before the name of the variable 
    something = 'this turns into global variable'; 
}
calculateAgain()
// console.log(age); // OUTPUTS: error - age is not defined
console.log(something); // this will give output only when the parent function of it is invoked

if (true) {
    let name = 'peter' // even this is a local varaible
}
console.log(`my firstName is ${firstName}`);
