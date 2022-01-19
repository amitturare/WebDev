// default parameters - if you don't put any argument when invoking the function, it will take the value which has already been set
// hoisting - doesn't work with arrow functions

sayHi();

const john = 'John';
const peter = 'Peter';

// Regular Function
function sayHi(person = "Anna") { // this is called as default parameter
    console.log(`Hi ${person}`);
}

// Arrow Function
const sayHello = (person = "Susan") => console.log(`Hello ${person}`);

sayHello();
