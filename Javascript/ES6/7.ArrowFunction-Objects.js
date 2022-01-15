// Arrow Function
// In a regular function, 'this' points to the parent, left of the dot
// In an arrow function, 'this' refers to it's current surrounding scope

// const bob = {
//     firstName: 'bob',
//     lastName: 'smith',
//     sayName: function () {
//         console.log(this);
//         console.log(`Hey, my name is ${this.firstName}, ${this.lastName}`);
//     },
// };

// const anna = {
//     firstName: 'anna',
//     lastName: 'sanders',
//     sayName: () => {
//         console.log(this);
//         console.log(`Hey, my name is ${this.firstName}, ${this.lastName}`);
//     },
// };

// bob.sayName();
// anna.sayName();

// Observe that the object where regular function is used, 'this' points to the parent object that is bob object, whereas the object in which arrow function is used, 'this' refers to the surrounding scope that is window object. Sometimes pointing to the surrounding scope is useful

const bob = {
    firstName: 'bob',
    lastName: 'smith',
    sayName: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this); // Since here there is nothing that 'this' can point to, thus it points to the window object. Therefore, the thing we can do is use arrow function as in it 'this' points to the surrounding scope. try it!
            // After using arrow function here, 'this' points to the surrounding scope that is bob object
            console.log(`Hey, my name is ${this.firstName}, ${this.lastName}`); 
        }, 2000);
    },
};
bob.sayName();


