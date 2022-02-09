// Helper Function
function getElements(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check the selected element ${selection}`);
    }
}

// Songs
const songs = [
    {
        name: "see-you-again",
        displayName: "See You Again",
        artist: "Wiz Khalifa",
        link: "https://www.youtube.com/watch?v=RgKAFK5djSk",
    },
    {
        name: "uptown-funk",
        displayName: "Uptown Funk",
        artist: "Mark Ronson",
        link: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
    },
    {
        name: "blank-space",
        displayName: "Blank Space",
        artist: "Taylor Swift",
        link: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
    },
    {
        name: "sugar",
        displayName: "Sugar",
        artist: "Maroon 5",
        link: "https://www.youtube.com/watch?v=09R8_2nJtjg",
    },
    {
        name: "sky-full-of-stars",
        displayName: "Sky Full Of Stars",
        artist: "ColdPlay",
        link: "https://www.youtube.com/watch?v=VPRjCeoBqrI",
    },
];

// ======== Selections ========
const music = getElements("audio");

const prevBtn = getElements("#prev");
const playBtn = getElements("#play");
const nextBtn = getElements("#next");

const image = getElements("img");
const link = getElements("#link");
const title = getElements("#title");
const artist = getElements("#artist");

const progressContainer = getElements("#progress-container");
const progress = getElements("#progress");
const currentTimeElement = getElements("#current-time");
const durationElement = getElements("#duration");

// Check if playing
let isPlaying = false; // Default

// ==== Play/Pause Function ====
function playSong() {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
}
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
}

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
    link.href = song.link;
}

// ==== prevSong & nextSong ====
let index = 0;

function prevSong() {
    index--;
    if (index < 0) {
        index = songs.length - 1;
    }

    // console.log(index);
    loadSong(songs[index]);
    playSong();
}

function nextSong() {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }

    // console.log(index);
    loadSong(songs[index]);
    playSong();
}

// ==== Update Progress Bar and Time ====
function updateProgressBar(e) {
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;
        // console.log(duration, currentTime);

        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // Update duration and currentTime
        durationElement.textContent = convertToMins(duration);
        currentTimeElement.textContent = convertToMins(currentTime);
    }
}
// Helper function for converting secs to mins
function convertToMins(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Delay switching duration Element to avoid NaN
    if (seconds) {
        // if seconds is available then only return the statement
        return `${minutes}:${seconds}`;
    }
}

// ==== setProgressBar ====
function setProgressBar(e) {
    // NOTES
    // clientWidth is the total width
    // offsetX is point where the user clicked

    const totalWidth = this.clientWidth;
    const clickedPoint = e.offsetX;

    const { duration } = music;
    const clickedSecs = (clickedPoint / totalWidth) * duration;
    music.currentTime = clickedSecs;
}

// ======== Event Listeners ========
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

// Play next song when ended
music.addEventListener("ended", nextSong);
