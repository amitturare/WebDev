// 'this' keyword
// points to the left of the dot

const amit = {
    firstName: 'amit',
    lastName: 'turare',
    fullName: function () {
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
};

const bob = {
    firstName: 'bob',
    lastName: 'sanders',
    fullName: function () {
        console.log(`My full name is Bob Sanders`);
    },
};

amit.fullName();
bob.fullName();

/*
In regular functions (not arrow) 'this' is determined by 'HOW' a function is invoked (left of .)  

default to global that is - window
arrow functions - pump the breaks
*/

// console.log(this); // -> always points to the window

function showThis() {
    console.log(this);
}
const john = {
    name: 'john',
    showThis: showThis,
};
const bobo = {
    name: 'bobo',
    showThis: showThis,
};

john.showThis(); // -> points to the john object
bobo.showThis(); // -> points to the bobo object
showThis(); // As it is invoked independently, it will point toward the window

// Select both the btns
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

// Configure both btns
btn1.addEventListener('click', showThis); // -> points toward btn 1
btn2.addEventListener('click', showThis); // -> points toward btn 2
btn2.addEventListener('click', function () {
    showThis() // points toward global function - window
});
