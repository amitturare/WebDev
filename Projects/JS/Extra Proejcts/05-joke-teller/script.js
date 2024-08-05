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
const audioElement = getElements("#audio");
const btn = getElements("#button");

// Passing jokes as src
function tellMe(joke) {
    console.log(`Loaded joke: ${joke}`);

    VoiceRSS.speech({
        key: "fc520fd6802f4c2a8254ee6df36f2fda",
        src: joke,
        hl: "en-us",
        v: "Amy",
        r: 0,
        c: "mp3",
        f: "44khz_16bit_stereo",
        ssml: false,
    });
}

let joke;

// Fetch Jokes
async function getJokes() {
    const apiURL =
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist";
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Join the two part jokes
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }

        // Speech
        tellMe(joke);

        // Disable button
        toggleButton();
    } catch (err) {
        console.log(`Fix the error: ${err}`);
    }
}

// Toggle btn
function toggleButton() {
    btn.disabled = !btn.disabled;
}

// ==== Event Listeners ====
// Configure the btn
btn.addEventListener("click", getJokes);

// Disable the button whenever audio is played
audioElement.addEventListener("ended", toggleButton);
