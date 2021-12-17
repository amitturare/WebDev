// Loops
// repeated run a block of code while the condition is true

console.log('WHILE LOOP');
// you can't use const here as value of i is going to increase and not just stay constant
let i = 0
while (i < 10) {
    console.log(i);
    i++
}

let amt = 10
while (amt >= 0) {
    console.log(amt);
    amt--;
}

console.log('=========================');

console.log('DO WHILE LOOP');
// same as above but here we write code block first and then condition at the end
// thus it runs atleast once
let n = 6;
do {
    console.log(n);
    n++
} while (n < 5); // 6 > 5, still it runs once then it checks the condition and doesn't run it anymore

console.log('=========================');

console.log('FOR LOOP');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}