/* 
A promise is an object that may produce a single value in the future either a resolved value, or a reason that it's not resolved (rejected).

A promise maybe one of 3 possible states
1. fulfilled (resolved)
2. rejected
3. pending  
*/


// Basic Promise
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Stuff worked");
//     } else {
//         reject("Error, it broke");
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "Hello");
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "All");
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Is it me you are looking for?");
// });

// Promise.all([promise, promise2, promise3, promise4]).then(values => console.log(values));

// promise
//     .then((result) => result + "!")
//     .then((result2) => result2 + "?")
//     .catch((err) => console.log(err))
//     .then((result3) => console.log(result3 + "!"));

// EXAMPLE
const urls = [
    "https://jsonplaceholdser.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
    urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
    })
)
    .then((result) => {
        console.log(result[0]);
        console.log(result[1]);
        console.log(result[2]);
    })
    .catch(() => console.log('Error!'));

// fetch(apiURL) returns a promise
