import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

// Helper function
const getElements = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// ==== Selections ====
const title = getElements(".section-title h1");
const btnContainer = getElements(".btn-container");

let index = 0; // Page Number
let pages = [];

// Function to display followers with buttons
const setupUI = () => {
    displayFollowers(pages[index]); 
    
    displayButtons(btnContainer, pages, index);
};

// init function, we are waiting for fetchFollowers to fetch so even this will be an async function
const init = async () => {
    const followers = await fetchFollowers(); // array of all the followers

    // Change 'loading...' to 'Pagination'
    title.textContent = "pagination";

    // Pages
    pages = paginate(followers); // Array of arrays
    // console.log(pages);

    // SetupUI
    setupUI();
};

// Configure the buttons
btnContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("page-btn")) {
        index = parseInt(e.target.dataset.index);
    }
    if (e.target.classList.contains("next-btn")) {
        index++;
        if (index > pages.length - 1) {
            index = 0;
        }
    } else if (e.target.classList.contains("prev-btn")) {
        index--;
        if (index < 0) {
            index = pages.length - 1;
        }
    }

    setupUI();
});

// Window - Load Event
window.addEventListener("load", init);
