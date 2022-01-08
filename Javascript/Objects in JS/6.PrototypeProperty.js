/* 
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that easy constructor function/class has a prototype property that is shared by every inheritance of the constructor/class. So any properties and methods or prototype can be accessed by every instance. Prototype property returns a object.
*/

function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

console.log(Account.prototype);

// To add property on the proto
Account.prototype.bankName = 'CHASE'; // this doesn't matter because bank is going to be same all the time
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
john.deposit(300);
bob.deposit(1000)


console.log(john.bankName);
console.log(bob);
