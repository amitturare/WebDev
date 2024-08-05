// Helper Function
function getElements(selection, all = false) {
    let element = document.querySelector(selection);
    if (all === true) {
        element = document.querySelectorAll(selection);
    }

    return element;
}

// Selections
const imgContainers = getElements(".img-container", true);

// Intersection Observer API
const observer = new IntersectionObserver(
    (entries) => {
        console.log(entries);

        entries.forEach((entry) => {
            entry.target.classList.toggle("active", entry.isIntersecting);
        });
    },
    {
        threshold: 0.5, // this represents the percentage of intersection between the target element and the root element. If it's 1 then 100% of the px of target element should intersect with the root element then only this will get fired.
        // Default value is 0
    }
);

imgContainers.forEach((container) => {
    observer.observe(container);
});
