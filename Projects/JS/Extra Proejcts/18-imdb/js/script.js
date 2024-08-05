/* 
TODO: 
0. Home Page
1. Modal and trailer in it
2. Sorting 
3. Light Mode, maybe.
5. If search.value is not available then show home page
*/

// ==== Imports ==== //
import { getElement } from "./helperFunctions.js";
import { getData, getMoviesData, getShowsData } from "./getData.js";

// ==== Selections ==== //
const logo = getElement("#logo");
const trending = getElement("#trending");
const movies = getElement("#movies");
const shows = getElement("#shows");
const home = getElement("#home");

const carouselButtons = document.querySelectorAll("[data-type]");
const slides = getElement(".carousel ul");
const activeSlide = getElement("[data-active]");

const form = getElement("#search-box");
const searchBox = getElement("#search");

const container = getElement("#container");

// ==== Links ==== //
const APIKey = "0fb7f7f773d1e2882602ab49a68c927d";

// Trending
const trendingURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`;

// Movies
const moviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`;

// Shows
const showsURL = `https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}`;

// Search
const searchMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}`;
// const searchTvURL = `https://api.themoviedb.org/3/search/tv?api_key=${APIKey}`;

// ==== Event Listeners ==== //
logo.addEventListener("click", () => {
    location.reload();
});
home.addEventListener("click", () => {
    location.reload();
});

form.addEventListener("submit", (e) => {
    // PD
    e.preventDefault();

    const rawSearchTerm = searchBox.value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");

    if (searchTerm) {
        trending.classList.remove("highlighted");
        movies.classList.remove("highlighted");
        shows.classList.remove("highlighted");

        getMoviesData(searchMovieURL + `&query=${searchTerm}`);

        searchBox.value = "";
    }
});

carouselButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const offset = btn.dataset.type === "next" ? 1 : -1;

        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        } else if (newIndex >= slides.children.length) {
            newIndex = 0;
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

trending.addEventListener("click", () => {
    trending.classList.add("highlighted");
    movies.classList.remove("highlighted");
    shows.classList.remove("highlighted");
    home.classList.remove("highlighted");
    container.innerHTML = "";
    getData(trendingURL);
});

movies.addEventListener("click", () => {
    movies.classList.add("highlighted");
    trending.classList.remove("highlighted");
    shows.classList.remove("highlighted");
    home.classList.remove("highlighted");
    container.innerHTML = "";
    getMoviesData(moviesURL);
});

shows.addEventListener("click", () => {
    shows.classList.add("highlighted");
    trending.classList.remove("highlighted");
    movies.classList.remove("highlighted");
    home.classList.remove("highlighted");
    container.innerHTML = "";
    getShowsData(showsURL);
});
