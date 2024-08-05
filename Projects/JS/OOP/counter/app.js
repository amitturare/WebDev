// Setup a function to get the element
function getElement(selection) {
    const element = document.querySelector(selection);
    // if element exists, return it or else give out an error
    if (element) {
        return element;
    }
    throw new Error(
        `Please check "$${selection}" selector, no such selector exists`
    );
}

// Using Constructor Function
// function Counter(element, value) {
//     this.counter = element;
//     this.value = value;

//     // Selecting the specific btns of the counters instead of selecting both of them together
//     this.resetBtn = element.querySelector('.reset');
//     this.increaseBtn = element.querySelector('.increase');
//     this.decreaseBtn = element.querySelector('.decrease');

//     // Select the value now
//     this.valueDOM = element.querySelector('.value');
//     this.valueDOM.textContent = this.value;

//     // Bind this to all functions
//     this.increase = this.increase.bind(this);
//     this.decrease = this.decrease.bind(this);
//     this.reset = this.reset.bind(this);

//     // Attach the functionality to the button
//     this.increaseBtn.addEventListener('click', this.increase);
//     this.decreaseBtn.addEventListener('click', this.decrease);
//     this.resetBtn.addEventListener('click', this.reset);
// }

// // Setup the functionality
// Counter.prototype.increase = function () {
//     this.value++;
//     this.valueDOM.textContent = this.value;
// };
// Counter.prototype.decrease = function () {
//     this.value--;
//     this.valueDOM.textContent = this.value;
// };
// Counter.prototype.reset = function () {
//     this.value = 0;
//     this.valueDOM.textContent = this.value;
// };

// const firstCounter = new Counter(getElement('.first-counter'), 100);
// const secondCounter = new Counter(getElement('.second-counter'), 200);

// Using Class Syntax
class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;

        // Selecting the specific btns of the counters instead of selecting both of them together
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');

        // Select the value now
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        // Bind this to all functions
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        // Attach the functionality to the button
        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }
    // Methods
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }
    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
