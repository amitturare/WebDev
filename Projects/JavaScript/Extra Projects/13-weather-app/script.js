// Helper Function
const getElements = (selection) => {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(
            `Please check the selection ${selection} and try again`
        );
    }
};

// ==== Selections ====
const wrapper = getElements(".wrapper");
const form = getElements("#form");
const search = getElements(".search");
const inputPart = getElements(".input-part");
const backBtn = getElements(".back-btn");
const weatherPart = getElements(".weather-part");

const iconEl = getElements(".icon");
const numberEl = getElements(".number");
const weatherEl = getElements(".weather");
const locationEl = getElements(".location-text");

let backBtnHidden = false;

// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}

const apiKey = "95b6fc9a2ecd4b5581b31840222502";

const URL = (city) =>
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

async function getWeatherByLocation(city) {
    const response = await fetch(URL(city));
    const data = await response.json();

    updateDOM(data);
}

// ==== Update the DOM ====
function updateDOM(data) {
    const temp = data.current.temp_c;
    const location = data.location.name;
    const country = data.location.country;
    const text = data.current.condition.text;
    const icon = data.current.condition.icon;

    // Hide input-part
    inputPart.style.display = "none";

    // Show weather-part
    weatherPart.style.display = "grid";

    // Update Dom
    iconEl.src = icon;
    numberEl.textContent = temp;
    weatherEl.textContent = text;
    locationEl.textContent = `${location}, ${country}`;

    // show back-btn
    backBtn.style.visibility = "visible";
}

// ==== Event Listeners ====
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});

backBtn.addEventListener("click", () => {
    // Show input-part
    inputPart.style.display = "block";

    // Hide weather-part
    weatherPart.style.display = "none";
    // Clear search box
    search.value = "";

    // Hide backBtn
    backBtn.style.visibility = "hidden";
});
