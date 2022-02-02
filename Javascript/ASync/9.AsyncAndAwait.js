// callbacks, promises, async/await
// Async and Await
// must have async
// awaits waits till promise is settled either resolved or rejected
// error handling - try /catch

/* SYNTAX:
async function randomFunction() {
    await
}

OR 

const randomFunction = async() => {
    await
}
*/

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.thhree');

const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
    try {
        await addColor(1000, heading1, 'red');
        await addColor(1000, heading2, 'green');
        await addColor(1000, heading3, 'blue');
    } catch (err) {
        console.log(err);
    }
});

function addColor(time, element, color) {
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        } else {
            reject(new Error('There is no such element ${element}'));
        }
    });
}
