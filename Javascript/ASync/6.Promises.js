// callbacks, promises, async/await
// Promises - builtin constructor which has 3 types which are == 1.pending, 2.resolved, 3.rejected
// if rejected then catch that is pass another callback
// if resolved then use 'then' and pass another callback

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

// Configure btn to get red on h1 after 1 sec, then after 1 sec of that h2 should get green and after 1 sec of that again h3 should get blue
btn.addEventListener('click', () => {});

const promise = new Promise((resolve, reject) => {
    // you have to pass two more functions as parameters
    let value = false;
    if (value) {
        resolve('hey value is true');
    } else {
        reject(`There was an error, value is false`);
    }
});
// console.log(promise); // Outputs: Promise is pending, when no callback is set
// console.log(promise); // Outputs: Promise fulfilled: hey value is true, when value is true

// If promise is resolved we can do then and, if promise is rejected we can do catch
promise.then((data) => {
    // data represents to the string 'hey value is true'
    console.log(data);
}).catch((error) => {
    console.log(error);
});
