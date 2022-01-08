/* 
ES6 Classes - Syntactic Sugar
Prototypal Inheritance
*/

class Account { // CLASS
    constructor(name, initialBalance) {
        this.name = name;
        this.balance = initialBalance
    }
    // below property will be on each and every instance
    bank = 'Bank of Chicago'

    // Methods
    deposit (amount) {
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}

const john = new Account('john', 0);
console.log(john);
console.log(john.name);
console.log(john.bank);
john.deposit(500);

console.log("===================================");

const bob = new Account('bob', 700);
console.log(bob);
console.log(bob.name);
console.log(bob.bank);
bob.deposit(1000);

// function Account(name, initialBalance) { // -> Constructor Function
//     this.name = name;
//     this.balance = initialBalance;
//     this.bank = 'Bank of Chicago'; // This is assigned later
// }

// const john = new Account('john', 200);
// const bob = new Account('bob', 0);

// Account.prototype.bank = 'CHASE'; // This is already assigned
// Account.prototype.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// };