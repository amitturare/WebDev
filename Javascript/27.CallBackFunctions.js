// Callback Functions, High Order Functions, Functions as First Class Objects/Citizens

// FUNCTIONS in JS are first class objects - they can be stored in a variable (expression) or passed as an argurment to another function or return from the function (closure).

// HIGH ORDER FUNCTIONS accepts another function as an argument or returns another function as a result.
// CALLBACK FUNCTIONS passed to a another function as an argument and executed inside the function.


// function greetMorning(name) {
//     const myName = 'Amit'
//     console.log(`Good moirning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//     const myName = 'Amit'
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
// function greetEvening(name) {
//     const myName = 'Amit'
//     console.log(`Good evening ${name}, my name is ${myName}`);
// }
// 
// greetMorning('bobo')
// greetAfternoon('peter')
// greetEvening('anna')
// we have repeated the functions, which is not good as a coder
// to avoid this repeatation, let's see CALLBACK functions

function morning(name) { // this will act as a callback function 
    return `Good morning ${name.toUpperCase()}`
}
function afternoon(name) { // this will act as a callback function 
    return `Good afternoon ${name.repeat(2)}`
}
function evening(name) { // this will act as a callback function 
    return `Good evening ${name.repeat(4)}`
}

function greet(name, cb) { // HIGH ORDER FUNCTION, as it is accepting a function // cb stands for callback function which we are passing in the greet
    const myName = 'Amit'
    console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning)
greet('parker', afternoon)