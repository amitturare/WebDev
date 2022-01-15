const author = 'Some Author';
const statement = 'Some Statement';

// const quote = `Here is ${statement} by ${author} and it couldn't be more true.`;
// console.log(quote);

// const result = document.getElementById('result');
// result.innerHTML = quote

// Setup a FUNCTION to add strong tag
function highlight(text, ...vars) {
    // you can only write arg1, arg2 but if there are more than 2, then write ...vars, which collects rest of the variables
    const awesomeText = text.map(function (item, index) {
        return `${item} <strong class="blue"> ${vars[index] || ""} </strong>`;
    });
    return awesomeText.join('');
}

const quote = highlight`Here is ${statement} by ${author} and it couldn't be more true.`;
console.log(quote);

const result = document.getElementById('result');
result.innerHTML = quote;
