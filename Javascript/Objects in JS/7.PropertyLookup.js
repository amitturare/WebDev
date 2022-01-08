/*
Property Lookup
If child does not have ask parent
Everything in Javascript is an Object 
*/

function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.bank = 'Bank of Chicago'; // This is assigned later
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

Account.prototype.bank = 'CHASE'; // This is already assigned
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

// john.deposit(300);

// Try to look for the bank
console.log(john.bank); // Outputs: Bank of Chicago... this.bank is given more preference than prototype.bank

// Log empty object and array
// In the output under this there will be proto section which will have all the properties that you can apply on object or array
console.log([]); 
console.log({});