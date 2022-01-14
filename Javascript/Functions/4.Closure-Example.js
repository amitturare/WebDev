// Closure - Example

// EXAMPLE 1 (Run either one)
// function newAccount(name, initialBalance) {
//     let balance = initialBalance;

//     // create a inner function that shows the balance with name
//     function showBalance() {
//         console.log(`Hey ${name}, your balance is ${balance}`);
//     }
//     return showBalance;
// }

// // To just invoke it
// // newAccount('Peter', 500)();

// // Another way
// const susan = newAccount('Susan', 300);
// const bob = newAccount('Bob', 300);

// susan();
// bob();

// EXAMPLE 2
function newAccount(name, initialBalance) {
    let balance = initialBalance;

    // inner function
    function showBalance() {
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    function deposit(amount) {
        balance += amount;
        showBalance();
    }
    function withdraw(amount) {
        if (amount > balance) {
            console.log(`Hey ${name}, you don't have enough funds`);
            return; // If amount withdrawing is less than balance then above msg will be logged and at return function over
        }
        balance -= amount;
        showBalance();
    }
    return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = newAccount('John', 300);
const bob = newAccount('Bob', 300);

// still remains a closure
bob.showBalance();
john.showBalance();

// John deposits 700 more to his bank
john.deposit(700);

// Then John withdraws 100 out from his bank
john.withdraw(100);
// Try to withdraw more than funds
john.withdraw(950);
