// Helper Function
const getElement = (selection) => {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
};

// ==== Imports ==== //
import {
    setSearchFocus,
    getMaxChars,
    showClearTextButton,
    clearText,
} from "./searchBar.js";
import { processData, updateDOM, updateStats } from "./searchResults.js";

// ==== Selections ==== //
const form = getElement("#search-bar");
const search = getElement("#search");
const searchResults = getElement("#search-results");
const stats = getElement("#stats");
const clearBtn = getElement("#clear");
const logo = getElement(".logo");

let resultsArr = [];

// ==== Submit Search ==== //
function submitSearch(e) {
    // PD
    e.preventDefault();

    // Reset search results
    searchResults.innerHTML = "";

    // Fetch Data
    getData();

    // Set the focus
    setSearchFocus();
}

async function getData() {
    const rawSearchTerm = search.value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");

    // Clear Stats line
    stats.textContent = "";

    // If searchTerm is empty
    if (searchTerm === "") return;

    // Else 👇
    // Set max char limit on the search
    const maxChars = getMaxChars();
    const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchString = encodeURI(rawSearchString);

    try {
        const response = await fetch(searchString);
        const data = await response.json();

        if (data.hasOwnProperty("query")) {
            resultsArr = processData(data.query.pages);
        }

        // Check if resultsArr is has some content or not
        if (resultsArr.length) {
            // Update DOM
            updateDOM(resultsArr, searchResults);
        }
        // Update Stats
        updateStats(resultsArr.length, stats);
    } catch (err) {
        console.log(err);
    }
}

// ==== Listeners ==== //
form.addEventListener("submit", submitSearch);

search.addEventListener("input", showClearTextButton);

clearBtn.addEventListener("click", clearText);

logo.addEventListener("click", () => location.reload());
