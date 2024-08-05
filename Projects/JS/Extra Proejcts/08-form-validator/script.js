// Helper Function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// ==== Selections ====
const form = getElements("#form");
const password1El = getElements("#password1");
const password2El = getElements("#password2");

const messageContainer = getElements(".message-container");
const message = getElements("#message");

// Global Variable
let isValid = false;
let passwordsMatch = false;

// ==== processFormData ====
function updateMessage(color) {
    message.style.color = color;
    messageContainer.style.borderColor = color;
}

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();

    // Update the DOM
    if (!isValid) {
        message.textContent = "Please fill out all fields.";
        updateMessage("red");
        return;
    }

    // For passwords
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    } else {
        passwordsMatch = false;
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        message.textContent = "Make sure passwords match.";
        updateMessage("red");
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = "Successfully Registered!";
        updateMessage("green");

        // Store Form Data
        storeFormData();
    }
}
function processFormData(e) {
    // Prevent Default to stop refreshing
    e.preventDefault();

    // Validate Form
    validateForm();
}

// ==== Store Form Data ====
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    console.log(user);
}

// ==== Event Listeners ====
form.addEventListener("submit", processFormData);
