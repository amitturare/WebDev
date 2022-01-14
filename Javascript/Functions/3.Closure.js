// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closure

function outer() {
    let firstName = 'Amit';
    function inner() {
        console.log(`Hello all, my name is ${firstName}`);
    }
    return inner;
}

const result = outer(); // returns the function inner into the variable result
console.log(result); // logs the whole function
result();

// outer()(); // Shorthand to invoke the inner function
