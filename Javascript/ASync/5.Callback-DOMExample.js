// callbacks, promises, async/await

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

// Configure btn to get red on h1 after 1 sec, then after 1 sec of that h2 should get green and after 1 sec of that again h3 should get blue 
btn.addEventListener('click', () => {
    setTimeout(() => {
        heading1.style.color = 'red';
        setTimeout(() => {
            heading2.style.color = 'green';
            setTimeout(() => {
                heading3.style.color = 'blue';
            }, 1000);
        }, 1000);
    }, 1000);
});

// This becomes confusing when the code is actually very big. 'promise' can make it a bit better