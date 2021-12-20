// Variable Lookup
// {} - Code Block

// Local vairables can't be accessed out of their code block!

const globalNumber = 5;

function add(num1, num2) {
    const globalNumber = 20 // if this local variable is not there, the variable out of the code block will be used, if there is one then it will dominate over the one which is outside the code block
    const result = num1 + num2 + globalNumber

    function multiply() {
        const mutliplyResult = result * globalNumber // here local vairable of the parent function is being used
        console.log(mutliplyResult);
    }
    multiply()
    return result
}

console.log((add(3, 4)));