// Helper Function
function getElements(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
}

// ==== Selections ====
const container = getElements(".container");

// ==== Event Listeners ====
container.addEventListener("click", (e) => {
    const text = e.target.nextElementSibling;

    if (e.target.classList.contains("heading")) {
        text.classList.toggle("show");
    } else return;
});
