// ==== Imports ==== //
import { getElement } from "./helperFunctions.js";

// ==== Selections ==== //
const container = getElement("#container");

// ==== Create Cards ==== //
export function createCards(arr) {
    const HTMLString = arr
        .map((item) => {
            let { title, overview, adult, id } = item;
            const img = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
            let fType;
            let year;

            // For fType and Year
            if (item.media_type == "tv") {
                fType = "Show";
                year = item.first_air_date;
            }
            if (item.media_type == "movie") {
                fType = "Movie";
                year = item.release_date;
            }

            const fYear = parseInt(year.substr(0, 4));
            const fMonth = parseInt(year.substr(5, 2));

            const dDay = new Date();

            if (dDay.getFullYear() === fYear) {
                if (fMonth > dDay.getMonth() + 1) {
                    year = "Coming Soon";
                }
            }

            return `
            <div class="movie-card" id="${id}" data-type="${fType}">
                <img src="${img}" id="poster" alt="Poster not available!">
                <div class="overlay"></div>
                
                <div class="know-more">
                    <h3>${!title ? item.name : title}</h3>
                    <div class="overview">
                        <p>${overview}<p>
                    </div>

                    <div class="extra-details">
                        <span class="year" style="margin-right: ${
                            year == "Coming Soon" ? "0.5rem" : "1rem"
                        };">${
                year == "Coming Soon" ? year : year.substr(0, 4)
            }</span>
                        <span class="media-type">${fType}</span>
                        <span class="adult" style="margin-left: ${
                            year == "Coming Soon" ? "0.75rem" : "1.25rem"
                        };"><i class="fa-solid fa-${
                adult ? "a" : "u"
            }"></i></span>
                    </div>
                </div>
            </div>
            `;
        })
        .join("");

    container.innerHTML = HTMLString;
}

export function createMovieCards(arr) {
    container.innerHTML = "";
    const HTMLString = arr
        .map((item) => {
            const { title, overview, adult, id } = item;
            const img = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
            const year = item.release_date;
            const fType = "Movie";
            const fYear = parseInt(year.substr(0, 4));
            const fMonth = parseInt(year.substr(5, 2));

            const dDay = new Date();

            if (dDay.getFullYear() === fYear) {
                if (fMonth > dDay.getMonth() + 1) {
                    year = "Coming Soon";
                }
            }

            return `
            <div class="movie-card" id="${id}" data-type="${fType}">
                <img src="${img}" id="poster" alt="Poster not available!">
                <div class="overlay"></div>
                
                <div class="know-more">
                    <h3>${title}</h3>
                    <div class="overview">
                        <p>${overview}<p>
                    </div>

                    <div class="extra-details">
                        <span class="year" style="margin-right: ${
                            year == "Coming Soon" ? "0.5rem" : "1rem"
                        };">${
                year == "Coming Soon" ? year : year.substr(0, 4)
            }</span>
                        <span class="media-type">${fType}</span>
                        <span class="adult" style="margin-left: ${
                            year == "Coming Soon" ? "0.5rem" : "1.25rem"
                        };"><i class="fa-solid fa-${
                adult ? "a" : "u"
            }"></i></span>
                    </div>
                </div>
            </div>
            `;
        })
        .join("");

    // <span class="rating" style="display:${year == "Coming Soon" ? 'none' : 'visible'};">${vote_average}<span></span>
    container.innerHTML = HTMLString;
}

export function createShowCards(arr) {
    container.innerHTML = "";
    const HTMLString = arr
        .map((item) => {
            let { name, overview, id } = item;
            const img = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
            const fType = "Show";
            const year = item.first_air_date;

            const fYear = parseInt(year.substr(0, 4));
            const fMonth = parseInt(year.substr(5, 2));

            const dDay = new Date();

            if (dDay.getFullYear() === fYear) {
                if (fMonth > dDay.getMonth() + 1) {
                    year = "Coming Soon";
                }
            }

            return `
            <div class="movie-card" id="${id}" data-type="${fType}">
                <img src="${img}" id="poster" alt="Poster not available!">
                <div class="overlay"></div>

                <div class="know-more">
                    <h3>${name}</h3>
                    <div class="overview">
                        <p>${overview}<p>
                    </div>

                    <div class="extra-details">
                        <span class="year" style="margin-right: ${
                            year == "Coming Soon" ? "0.5rem" : "1rem"
                        };">${
                year == "Coming Soon" ? year : year.substr(0, 4)
            }</span>
                        <span class="media-type">${fType}</span>
                    </div>
                </div>
            </div>
            `;
        })
        .join("");
    container.innerHTML = HTMLString;
}
