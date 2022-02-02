// allSettled doesn't care about resolve and reject, it runs all promises
// all only shows when something is resolved

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

Promise.allSettled([promise1, promise2])
    .then((data) => console.log(data))
    .catch((err) => console.log('something failed', err));
