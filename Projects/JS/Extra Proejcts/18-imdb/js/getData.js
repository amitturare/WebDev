// ==== Imports ==== //
import { getElement } from "./helperFunctions.js";
import {
    createCards,
    createMovieCards,
    createShowCards,
} from "./createCards.js";

// ==== Selections ==== //
const logo = getElement("#logo");
const paginationControls = getElement(".pagination");
const prev = getElement("#prev");
const current = getElement("#current-page");
const next = getElement("#next");

const trending = getElement("#trending");
const movies = getElement("#movies");
const shows = getElement("#shows");

// ==== Global Variables ==== //
let nextPage;
let prevPage;
let totalPages;
let currentPage;
let lastTrendingURL = ``;
let lastMoviesURL = ``;
let lastShowsURL = ``;

// ==== API ==== //
export async function getData(url) {
    lastTrendingURL = url;

    const response = await fetch(url);
    const data = await response.json();

    // For pagination
    currentPage = data.page;
    totalPages = data.total_pages;

    logo.scrollIntoView({ behavior: "smooth" });

    // Update Page Status
    current.textContent = `${currentPage} / ${totalPages}`;

    // Create Cards
    createCards(data.results);

    // Show pagination control
    paginationControls.style.display = "flex";
}

export async function getMoviesData(url) {
    lastMoviesURL = url;

    const response = await fetch(url);
    const data = await response.json();

    // For pagination
    currentPage = data.page;
    totalPages = data.total_pages;

    logo.scrollIntoView({ behavior: "smooth" });

    // Update Page Status
    current.textContent = `${currentPage} / ${totalPages}`;

    // Create Cards
    createMovieCards(data.results);

    // Show pagination control
    paginationControls.style.display = "flex";
}

export async function getShowsData(url) {
    lastShowsURL = url;

    const response = await fetch(url);
    const data = await response.json();

    // For pagination
    currentPage = data.page;
    totalPages = data.total_pages;

    logo.scrollIntoView({ behavior: "smooth" });

    // Update Page Status
    current.textContent = `${currentPage} / ${totalPages}`;

    // Create Cards
    createShowCards(data.results);

    // Show pagination control
    paginationControls.style.display = "flex";
}

// Pagination - getPage
function getPage(pageNumber) {
    lastTrendingURL = lastTrendingURL + `&page=${pageNumber}`;
    lastMoviesURL = lastMoviesURL + `&page=${pageNumber}`;
    lastShowsURL = lastShowsURL + `&page=${pageNumber}`;

    if (trending.classList.contains("highlighted")) {
        getData(lastTrendingURL);
    }
    if (movies.classList.contains("highlighted")) {
        getMoviesData(lastMoviesURL);
    }
    if (shows.classList.contains("highlighted")) {
        getShowsData(lastShowsURL);
    }
}

// ==== Event Listeners ==== //
next.addEventListener("click", () => {
    nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
        getPage(nextPage);
    } else {
        getPage(1);
    }
});
prev.addEventListener("click", () => {
    prevPage = currentPage - 1;
    if (prevPage > 0) {
        getPage(prevPage);
    } else {
        getPage(totalPages);
    }
});
