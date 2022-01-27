/* 
JavaScript is a Synchronous language, but what does that mean: 
As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
*/

// Example
console.log(`Im first`);
console.log(`Im second`);
console.log(`Im third`);

console.log(`Im first`);
boilingWater(); // functions follow hoisting
console.log(`Im third`); 

function boilingWater() {
    console.log('boiling...');
    for (let index = 0; index < 10000; index++) {
        console.log(`still not done...`);
    }
    console.log(`Done.`);
}
