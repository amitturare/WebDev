// Blue Print
// Factory Functions

// const john = {
//     firstName: 'john',
//     lastName: 'anderson',
//     fullName: function () {
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     },
// };

// const bob = {
//     firstName: 'peter',
//     lastName: 'sanders',
//     fullName: function () {
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     },
// };
// The above way u have to make persons individually and work on it but we can make a function to avoid this

function createPerson(firstName, lastName) { // -> factory function
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(`My full name is ${this.firstName} ${this.lastName} amd I love JS`);
        },
    };
}

const amit = createPerson('amit', 'turare');
amit.fullName();

const john = createPerson('john', 'sanders');
john.fullName();

const susy = createPerson('susy', 'apple');
susy.fullName();

