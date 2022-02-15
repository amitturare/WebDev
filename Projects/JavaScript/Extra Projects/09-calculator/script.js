// Helper Function
function getElements(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
}

// ======== Selections ========
const calculatorDisplay = getElements("h1");
const inputBtns = [...document.querySelectorAll("button")];
const clearBtn = getElements(".clear");

// Calculate first and second values depending on operator
const calculate = {
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "=": (firstNumber, secondNumber) => secondNumber,
};

// Global Variables
let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

// ======== Function ========
function sendNumberValue(number) {
    // Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If display value is 0, replace it, if not add number!
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent =
            displayValue === "0" ? number : displayValue + number;
    }
}

// Reset values and operator
function resetAll() {
    firstValue = 0;
    operatorValue = "";
    awaitingNextValue = false;
    calculatorDisplay.textContent = 0;
}

// Decimal
function addDecimal() {
    // If operator pressed, add no decimal
    if (awaitingNextValue) return;
    // If no decimal, add one. If there is one, don't add more
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Use Operator
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);

    // Prevent multiple operators
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }

    // Use firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        // console.log(firstValue, operatorValue, currentValue);
        const result = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = result;
        firstValue = result;
    }
    // Take the next value
    awaitingNextValue = true;
    operatorValue = operator;
}

// ======== Event Listeners ========
inputBtns.forEach((btn) => {
    // For numbers
    if (btn.classList.length === 0) {
        btn.addEventListener("click", () => sendNumberValue(btn.value));
    }
    // For operators
    else if (btn.classList.contains("operator")) {
        btn.addEventListener("click", () => useOperator(btn.value));
    }
    // For decimal
    else if (btn.classList.contains("decimal")) {
        btn.addEventListener("click", addDecimal);
    }
});

clearBtn.addEventListener("click", resetAll);
