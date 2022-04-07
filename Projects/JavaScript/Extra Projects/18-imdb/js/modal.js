// ==== Imports ==== //
import { getElement } from "./helperFunctions.js";

// ==== Selections ==== //
const mYear = getElement(".info .header h4");
const modal = getElement(".modal-container");
const mTitle = getElement(".info .header h1");
const mDesc = getElement(".info .description");
const mPoster = getElement(".info .header img");
const mType = getElement(".info .header .type");
const mKnowMoreBtn = getElement("#know-more-btn");
const mRating = getElement(".info .header .rating");
const mRuntime = getElement(".info .header .minutes");
const mDescText = getElement(".info .description .text");

// ==== Get and Update Modal Data ==== //
async function getModalData(url) {
    const response = await fetch(url);
    const data = await response.json();

    updateModel(data);
}

function updateModel(data) {
    const name = data.title ? data.title : data.name;
    const releaseYear = (
        data.release_date ? data.release_date : data.first_air_date
    ).substr(0, 4);
    const time = data.runtime
        ? `${data.runtime} mins`
        : `${data.episode_run_time[0]} mins each`;

    // Styles Updates
    if (name.length > 33) {
        mYear.style.marginTop = "5px";
        mDesc.style.marginTop = "1rem";
    } else {
        mYear.style.marginTop = "25px";
        mDesc.style.marginTop = "2.25rem";
    }
    
    // Know More Links
    if (data.release_date) { // Movie
        mKnowMoreBtn.href =`https://www.imdb.com/title/${data.imdb_id}`;
    } else { // Shows
        mKnowMoreBtn.href =`https://www.themoviedb.org/tv/${data.id}`;
    }

    // DOM
    mPoster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    mTitle.textContent = name;
    mYear.textContent = releaseYear;
    mRating.textContent = data.vote_average;
    mRuntime.textContent = time;
    mDescText.textContent = data.overview;
    mType.textContent = data.genres[0].name;
}

// ==== Event Listeners ==== //
container.addEventListener("click", (e) => {
    const id = e.target.parentElement.id;
    const type = e.target.parentElement.dataset.type;
    let detailsURL = ``;

    if (type == "Movie") {
        detailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=0fb7f7f773d1e2882602ab49a68c927d`;
    } else if (type == "Show") {
        detailsURL = `https://api.themoviedb.org/3/tv/${id}?api_key=0fb7f7f773d1e2882602ab49a68c927d`;
    }

    if (e.target.classList.contains("overlay")) {
        getModalData(detailsURL);
        modal.showModal();
    }
});
